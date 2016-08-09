'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
    });

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['module.html'],
                ignorePath: /\.\.\//
            }
        }
    });

    grunt.registerTask('default', [
        'wiredep'
    ]);
};
