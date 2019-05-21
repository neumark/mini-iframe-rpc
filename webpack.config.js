const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');
const browsers = require('./browsers.json');
const exec = require('child_process').execSync;

let libraryName = pkg.name;

let outputFile, mode;

if (env === 'production') {
  mode = 'production';
  outputFile = libraryName + '.min.js';
} else {
  mode = 'development';
  outputFile = libraryName + (env === 'development' ? '.js' : '-[name].js');
}

// get git version
const gitHash = exec('git log -1 --format="%h"').toString().trim();

const config = {
  mode: mode,
  entry: {
    script: [ __dirname + '/src/'+libraryName+'.ts']
  },
  devtool: false,
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
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
                        "targets": browsers
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
      '__VERSION__': JSON.stringify(gitHash)
    }),
    new webpack.SourceMapDevToolPlugin({
      // this is the url of our local sourcemap server
      // publicPath: 'sourcemaps/',
      filename: outputFile + '.map'
    })
  ],
  optimization: {
    minimizer: [ new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          ecma: 5,
          output: {
            comments: false
          },
        },
      })]
  }
};
module.exports = config;
