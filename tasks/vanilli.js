'use strict';
var vanilli = require('vanilli');

module.exports = function (grunt) {
    var vanilliServer;

    grunt.registerTask('vanilli', 'Start/Stop Vanilli', function (target) {

        var config  = this.options(),
            targets = {
                start: function () {
                    vanilliServer = vanilli.init(config);
                    vanilliServer.listen(config.port);
                },
                stop: function () {
                    vanilliServer.stop();
                }
            };

        if (targets[ target ]) {
            targets[ target ]();
        } else {
            throw new Error("Unrecognised target '" + this.target + "'.");
        }
    });
};
