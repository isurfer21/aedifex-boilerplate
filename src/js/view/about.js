// @file about.js
/**
 * About is singleton class to manage view
 */
class About {
    /**
     * Constructor method
     */
    constructor() {
        if (this.instance instanceof About) {
            throw Error('Singleton class restricts new instance creation');
        }
    }
    /**
     * Get instance of singleton class
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new About();
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
        console.log('About.navigate');
        this.hide();
        Home.getInstance().show();
    }
    listen() {
        this.steers.navigate = this.navigate.bind(this);
        
        this.navHome = this.container.find('#navHome');
        this.navHome.on('click', this.steers.navigate);
    }
    /**
     * This function initializes the class.
     */
    initialize() {
        console.log('About.initialize');
        this.container = $('#about');
        Dom.bind(this.container);
        this.steers = {};
        this.listen();
    }
}