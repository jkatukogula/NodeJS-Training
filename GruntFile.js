/**
 * Created by jkatukogula on 3/2/2015.
 */

module.exports = function(grunt) {
    grunt.initConfig({
// configure nodemon
        nodemon: {
            dev: {
                script: 'app.js'
            }
        }
    });
// load nodemon
    grunt.loadNpmTasks('grunt-nodemon');
// register the nodemon task when we run grunt
    grunt.registerTask('default', ['nodemon']);
};