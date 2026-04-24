(function () {
    const STORAGE_KEY = "perfect-body-language";
    const FALLBACK_LANG = "en";
    const listeners = new Set();
    let isBound = false;

    function normalizeLanguage(value) {
        return value === "ru" ? "ru" : FALLBACK_LANG;
    }

    function getStoredLanguage() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return normalizeLanguage(stored);
        }

        return navigator.language && navigator.language.toLowerCase().startsWith("ru") ? "ru" : FALLBACK_LANG;
    }

    function getLanguage() {
        return normalizeLanguage(document.documentElement.lang || getStoredLanguage());
    }

    function setLanguage(lang) {
        const normalized = normalizeLanguage(lang);
        localStorage.setItem(STORAGE_KEY, normalized);
        document.documentElement.lang = normalized;
        updateLanguageButtons(normalized);
        listeners.forEach((listener) => listener(normalized));
    }

    function updateLanguageButtons(lang) {
        document.querySelectorAll("[data-set-lang]").forEach((button) => {
            button.classList.toggle("is-active", button.dataset.setLang === lang);
        });
    }

    function resolveValue(entry, lang) {
        if (entry == null) {
            return "";
        }

        if (typeof entry === "string") {
            return entry;
        }

        return entry[lang] || entry[FALLBACK_LANG] || "";
    }

    function applyTranslations(translations, lang) {
        if (!translations) {
            return;
        }

        document.querySelectorAll("[data-i18n]").forEach((node) => {
            const key = node.dataset.i18n;
            if (!translations[key]) {
                return;
            }

            node.textContent = resolveValue(translations[key], lang);
        });

        document.querySelectorAll("[data-i18n-html]").forEach((node) => {
            const key = node.dataset.i18nHtml;
            if (!translations[key]) {
                return;
            }

            node.innerHTML = resolveValue(translations[key], lang);
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
            const key = node.dataset.i18nPlaceholder;
            if (!translations[key]) {
                return;
            }

            node.setAttribute("placeholder", resolveValue(translations[key], lang));
        });

        document.querySelectorAll("[data-i18n-title]").forEach((node) => {
            const key = node.dataset.i18nTitle;
            if (!translations[key]) {
                return;
            }

            node.setAttribute("title", resolveValue(translations[key], lang));
        });

        if (translations.__title) {
            document.title = resolveValue(translations.__title, lang);
        }
    }

    function translateMappedText(target, map, lang) {
        const nodes = typeof target === "string" ? document.querySelectorAll(target) : target;

        Array.from(nodes).forEach((node) => {
            const original = node.dataset.baseText || node.textContent.trim();
            if (!node.dataset.baseText) {
                node.dataset.baseText = original;
            }

            const translation = map[original];
            node.textContent = translation ? resolveValue(translation, lang) : original;
        });
    }

    function bindLanguageButtons() {
        if (isBound) {
            return;
        }

        isBound = true;
        document.addEventListener("click", (event) => {
            const button = event.target.closest("[data-set-lang]");
            if (!button) {
                return;
            }

            setLanguage(button.dataset.setLang);
        });
    }

    function initPage(options = {}) {
        const translations = options.translations || null;
        const handler = (lang) => {
            updateLanguageButtons(lang);
            applyTranslations(translations, lang);
            if (typeof options.onLanguageChange === "function") {
                options.onLanguageChange(lang);
            }
        };

        bindLanguageButtons();
        listeners.add(handler);

        const initialLanguage = getStoredLanguage();
        document.documentElement.lang = initialLanguage;
        handler(initialLanguage);
    }

    window.SiteApp = {
        getLanguage,
        initPage,
        resolveValue,
        setLanguage,
        translateMappedText
    };
})();
