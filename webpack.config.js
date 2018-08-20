const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: { lib: `./src/index.ts` },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].common.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
        alias: {
            src: path.resolve('./src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
};
