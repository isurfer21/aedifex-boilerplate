// @file main.js
/**
 * Global model object
 */
Model = {};
/**
 * Main is class to bootstrap app
 */
class Main {
    /**
     * Static method to load locale
     * @param {object} data   locale content
     */
    static loadLocale(data) {
        console.log('Main.loadLocale');
        Model.i18n = data;
        I18N.realign();
        Main.loadPages();
    }
    /**
     * Static method to load pages
     */
    static loadPages() {
        console.log('Main.loadPages');
        Splash.getInstance().show();
    }
    /**
     * Static method to initialize
     */
    static initialize() {
        console.log('Main.initialize');
        Model.languageCode = I18N.getNavigatorLanguage();
        let locale = `i18n/${Model.languageCode}.json`;
        $.getJSON(locale, Main.loadLocale);
    }
}
/**
 * When document gets ready then initialise main
 */
$(document).ready(Main.initialize);
