(function () {
    function getParam(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    function buildTechniqueDetails() {
        const collectionKey = getParam("collection") || "dumbbells";
        const index = Number.parseInt(getParam("index"), 10);
        const library = window.TechniqueLibrary;
        const collection = library.collections[collectionKey];
        const cardRoot = document.getElementById("detailCard");
        const fallback = document.getElementById("detailFallback");

        function render(lang) {
            if (!collection || Number.isNaN(index) || !collection.exercises[index]) {
                fallback.hidden = false;
                cardRoot.hidden = true;
                document.title = lang === "ru" ? "Карточка упражнения" : "Exercise details";
                return;
            }

            const exercise = collection.exercises[index];
            const otherLang = lang === "ru" ? "en" : "ru";

            if (collection.accent && collection.accentRgb) {
                document.body.style.setProperty("--accent", collection.accent);
                document.body.style.setProperty("--accent-rgb", collection.accentRgb);
            }

            fallback.hidden = true;
            cardRoot.hidden = false;

            document.getElementById("detailEyebrow").textContent = library.groupLabels[exercise.group][lang];
            document.getElementById("detailTitle").textContent = exercise.title[lang];
            document.getElementById("detailSubtitle").textContent = exercise.title[otherLang];
            document.getElementById("detailSummary").textContent = exercise.hook[lang];
            document.getElementById("detailFocus").textContent = exercise.focus[lang];
            document.getElementById("detailCue").textContent = exercise.cue[lang];
            document.title = lang === "ru" ? `Карточка: ${exercise.title.ru}` : `Details: ${exercise.title.en}`;
        }

        SiteApp.initPage({
            translations: {
                back: { en: "Back", ru: "Назад" },
                brand: { en: "Perfect Body Guide", ru: "Гид по идеальному телу" },
                pageTitle: { en: "Exercise detail card", ru: "Подробная карточка упражнения" },
                pageCopy: {
                    en: "Use this page when you want the exercise name, main focus, and technical cue in one place.",
                    ru: "Используй эту страницу, когда нужно увидеть название упражнения, основной акцент и техническую подсказку в одном месте."
                },
                summaryLabel: { en: "Overview", ru: "Описание" },
                focusLabel: { en: "Focus", ru: "Акцент" },
                cueLabel: { en: "Cue", ru: "Подсказка" },
                fallbackTitle: { en: "Exercise was not found", ru: "Упражнение не найдено" },
                fallbackCopy: {
                    en: "Open the card from one of the technique pages to load a specific exercise.",
                    ru: "Открой карточку с одной из страниц техники, чтобы загрузить конкретное упражнение."
                },
                footer: {
                    en: "Language preference stays the same here too.",
                    ru: "Выбор языка сохраняется и на этой странице."
                }
            },
            onLanguageChange: render
        });
    }

    window.buildTechniqueDetails = buildTechniqueDetails;
})();
