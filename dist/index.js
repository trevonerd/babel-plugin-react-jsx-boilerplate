'use strict';

module.exports = function jsxClass() {
    return {
        visitor: {
            JSXAttribute: function JSXAttribute(path) {
                if (path.node.name.name === 'class') {
                    path.node.name.name = 'className';
                }
            }
        }
    };
};