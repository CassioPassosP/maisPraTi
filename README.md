# Exercícios e Projetos +praTI

Repositório com atividades, exercícios e projetos desenvolvidos durante a formação Full Stack da **+praTI**. O conteúdo acompanha a evolução dos estudos, começando por lógica de programação e desenvolvimento web e avançando para aplicações em React.

## Conteúdo

- **JavaScript e lógica de programação:** variáveis, condicionais, laços de repetição, funções, arrays e manipulação de dados.
- **Algoritmos e estruturas de dados:** listas, filas, pilhas, árvores e algoritmos de busca e ordenação.
- **Desenvolvimento web:** HTML semântico, CSS, Flexbox, Grid, responsividade e JavaScript no navegador.
- **React:** componentes, props, estado, Context API, rotas, consumo de APIs e estilização.
- **Boas práticas de desenvolvimento:** organização de projetos, uso de dependências, Git e GitHub.

## Organização do repositório

| Pasta | Descrição |
| --- | --- |
| [`15exercicios`](15exercicios) | 15 exercícios de lógica e JavaScript executados com Node.js. Possui um [README próprio](15exercicios/README.md). |
| [`maispratiEx2`](maispratiEx2) | Segunda lista de exercícios de JavaScript, organizada por seções. |
| [`AulasMaisPti`](AulasMaisPti) | Exemplos e exercícios das aulas de JavaScript, DOM, eventos, assíncrono e introdução ao React. |
| [`EX3`](EX3) | Projeto web **ListaFix**, com páginas de filmes, hobbies, receita e formulário de feedback. Possui um [README próprio](EX3/README.md). |
| [`EX4`](EX4) | Exercício de desenvolvimento de página web com HTML e CSS. |
| [`EX5`](EX5) | Aplicação React de busca de filmes usando a API do TMDB, com detalhes, paginação e favoritos. Possui um [README próprio](EX5/README.md). |
| [`EX6`](EX6) | Estudos de estilização em React com CSS global, CSS Modules, Tailwind CSS e Styled Components. |
| [`exProfAulas`](exProfAulas) | Exercícios e materiais da formação, incluindo algoritmos, estruturas de dados e fundamentos de front-end e React. |

## Tecnologias utilizadas

- JavaScript e Node.js
- HTML5 e CSS3
- React
- React Router
- Vite e Create React App
- Styled Components e Tailwind CSS
- Axios
- API do TMDB
- Git e GitHub

## Como utilizar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado, preferencialmente versão 18 ou superior.
- npm instalado junto com o Node.js.
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/).

### Exercícios Node.js

Entre na pasta do exercício e instale as dependências quando houver um `package.json`:

```bash
cd 15exercicios
npm install
node Exercicio1.js
```

Cada arquivo de exercício pode ser executado individualmente com `node`, alterando o nome do arquivo no comando.

### Projetos React

O projeto [`EX5`](EX5) utiliza Create React App:

```bash
cd EX5
npm install
npm start
```

O projeto [`EX6`](EX6) utiliza Vite:

```bash
cd EX6
npm install
npm run dev
```

Depois, abra o endereço exibido pelo terminal no navegador.

### Projetos HTML, CSS e JavaScript

As pastas [`EX3`](EX3), [`EX4`](EX4) e as pastas de aulas podem ser abertas diretamente no navegador pelo arquivo `index.html`. Para uma experiência melhor durante o desenvolvimento, também é possível usar a extensão **Live Server** no Visual Studio Code.

## Configuração da API do TMDB

O projeto `EX5` depende de uma chave da API do TMDB. Crie um arquivo `.env` dentro da pasta `EX5` e configure a variável esperada pelo projeto:

```env
REACT_APP_API_KEY=SUA_CHAVE_TMDB
```

Não publique chaves reais no GitHub. O arquivo `.env` deve permanecer fora do controle de versão.

## Objetivo

Este repositório funciona como registro da prática realizada durante o curso e como portfólio de aprendizagem. Os projetos mostram a aplicação gradual dos conceitos estudados, desde os primeiros exercícios de lógica até interfaces web e aplicações React com consumo de API.

## Autor

**Cassio Passos**

Projetos desenvolvidos para fins educacionais durante a formação +praTI.
