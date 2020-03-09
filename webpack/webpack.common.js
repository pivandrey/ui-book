const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, '../');

// common
const alias = require('./common/common.alias');
const modules = require('./common/common.modules');
const plugins = require('./common/common.plugins');


const webpackConfig = {
    mode: process.env.NODE_ENV,
    entry : path.resolve(PROJECT_DIR, 'src/index.js'),
    output: {
        filename: '[name].js?[hash]',
        path: path.resolve(PROJECT_DIR, 'build'),
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: alias
    },
    module: modules,
    plugins: plugins,
};

module.exports = webpackConfig;
