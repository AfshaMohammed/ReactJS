var path = require('path');
module.exports = {
	entry: './script.jsx', //Specify the react file
    output:{
    	path : path.resolve(__dirname, ''), //specify the html file
        filename: 'transpiled.js'
    },
    module: {
    	loaders:[
    		{
    			test: /\.jsx?$/,
    			loaders: 'babel-loader',
    			exclude: /node_modules/,
    			query: {
    				presets: ['es2015', 'react']
    			}
    		}
    	]
    }
}