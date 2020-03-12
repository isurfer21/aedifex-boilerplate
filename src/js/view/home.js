// @file home.js
/**
 * Home is singleton class to manage view
 */
class Home {
    /**
     * Constructor method
     */
    constructor() {
        if (this.instance instanceof Home) {
            throw Error('Singleton class restricts new instance creation');
        }
    }
    /**
     * Get instance of singleton class
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new Home();
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
     * This function navigate to another page.
     */
    navigate(e) {
        console.log('Home.navigate');
        this.hide();
        About.getInstance().show();
    }
    listen() {
        this.steers.navigate = this.navigate.bind(this);

        this.navAbout = this.container.find('#navAbout');
        this.navAbout.on('click', this.steers.navigate);
    }
    /**
     * This function initializes the class.
     */
    initialize() {
        console.log('Home.initialize');
        this.container = $('#home');
        Dom.bind(this.container);
        this.steers = {};
        this.listen();
    }
}