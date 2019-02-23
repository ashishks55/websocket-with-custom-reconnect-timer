const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/customSocket.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
	 new CopyWebpackPlugin([
						    {
						      from: './static',
						      
							}
	  	])
  ],
  watch:true
};