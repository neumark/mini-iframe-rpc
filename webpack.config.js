const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');
const exec = require('child_process').execSync;

const libraryName = pkg.name;
// we can do builds targeting es6, but the size savings are negligible.
const esVersion = 'es5';
// when tests are running, [name] must be part of the filename to avoid collisions
const outputFile = prod => `${libraryName}${prod ? '.min' : '' }.js`;
const targetedBrowsers = esVersion === 'es5'? require('./browsers.json') : 'defaults';

const isProduction = webpackArgv => webpackArgv.mode === 'production';

// get git version
const gitHash = exec('git log -1 --format="%h"').toString().trim();

module.exports = (_, webpackArgv) => ({
  mode: webpackArgv.mode,
  entry: {
    script: [ __dirname + '/src/'+libraryName+'.ts']
  },
  devtool: "source-map",
  output: {
    path: __dirname + '/lib',
    filename: outputFile(isProduction(webpackArgv)),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx|\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
                "@babel/typescript",
                [
                    '@babel/preset-env',
                    {
                        "debug": true,
                        "corejs":3,
                        "useBuiltIns": "usage",
                        "targets": targetedBrowsers
                    }
                ]
            ],
            plugins: [
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread",
                [
                    '@babel/plugin-transform-runtime', 
                    {"corejs": 3}
                ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.tsx', '.ts']
  },
  plugins: [
    new webpack.DefinePlugin({
      '__VERSION__': JSON.stringify(gitHash),
      '__BUILDDATE__': JSON.stringify((new Date()).toISOString())
    }),
  ],
  optimization: {
    minimize: isProduction(webpackArgv),
    minimizer: [ new TerserPlugin({
        terserOptions: {
          ecma: (esVersion === "es6") ? 6 : 5,
          parse: {},
          compress: {},
          format: { comments: false, },
        },
        extractComments: false,
      })]
  }
});
