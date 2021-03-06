const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const htmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package');

const devConfig = {
  mode: "development",
  devServer: {
    port: "8081",
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins:[
      new ModuleFederationPlugin({
        name: 'marketing',
        filename: 'remoteEntry.js',
        exposes: {
          './MarketingIndex': './src/bootstrap'
        },
        shared: packageJson.dependencies,
      }),
      new htmlWebpackPlugin({
          template: './public/index.html'
      })
  ]
};


module.exports = merge(devConfig, commonConfig);
