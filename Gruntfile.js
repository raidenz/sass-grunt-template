'use strict';
module.exports = function(grunt){

    // load all tasks
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass:dist']
            }
        },
        sass: {
            dist: {
                options: {                       // Target options
                    style: 'expanded' // nested, compact, compressed, expanded.
                },
                files: {
                    'css/bootstrap.min.css': 'sass/bootstrap/bootstrap.scss',
                    'style.css': 'sass/style/style.scss'
                }
            }
        },
        clean: {
            init: {
                src: ['build/']
            },
            build: {
                src: ['build/*', '!build/<%= pkg.name %>.zip']
            }
        },
        copy: {
            readme: {
                src: 'readme.md',
                dest: 'build/readme.txt'
            },
            build: {
                expand: true,
                src: ['**', '!node_modules/**', '!build/**', '!readme.md', '!Gruntfile.js', '!package.json' ], //'!psd/**', '!assets/**'
                dest: 'build/'
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '**.css',
                        // '**.scss',
                        '**.js',
                        '**.php'
                    ]
                },
                options: {
                    watchTask: true,
                    // proxy: "localhost/changeyourprojectfolder"
                    // server: './app',
                    server: {
                        baseDir: "./"
                    }
                },
            }
        },
        compress: {
            build: {
                options: {
                    archive: 'build/<%= pkg.name %>.zip'
                },
                expand: true,
                cwd: 'build/',
                src: ['**/*'],
                dest: '<%= pkg.name %>/'
            }
        }
    });

    grunt.registerTask('default', []);
    grunt.registerTask('dosass', ['sass:dist']);
    grunt.registerTask('on', ['browserSync:dev','watch:sass']);

    // Build task
    grunt.registerTask( 'build', [
        'clean:init',
        'copy',
        'compress:build',
        'clean:build'
    ]);
};
