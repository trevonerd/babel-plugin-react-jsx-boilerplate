module.exports = function jsxClass() {
    return {
        visitor: {
            JSXAttribute(path) {
                if (path.node.name === 'class') path.node.name = 'className';
                return node;
            }
        }
    };
}