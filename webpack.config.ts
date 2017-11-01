const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './src/dist',
        port: 8080,
        hot: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['d.ts','.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.ts|\.tsx$/,
            loader: 'source-map-loader',
            include: path.resolve(__dirname, './src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }, {
            test: /\.ts|\.tsx$/,
            loader: 'awesome-typescript-loader',
            options: {
                configFileName: path.resolve(__dirname, './tsconfig.json')
            },
            include: path.resolve(__dirname, './src'),
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