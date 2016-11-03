module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    compass: {                  // Task 
      dist: {                   // Target 
        options: {              // Target options 
          sassDir: 'src/scss',
          cssDir: 'dist/css',
          environment: 'production'
        }
      },
      dev: {                    // Another target 
        options: {
          sassDir: 'src/scss',
          cssDir: 'dist/css'
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "src/js",
          mainConfigFile: "src/js/config.js",
          name: "almond", /* assumes a production build using almond, if you don't use almond, you
                                     need to set the "includes" or "modules" option instead of name */
          include: [ "main.js" ],
          out: "dist/js/optimized.js"
        }
      }
    },
    sass: {                              // Task 
        dist: {                            // Target 
          options: {                       // Target options 
            style: 'expanded'
          },
          files: {                         // Dictionary of files 
            'main.css': 'main.scss',       // 'destination': 'source' 
            'widgets.css': 'widgets.scss'
          }
        }
      },
    watch: {
      css: {
        files: ['dist/css/*.css'],
        tasks: ['sass']
      },
      scripts: {
        files: ['**/*.js'],
        tasks: ['requirejs'],
        options: {
          spawn: false,
        },
      },
    },
    browserSync: {
        bsFiles: {
            src : ['dist/css/*.css', '*.html']
        },
        options: {
            server: {
                baseDir: "./"
            }
        }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'requirejs', 'browserSync']);
  grunt.registerTask('dev', ['browserSync', 'watch']);
  grunt.registerTask('js', ['requirejs']);

};