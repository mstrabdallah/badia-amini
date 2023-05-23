const path = require('path')
const withPlugins = require('next-compose-plugins');
const withLess = require("next-with-less");
const nextTranslate = require('next-translate');



const plugins = [
  [nextTranslate],
  [withLess],
];

module.exports = withPlugins(plugins, {

  reactStrictMode: false,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    domains: ['manager.bshopa.com'],
  },


  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }

});
