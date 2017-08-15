var GasPlugin = require("gas-webpack-plugin");
module.exports = {
    resolve: {
        extensions: [".js", ".gs"]
    },
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: __dirname+'/dist',
	filename: 'code.gs'
    },
    plugins: [
	new GasPlugin()
    ]
}
