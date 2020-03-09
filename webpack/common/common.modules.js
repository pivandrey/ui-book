const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const createStyleConfig = (cssModules = true) =>  [
    require.resolve('style-loader'),
    {
        loader: require.resolve('css-loader'),
        options: {
            importLoaders: 1,
            modules: cssModules
        },
    },
    {
        loader: require.resolve('postcss-loader'),
        options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                    browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                }),
            ],
        },
    },
];

module.exports = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            oneOf: [
                {
                    resourceQuery: /cssModuleDisable/,
                    use: createStyleConfig(false)
                },
                {
                    use: createStyleConfig(true)
                }
            ]
        },
        {
            test: /\.png|jpg|gif$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        outputPath: 'images/'
                    }
                }
            ]
        },
        {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            ]
        },
        {
            test: /\.svg$/,
            use: [
                {
                    loader: 'svg-sprite-loader',
                    options: {
                        esModule: true,
                        spriteFilename: 'icons/sprite.svg',
                        publicPath: '/'
                    }
                },
                {
                    loader: 'svgo-loader',
                    options: {
                        plugins: [{ removeAttrs: { attrs: ['fill.*!none'] } }]
                    }
                }
            ]
        }
    ]
};
