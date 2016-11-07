module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        babel: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    "<%= pkg.distresources %>/js/optimized.js": "<%= pkg.distresources %>/js/optimized.js"
                }
            }
        },

        clean: ["dist"],

        // copy
        copy: {
            main: {
                files: [
                    // includes files within path 
                    {
                        expand: true,
                        cwd: '<%= pkg.devresources %>/img',
                        src: '**',
                        dest: '<%= pkg.distresources %>/img'
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
            dev: {
                options: {
                    baseUrl: "<%= pkg.devresources %>/js/modules",
                    mainConfigFile: "<%= pkg.devresources %>/js/config.js",
                    name: "almond",
                    //include: ["main.js"],
                    out: "<%= pkg.distresources %>/js/optimized.js",
                    preserveLicenseComments: false,
                    optimize: "none"
                }
            },
            dist: {
                options: {
                    baseUrl: "<%= pkg.devresources %>/js/modules",
                    mainConfigFile: "<%= pkg.devresources %>/js/config.js",
                    name: "almond",
                    //include: ["main.js"],
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
                tasks: ['requirejs:dev'],
                options: {
                    spawn: false
                }
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // Define tasks
    grunt.registerTask('default', ['clean', 'sass', 'requirejs:dev', 'babel', 'copy', 'browserSync', 'watch']);
    grunt.registerTask('dist', ['clean', 'sass', 'cssmin', 'requirejs:dist', 'babel', 'copy']);

};