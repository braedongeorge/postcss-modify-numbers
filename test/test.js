var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var input = '.rule { width: 60px } .second { width: 90px }';

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-modify-all', function () {

    it('should add 2 to the width', function (done) {
        var output = '.rule { width: 30px } .second { width: 60px }';
        options = {
            property: 'width',
            number: 30,
            operation: 'subtract'
        }

        test(input, output, options, done);
    });

});
