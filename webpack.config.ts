const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './',
        port: 8080,
        hot: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['d.ts','.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.ts|\.tsx|\.js|\.jsx$/,
            loader: 'source-map-loader',
            include: [path.resolve(__dirname, './src'), path.resolve(__dirname, './src_old')]
        }, {
            test: /\.ts|\.tsx|\.js|\.jsx$/,
            loader: 'awesome-typescript-loader',
            options: {
                configFileName: path.resolve(__dirname, './tsconfig.json')
            },
            include: [path.resolve(__dirname, './src'), path.resolve(__dirname, './src_old')],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};