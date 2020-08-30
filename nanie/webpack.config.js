const path = require('path');

var webpack = require('webpack');
new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
});

module.exports = {
    entry: './src/NanieApps.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader', 
                    // Translates CSS into CommonJS
                    //'css-loader?sourceMap=true', 
                    'css-loader', 
                    // // Compiles Sass to CSS
                    'sass-loader']
            },
        ],
    },
    externals: {
        // require("jquery") is external and available on the global var jQuery
        'jquery': 'jQuery'
    },
    


    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'NanieApps.js',
        path: path.resolve(__dirname, 'public'),
    },
};
