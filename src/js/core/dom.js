// @file dom.js
/**
 * Dom is class with methods to change the dom
 */
class Dom {
    /**
     * Static method to apply changes in the provided element.
     * @param {object} elmRef   element reference
     */
    static apply(elmRef) {
        let map = bindStr => {
            let args = [];
            if (!!bindStr && bindStr.indexOf(':') >= 0) {
                args = bindStr.split(':');
            }
            return args
        }
        let render = (elAttr, modelRef) => {
            switch (elAttr) {
                case 'text':
                    container.text(eval(modelRef));
                    break
                case 'html':
                    container.html(eval(modelRef));
                    break
                default:
                    container.attr(elAttr, eval(modelRef));
                    break
            }
        }
        var container = typeof elmRef === 'string' || elmRef instanceof String ? $(elmRef) : elmRef;
        let rope = map(container.data('bind'));
        render(rope[0], rope[1]);
    }
    /**
     * Static method to bind listener with the provided element.
     * @param {object} boxRef   box reference
     */
    static bind(boxRef) {
        boxRef.find('.auto-fill').each((i, el) => Dom.apply($(el)));
    }
}
