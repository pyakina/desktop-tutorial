const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: resolve(__dirname, 'index.js'),
output: {
path: resolve(__dirname, 'dist'),
filename: 'main.[contenthash].js'
},
mode: "development",
plugins: [
new HtmlWebpackPlugin({ template: './index.html' }),


],
module: {
rules: [
{ test: 
 /\.s[ac]ss$/i,
use:
['style-loader',
     'css-loader', 

'sass-loader',

],

},
{
    test: /\.(png|jpe?g|gif)$/i,
    use: [
{
    loader: 'file-loader'
}

    ]
}


],

    
}
        
    };
    