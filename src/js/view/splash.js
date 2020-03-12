// @file splash.js
/**
 * Splash is singleton class to manage view
 */
class Splash {
    /**
     * Constructor method
     */
    constructor() {
        if (this.instance instanceof Splash) {
            throw Error('Singleton class restricts new instance creation');
        }
    }
    /**
     * Get instance of singleton class
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new Splash();
            this.instance.initialize();
        }
        return this.instance;
    }
    /**
     * This function hides the container.
     */
    hide() {
        this.container.addClass('hide');
    }
    /**
     * This function shows the container.
     */
    show() {
        this.container.removeClass('hide');
    }
    /**
     * Content method
     */
    listen() {
        console.log('Splash.listen');
        setTimeout(() => {
            this.hide();
            Home.getInstance().show();
        }, 1000);
    }
    /**
     * This function initializes the class.
     */
    initialize() {
        console.log('Splash.initialize');
        this.container = $('#splash');
        Dom.bind(this.container);
        this.show();
        this.listen();
    }
}