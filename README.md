grunt-vanilli
=============
[![Build Status](https://travis-ci.org/kelveden/grunt-vanilli.png?branch=master)](https://travis-ci.org/kelveden/grunt-vanilli)
[![Dependencies Status](https://david-dm.org/kelveden/grunt-vanilli.png?branch=master)](https://david-dm.org/kelveden/grunt-vanilli)

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
        },
        start: {},
        stop: {}
    }
    ...
    grunt.registerTask('test', ['vanilli:start', 'testmystuff', 'vanilli:stop' ]);
