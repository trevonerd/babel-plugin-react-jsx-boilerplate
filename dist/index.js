'use strict';

module.exports = function jsxClass() {
    return {
        visitor: {
            JSXAttribute: function JSXAttribute(path, stats) {
                if (path.node.name.name === 'class') {
                    path.node.name.name = 'className';
                }
                if (stats.opts.forceLowerCase && path.node.name.name === 'className') {
                    path.node.value.value = path.node.value.value.toLowerCase();
                }
            }
        }
    };
};