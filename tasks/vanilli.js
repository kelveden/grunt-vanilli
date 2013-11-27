'use strict';

module.exports = function (grunt) {

    var vanilli = require('vanilli');

    grunt.registerMultiTask('vanilli', 'Start/Stop Vanilli', function () {

        var config = this.options(),
            targets = {
                start: function () {
                    vanilli.start(config);
                },
                stop: function () {
                    vanilli.stop();
                }
            };

        if (targets[this.target]) {
            targets[this.target]();
        } else {
            throw new Error("Unrecognised target '" + this.target + "'.");
        }
    });

};
