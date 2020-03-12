// @file utils.js
/**
 * Utils is class that consists generic utility methods
 */
class Utils {
    /**
     * Static method to check if the value is empty or not
     * @param {any} value   any type of value
     */
    static isEmpty(value) {
        return typeof value === 'undefined' || value === null;
    }
}
