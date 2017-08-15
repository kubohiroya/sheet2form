var GasPlugin = require("gas-webpack-plugin");
module.exports = {
    resolve: {
        extensions: [".js", ".gs"]
    },
    context: __dirname,
    entry: './main.js',
    output: {
	path: __dirname+'/dist',
	filename: 'code.gs'
    },
    plugins: [
	new GasPlugin()
    ]
}
