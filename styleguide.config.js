var createNwbWebpackConfig = require('create-nwb-webpack-config');

module.exports = {
  webpackConfig: createNwbWebpackConfig(),
  components: 'src/*.js',
  showSidebar: false
};
