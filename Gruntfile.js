'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        vanilli: {
            options: {
                port: 14000,
                logLevel: "debug"
            },
            start: {},
            stop: {}
        },
        bump: {
            options: {
                files: [ 'package.json' ],
                commitFiles: [ 'package.json' ],
                pushTo: "origin"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bunyan');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test', ['default', 'bunyan', 'vanilli:start', 'vanilli:stop' ]);
};
