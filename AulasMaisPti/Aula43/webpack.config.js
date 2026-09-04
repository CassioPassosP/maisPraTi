const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path") //ajuda a trabalhar dentro de caminho e arquivo

module.exports = {
    entry: "./src/index.js", // ponto de partida da aplicacao
    mode: "development",
    output:{
        filename: "bundle.js", // arquivo ja compactado
        path: path.resolve(__dirname, "public"), //resolver o caminho absoluto ate o nosso diretorio publico
        clean: true
    },

    module:{
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/, //evitar
                use: "babel-loader"   //usar
            }
        ]
    },

    resolve: {
      extensions: [".js", ".jsx"] //  importante
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "utils/index.html")
    })]
}


//end point e um arquivo