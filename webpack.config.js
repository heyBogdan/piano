'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./frontend/index.jsx",
    output: {
        filename: './public/bundle.js',
        path:path.resolve(__dirname, 'public')
    },

    watch: NODE_ENV == 'development',

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : false,

    // devServer: {
    //     proxy: {
    //         '*':'http://localhost:8080/public'
    //     }
    // },

    plugins:[
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
    ],

    module:{

        rules:[
            {
                test:/\.jsx$/,
                exclude: /(node_modules)/,
                use:[
                    {
                      loader:'babel-loader'  
                    }
                ]
            },
            {
              test: /\.scss$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" }
              ]
            }
        ]
    }

};

if (NODE_ENV == 'production'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJSPlugin({
            compress:{
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}