const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: 
                {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: 
                {
                    presets: ['env', 'react']
                }
            },
            {test: /locales/, loader: '@alienfast/i18next-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};