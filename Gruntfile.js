module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // compile foundation with babel
        babel: {
            options: {
                sourceMap: false,
                compact: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.devresources %>/vendor/foundation-sites/js',
                    src: ['*.js'],
                    dest: '<%= pkg.devresources %>/vendor/foundation-sites/js'
                }]
            }
        },

        // clean
        clean: ["dist"],

        // copy
        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: '<%= pkg.devresources %>/gfx',
                        src: '**',
                        dest: '<%= pkg.distresources %>/gfx'
                    },
                    {
                        expand: true,
                        cwd: '<%= pkg.devresources %>/img',
                        src: '**',
                        dest: '<%= pkg.distresources %>/img'
                    },
                    {
                        expand: true,
                        cwd: '<%= pkg.devresources %>/vendor/font-awesome/fonts',
                        src: '**',
                        dest: '<%= pkg.distresources %>/fonts'
                    },
                    {
                        expand: true,
                        cwd: '<%= pkg.devresources %>/download',
                        src: '**',
                        dest: '<%= pkg.distresources %>/download'
                    }
                ],
            },
        },

        // cssmin
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.distresources %>/css',
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= pkg.distresources %>/css'
                }]
            }
        },

        // requirejs
        requirejs: {
            dist: {
                options: {
                    baseUrl: "<%= pkg.devresources %>/js/modules",
                    mainConfigFile: "<%= pkg.devresources %>/js/config.js",
                    name: "almond",
                    //include: ["../main.js"],
                    out: "<%= pkg.distresources %>/js/optimized.js",
                    preserveLicenseComments: false,
                    optimize: "none"
                }
            }
        },

        // sass
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    '<%= pkg.distresources %>/css/main.css': '<%= pkg.devresources %>/scss/main.scss'
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    '<%= pkg.distresources %>/js/optimized.js': ['<%= pkg.distresources %>/js/optimized.js']
                }
            }
        },

        // browserSync
        browserSync: {
            bsFiles: {
                src: ['<%= pkg.distresources %>/css/*.css', '<%= pkg.distresources %>/js/*.js', '*.html']
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },

        // watch
        watch: {
            scss: {
                files: ['<%= pkg.devresources %>/scss/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['<%= pkg.devresources %>/js/**/*.js'],
                tasks: ['babel', 'requirejs'],
                options: {
                    spawn: false
                }
            },
            gfx: {
                files: ['<%= pkg.devresources %>/gfx/*'],
                tasks: ['copy'],
            },
            img: {
                files: ['<%= pkg.devresources %>/img/*'],
                tasks: ['copy'],
            },
            download: {
                files: ['<%= pkg.devresources %>/download/*'],
                tasks: ['copy'],
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // Define tasks
    grunt.registerTask('default', ['clean', 'sass', 'babel', 'requirejs', 'copy', 'browserSync', 'watch']);
    grunt.registerTask('dist', ['clean', 'sass', 'cssmin', 'babel', 'requirejs', 'uglify', 'copy']);

};