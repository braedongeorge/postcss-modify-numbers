var postcss = require('postcss');

module.exports = postcss.plugin('postcss-modify-all', function (opts) {
    opts = opts || {};

    // Work with options here
    var myprop = opts.property;
    var mynumber = opts.number;
    // var myoperation = opts.operation;

    return function (css, result) {
        css.walkDecls(myprop, function (decl) {
            var val = decl.value;
            var unit = val.match(/[^0-9]+/);
            var pattern = new RegExp('/' + unit + '/');
            val = val.replace(pattern,'');
            val = parseInt(val) - parseInt(mynumber);
            return decl.value = val + unit;
        });

        // Transform CSS AST here

    };
});
