// @file i18n.js
/**
 * I18N is class with methods to change the dom
 */
class I18N {
    /**
     * Static method to translate the provided dictionary.
     * @param {object} dict   dictionary
     */
    static translate(dict) {
        const entries = Object.entries(dict);
        for (const [key, val] of entries) {
            if (typeof dict[key] === 'object') {
                dict[key] = I18N.translate(dict[key]);
            } else if (typeof dict[key] === 'string') {
                let localePresence = val.indexOf('i18n|');
                if (localePresence >= 0) {
                    let localeKey = val.substring(localePresence + 5);
                    dict[key] = Model.i18n[localeKey];
                }
            }
        }
        return dict;
    }
    /**
     * Static method to check whether the language is right-to-left
     * @param {string} langISOCode   the ISO Code of the language
     */
    static isRTL(langISOCode) {
        const LANGUAGES_RTL = ['ar', 'dv', 'fa', 'ha', 'he', 'ks', 'ku', 'ps', 'ur', 'yi'];
        let langCode = langISOCode.substring(0, 2);
        return LANGUAGES_RTL.indexOf(langCode) > -1;
    }
    /**
     * Static method to re-align the text based on set language.
     */
    static realign() {
        if (I18N.isRTL(Model.languageCode)) {
            $('body').addClass('rtl');
        } else {
            $('body').removeClass('rtl');
        }
    }
    /**
     * Static method to determine the default language of the browser
     */
    static getNavigatorLanguage() {
        return navigator.languages && navigator.languages.length ?
            navigator.languages[0] :
            navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    }
}
