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
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('test', ['default', 'vanilli:start', 'vanilli:stop' ]);
    grunt.registerTask('publish', ['test', 'release' ]);

    grunt.registerTask('default', ['jshint']);
};
