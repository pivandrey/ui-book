const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
});
