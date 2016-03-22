module.exports = {
  dist: {
    options: {
      dest: '.tmp/scripts/constants/package.json.js',
      name: 'HolmesWebPackageJson'
    },
    constants: {
      packageJson: {
        name: 'holmes',
        version: '0.9.8',
        dependencies: {},
        devDependencies: {
          grunt: '~0.4.1',
          'grunt-autoprefixer': '~0.4.0',
          'grunt-bower-install': '~0.7.0',
          'grunt-concurrent': '~0.4.1',
          'grunt-contrib-clean': '~0.5.0',
          'grunt-contrib-coffee': '~0.7.0',
          'grunt-contrib-compass': '~0.6.0',
          'grunt-contrib-concat': '~0.3.0',
          'grunt-contrib-connect': '~0.5.0',
          'grunt-contrib-copy': '~0.4.1',
          'grunt-contrib-cssmin': '~0.7.0',
          'grunt-contrib-htmlmin': '~0.1.3',
          'grunt-contrib-imagemin': '~0.3.0',
          'grunt-contrib-jshint': '~0.7.1',
          'grunt-contrib-uglify': '~0.2.0',
          'grunt-contrib-watch': '~0.5.2',
          'grunt-google-cdn': '~0.2.0',
          'grunt-angular-gettext': '~0.2.13',
          'grunt-newer': '~0.5.4',
          'grunt-ngmin': '~0.0.2',
          'grunt-rev': '~0.1.0',
          'grunt-svgmin': '~0.2.0',
          'grunt-usemin': '~2.0.0',
          'jshint-stylish': '~0.1.3',
          'load-grunt-tasks': '~0.2.0',
          'time-grunt': '~0.2.1',
          'karma-ng-scenario': '~0.1.0',
          'grunt-karma': '~0.6.2',
          'karma-script-launcher': '~0.1.0',
          'karma-chrome-launcher': '~0.1.2',
          'karma-firefox-launcher': '~0.1.3',
          'karma-html2js-preprocessor': '~0.1.0',
          'karma-jasmine': '~0.1.5',
          requirejs: '~2.1.10',
          'karma-requirejs': '~0.2.1',
          'karma-coffee-preprocessor': '~0.1.2',
          'karma-phantomjs-launcher': '~0.1.1',
          karma: '~0.10.9',
          'karma-ng-html2js-preprocessor': '~0.1.0',
          'grunt-ng-constant': '^0.5.0',
          'grunt-sed': '^0.1.1',
          'grunt-file-creator': '~0.1.2'
        },
        engines: {
          node: '>=0.8.0'
        },
        scripts: {
          test: 'grunt test'
        }
      }
    }
  }
};