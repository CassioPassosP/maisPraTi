// importa o plugin 'html-webpack-plugin', que vai gerar um arquivo html e ajeitar automaticamente o bundle javascript nele
const HtmlWebpackPlugin = require("html-webpack-plugin")
//const path = require("path") //ajuda a trabalhar dentro de caminho e arquivo

module.exports = {
    // define o arquivo de entrada para o webpack, que sera o ponto de partida da aplicacao 
    entry: "./src/index.js", 
    mode: "development",

    // define o local e nome do aquivo de saida, onde o codigo transpilado e agrupado sera salvo
    output:{

        // arquivo de saida sera nomeado 'bundle.js'
        filename: "bundle.js", 

        // path.resolve resolve o caminho absoluto ate o diretorio 'public'. onde o bundle sera gerado
        path: path.resolve(__dirname, "public"), 
        clean: true
    },

    //configura modulos e regras para lidar com diferentes tipos de arquivos
    module:{
        rules: [
            {
                //aplica esta regra a todos os arquivos que terminam em .js ou .jsx
                test: /\.jsx?$/, 

                //exclui a pasta 'node_modules' do processo de tranpilar, pois normalmente os pacotes externos ja estao prontos para uso
                exclude: /node_modules/, 

                //usa o 'babel-loader' para transformar o codigo javascript moderno em uma versao mais compativel com navegadores antigos
                use: "babel-loader"  
            }
        ]
    },

    //define quais extensoes de arquivos o webpack deve resolver automaticamente 
    resolve: {
        //permite que os arq .js, e .jscx sejam resolvidos sem precisar especificar a extensao nas importacoes 
        extensions: [".js", ".jsx"] //  importante
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "utils/index.html")
    })]
}


//end point e um arquivo