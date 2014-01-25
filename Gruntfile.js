'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['web/assets/application-dev.css']
      }
    },
    less: {
      development: {
        options: {
          paths: ['assets/less']
        },
        files: {
          'web/assets/application-dev.css': 'assets/less/application.less'
        }
      },
      production: {
        options: {
          paths: ['assets/less'],
          cleancss: true
        },
        files: {
            'web/assets/application.css': 'assets/less/application.less'
        }
      }
    },
    watch: {
      less: {
        files: [
          'assets/bootstrap/*.less',
          'assets/less/*.less'
        ],
        tasks: ['less', 'csslint']
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // Register tasks
  grunt.registerTask('default', [
    'watch'
  ]);

};
