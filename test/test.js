var postcss = require('postcss');
var assert  = require('assert');

var plugin = require('../');

var example = '.rule { width: 60px } .second { height: 90px }';

describe('postcss-modify-all', function () {

    it('should add 30 to the width', function () {
        var output = '.rule { width: 90px } .second { height: 90px }';
        var options = {
            property:  'width',
            number:    30,
            operation: 'add'
        };

        var processed = postcss([ plugin(options) ]).process(example).css;
        assert.equal(output, processed);

    });


    it('should subtract 5.5 to the height', function () {
        var output = '.rule { width: 60px } .second { height: 84.5px }';
        var options = {
            property:  'height',
            number:    5.5,
            operation: 'subtract'
        };

        var processed = postcss([ plugin(options) ]).process(example).css;
        assert.equal(output, processed);
    });

    it('should divide the width by 1.5', function () {
        var output = '.rule { width: 40px } .second { height: 90px }';
        var options = {
            property:  'width',
            number:    1.5,
            operation: 'divide'
        };

        var processed = postcss([ plugin(options) ]).process(example).css;
        assert.equal(output, processed);
    });

    it('should multiply the height by 4.53', function () {
        var output = '.rule { width: 60px } .second { height: 407.7px }';
        var options = {
            property:  'height',
            number:    4.53,
            operation: 'multiply'
        };

        var processed = postcss([ plugin(options) ]).process(example).css;
        assert.equal(output, processed);
    });
});
