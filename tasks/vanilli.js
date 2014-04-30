'use strict';

module.exports = function (grunt) {

    var vanilli = require('vanilli');

    grunt.registerTask('vanilli', 'Start/Stop Vanilli', function (target) {
        var config = this.options(),
            targets = {
                start: function () {
                    vanilli.start(config);
                },
                stop: function () {
                    vanilli.stop();
                }
            };

        if (targets[target]) {
            targets[target]();
        } else {
            throw new Error("Unrecognised target '" + this.target + "'.");
        }
    });
};
