const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, './../build'),
        port: process.env.APP_PORT
    }

});
