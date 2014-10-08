module.exports = function(grunt) {

    grunt.initConfig({
        project: {
            name: "compare"
        },
        uglify: {
            def: {
                files: {
                    'dist/js/app.min.js': [
                        'src/lib/jquery-1.11.1.min.js',
                        'src/lib/bootstrap.min.js',
                        'src/js/compare.js',
                        'src/js/scripts.js'
                    ]
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css/styles.min.css': 'src/sass/styles.sass'
                }
            }
        },
        watch: {
            def: {
                files: [
                    'src/js/*.js',
                    'src/sass/*.sass'
                ],
                tasks: [
                    'newer:sass',
                    'newer:uglify'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['watch:def']);
};
