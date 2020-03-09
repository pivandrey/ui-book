const dotenv = require('dotenv');
const path = require('path');
const PROJECT_DIR = path.resolve(__dirname, './../../');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = [
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(PROJECT_DIR, 'src/index.html'),
        filename: 'index.html'
    }),
    new SpriteLoaderPlugin({plainSprite: true}),
    new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        PropTypes: 'prop-types',
        _: 'lodash',
        actionTemplate: [
            path.resolve(PROJECT_DIR, 'src/redux/actionTemplate.js'),
            'default'
        ],
        axios: [
            path.resolve(PROJECT_DIR, 'src/utils/axios.js'),
            'default'
        ],
    })
];
