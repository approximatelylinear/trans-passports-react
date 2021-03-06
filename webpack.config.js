/* global module, require, __dirname */
const webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
    	'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react'
		}),
		new webpack.DefinePlugin({
			// API_URL: 'http://localhost:6000/api/v1',
			API_URL: 'http://0.0.0.0:3000/api/v1',
			DEBUG: true
		}),
		// new webpack.DefinePlugin({
		//     'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:6000/api/v1')
		// });
	]
};
