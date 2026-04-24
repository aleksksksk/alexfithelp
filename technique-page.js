(function () {
    function escapeHtml(value) {
        return value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#39;");
    }

    function otherLanguage(lang) {
        return lang === "ru" ? "en" : "ru";
    }

    function getCollection() {
        const key = window.TechniquePageCollection;
        return {
            key,
            data: window.TechniqueLibrary.collections[key]
        };
    }

    function buildTechniquePage() {
        const library = window.TechniqueLibrary;
        const ui = library.ui;
        const { key, data: collection } = getCollection();
        const filtersRoot = document.getElementById("filters");
        const cardsRoot = document.getElementById("cards");
        const resultsRoot = document.getElementById("results");
        const titleRoot = document.getElementById("pageTitle");
        const introRoot = document.getElementById("pageIntro");
        const statARoot = document.getElementById("pageStatA");
        const statBRoot = document.getElementById("pageStatB");
        let activeGroup = "all";

        function visibleExercises() {
            return collection.exercises.filter((exercise) => activeGroup === "all" || exercise.group === activeGroup);
        }

        function renderFilters(lang) {
            const groups = ["all", "chest", "back", "legs", "shoulders", "arms", "core"];
            filtersRoot.innerHTML = groups.map((group) => {
                const label = library.groupLabels[group][lang];
                const classes = ["filter-chip"];
                if (group === activeGroup) {
                    classes.push("is-active");
                }

                return `<button type="button" class="${classes.join(" ")}" data-group="${group}">${escapeHtml(label)}</button>`;
            }).join("");
        }

        function renderResults(lang) {
            const total = visibleExercises().length;
            if (activeGroup === "all") {
                resultsRoot.textContent = ui.resultsAll[lang](total);
                return;
            }

            const label = library.groupLabels[activeGroup][lang];
            resultsRoot.textContent = ui.resultsFiltered[lang](label, total);
        }

        function renderCards(lang) {
            const secondaryLang = otherLanguage(lang);
            const hint = ui.hoverHint[lang];
            const focusLabel = ui.focus[lang];
            const cueLabel = ui.cue[lang];
            const detailsLabel = ui.details[lang];

            cardsRoot.innerHTML = visibleExercises().map((exercise, index) => `
                <article class="exercise-card" tabindex="0" data-group="${exercise.group}">
                    <div class="exercise-card__top">
                        <span class="exercise-badge">${escapeHtml(library.groupLabels[exercise.group][lang])}</span>
                        <span class="exercise-hint">${escapeHtml(hint)}</span>
                    </div>
                    <div class="dual-line">
                        <strong>${escapeHtml(exercise.title[lang])}</strong>
                        <span>${escapeHtml(exercise.title[secondaryLang])}</span>
                    </div>
                    <p class="exercise-summary">${escapeHtml(exercise.hook[lang])}</p>
                    <div class="exercise-details">
                        <div class="detail-item">
                            <strong>${escapeHtml(focusLabel)}</strong>
                            <p>${escapeHtml(exercise.focus[lang])}</p>
                        </div>
                        <div class="detail-item">
                            <strong>${escapeHtml(cueLabel)}</strong>
                            <p>${escapeHtml(exercise.cue[lang])}</p>
                        </div>
                        <a class="detail-link" href="dumbbell-details.html?collection=${encodeURIComponent(key)}&index=${index}">${escapeHtml(detailsLabel)}</a>
                    </div>
                </article>
            `).join("");

            bindCardInteractions();
        }

        function bindCardInteractions() {
            const cards = cardsRoot.querySelectorAll(".exercise-card");
            const touchLike = window.matchMedia("(hover: none), (pointer: coarse)").matches;

            cards.forEach((card) => {
                card.addEventListener("click", () => {
                    if (!touchLike) {
                        return;
                    }

                    card.classList.toggle("is-open");
                });

                card.addEventListener("keydown", (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        card.classList.toggle("is-open");
                    }
                });
            });
        }

        function render(lang) {
            titleRoot.textContent = collection.pageTitle[lang];
            introRoot.textContent = collection.pageIntro[lang];
            statARoot.textContent = collection.pageStatA[lang];
            statBRoot.textContent = collection.pageStatB[lang];
            renderFilters(lang);
            renderCards(lang);
            renderResults(lang);
            document.title = collection.fileTitle[lang];
        }

        filtersRoot.addEventListener("click", (event) => {
            const button = event.target.closest("[data-group]");
            if (!button) {
                return;
            }

            activeGroup = button.dataset.group;
            render(SiteApp.getLanguage());
        });

        const pageTranslations = Object.assign({
                back: { en: "Back", ru: "Назад" },
                brand: { en: "Perfect Body Guide", ru: "Гид по идеальному телу" },
                eyebrow: library.ui.eyebrow,
                footer: {
                    en: "Switch language any time. Exercise names keep their meaning with dual-language labels.",
                    ru: "Язык можно менять в любой момент. Названия упражнений сохраняют смысл за счет двух языков."
                }
            }, window.TechniquePageExtraTranslations || {});

        SiteApp.initPage({
            translations: pageTranslations,
            onLanguageChange: render
        });
    }

    window.buildTechniquePage = buildTechniquePage;
})();
