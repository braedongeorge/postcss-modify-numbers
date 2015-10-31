var postcss = require('postcss');

module.exports = postcss.plugin('postcss-modify-numbers', function (opts) {
    opts = opts || {};

    var options = {};
    options.myOperation =
        opts.operation !== undefined ? opts.operation : null;
    options.myProp = opts.property !== undefined ? opts.property : null;
    options.myNumber = opts.number !== undefined ? opts.number : null;
    options.myFixed = opts.decimals !== undefined ? opts.decimals : 3;

    return function (css) {
        css.walkDecls(options.myProp, function (decl) {
            var val = decl.value;
            var unit = val.match(/[^0-9]+/);
            var pattern = new RegExp('/' + unit + '/');
            val = val.replace(pattern, '');

            switch (options.myOperation) {
            case 'add':
                val = parseFloat(val) + parseFloat(options.myNumber);
                break;
            case 'subtract':
                val = parseFloat(val) - parseFloat(options.myNumber);
                break;
            case 'multiply':
                val = parseFloat(val) * parseFloat(options.myNumber);
                break;
            case 'divide':
                val = parseFloat(val) / parseFloat(options.myNumber);
                break;
            default:
                console.log('Invalid operation value');
                break;
            }
            val = +val.toFixed(options.myFixed);
            decl.value = val + unit;

            return decl.value;
        });

    };
});
