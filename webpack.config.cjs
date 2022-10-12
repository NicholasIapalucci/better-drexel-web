const path = require("path");

module.exports = {
    entry: "./src/main.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "content.js"
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    optimization:{
        minimize: false
    },
    //stats: 'none',
}
