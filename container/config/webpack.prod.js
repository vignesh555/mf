const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package');

const DOMAIN_URL = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output:{
    filename: '[name].[contenthash].js'
  },
  plugins:[
      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          marketing: `marketing@${DOMAIN_URL}/marketing/remoteEntry.js`
        },
        shared: packageJson.dependencies,
      }),
  ]
};


module.exports = merge(commonConfig, prodConfig);
