module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-url'),
        require('postcss-nested'),
        require('postcss-preset-env')({
            browsers: 'last 2 versions',
            stage: 0
        }),
        require('autoprefixer')({
            browsers: ['> 1%', 'last 2 versions']
        })
    ]
};