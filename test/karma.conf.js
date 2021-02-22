const path = require('path');

const webpackConfig = require('../webpack.config.js')(null, {mode: 'development'});
delete webpackConfig.entry;
Object.assign(webpackConfig, {
 output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  stats: {
    modules: false,
    colors: true,
  },
  watch: false,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 1,
        },
      },
    },
  }
});

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    port: 9876,
    colors: true,
    singleRun: true,
    reporters: ['mocha'],
    files: [
      '*.spec.js',
      '*.spec.ts',
      {pattern: 'iframe.js', included: false, watched: false},
      {pattern: '*.html', included: false, watched: false}
    ],
    proxies: {
        "/app/": '/base/app/',
    },
    preprocessors: {
      '*.spec.js': ['webpack'],
      '*.spec.ts': ['webpack'],
      'iframe.js': ['webpack']
    },
    webpack: webpackConfig,
    browsers: ['Chrome'],
    customLaunchers: {
      'Chrome_Desktop' : {
        base: 'Chrome',
        options: {
          viewportSize: {
            width: 1000,
            height: 1000,
          },
        },
      },
    },
  });
};
