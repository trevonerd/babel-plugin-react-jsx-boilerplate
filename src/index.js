module.exports = function jsxClass() {
    return {
        visitor: {
            JSXAttribute(path) {
                if (path.node.name.name === 'class') {
                    path.node.name.name = 'className';
                }
            }
        }
    };
}