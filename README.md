grunt-vanilli
=============
[![Build Status](https://travis-ci.org/kelveden/grunt-vanilli.png?branch=master)](https://travis-ci.org/kelveden/grunt-vanilli)

> *IMPORTANT*: As of vanilli 3.x, this plugin is deprecated. Vanilli itself now provides its own javascript API that
> includes functions for managing the lifecycle of vanilli.

Grunt plugin for starting/stopping [vanilli](https://github.com/kelveden/vanilli).

Usage
-----
Installation:

    npm install grunt-vanilli --save-dev

The plugin allows:

 * Specification of the configuration for [vanilli](https://github.com/kelveden/vanilli) (see that project for configuration options).
 * Starting vanilli with `vanilli:start`.
 * Stopping vanilli with `vanilli:stop`.

Example
-------

    vanilli: {
        options: {
            port: 14000,
            logLevel: "debug"
        }
    }
    ...
    grunt.loadNpmTasks('grunt-vanilli');
    ...
    grunt.registerTask('test', ['vanilli:start', 'testmystuff', 'vanilli:stop' ]);
