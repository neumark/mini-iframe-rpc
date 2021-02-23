const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

const libraryName = pkg.name;
// we can do builds targeting es6, but the size savings are negligible.
const esVersion = 'es5';
// when tests are running, [name] must be part of the filename to avoid collisions
const outputFile = prod => `${libraryName}${prod ? '.min' : '' }.js`;
const targetedBrowsers = esVersion === 'es5'? require('./browsers.json') : 'defaults';
const babelLoaderConfig = {
      loader: "babel-loader",
      options: {
        presets: [
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
            [
                '@babel/plugin-transform-runtime', 
                {"corejs": 3}
            ]
        ]
      }
    };
const isProduction = webpackArgv => webpackArgv.mode === 'production';

module.exports = (_, webpackArgv) => ({
  mode: webpackArgv.mode,
  entry: {
    script: [ __dirname + '/src/'+libraryName+'.ts']
  },
  devtool: "source-map",
  output: {
    path: __dirname + '/dist',
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
        test: /\.tsx?$/,
        use: [babelLoaderConfig, 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: babelLoaderConfig
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.tsx', '.ts']
  },
  plugins: [
    new webpack.DefinePlugin({
      '__VERSION__': JSON.stringify(pkg.version),
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
