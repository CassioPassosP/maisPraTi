# EX5 - Aplicação de Busca de Filmes

Este projeto foi desenvolvido como atividade prática para a instituição **+praTI**, com o objetivo de criar uma aplicação em **React** que consome a **API do TMDB** para busca e gerenciamento de filmes favoritos.

---

## Funcionalidades

A aplicação atende aos seguintes requisitos:

1. **Página de Busca**
   - Campo de texto para digitar o nome do filme.
   - Lista de resultados exibindo pôster, título, ano e botão para ver detalhes.
   - Tratamento de **loading** e mensagens de **erro**.

2. **Paginação**
   - Navegação entre páginas de resultados com botões "Anterior" e "Próxima".
   - Indicação da página atual e total de páginas.

3. **Página de Detalhes**
   - Exibe informações completas do filme ao clicar em "Ver Detalhes":
     - Diretor
     - Elenco (principais 5 atores)
     - Sinopse
     - Avaliação
   - Tratamento de erros caso a API falhe ou o filme não seja encontrado.

4. **Lista de Favoritos**
   - Adicionar/remover filmes dos favoritos com botão dedicado.
   - Persistência dos favoritos em **localStorage**.
   - Página separada para visualizar todos os filmes favoritados.

---

## Tecnologias Utilizadas

- React.js
- React Router
- TMDB API
- Context API para gerenciamento de favoritos
- LocalStorage para persistência

---

## Estrutura do Projeto

    src/

       ├─ api/ # Configuração da API do TMDB

       ├─ components/ # Componentes reutilizáveis (MovieCard, etc.)

       ├─ context/ # Contexto de favoritos

       ├─ pages/ # Páginas: SearchPage, DetailsPage, FavoritesPage

       └─ App.js # Roteamento principal

yaml
Copiar código

---

## Como Rodar

1. Clone o repositório:
```
git clone https://github.com/CassioPassosP/EX5.git
```

2. Instale as dependências:
```
cd EX5
npm install
```

3. Configure a API Key do TMDB:

Crie um arquivo .env na raiz do projeto com:
```
REACT_APP_API_KEY=SUA_CHAVE_TMDB
```

4. Execute o projeto:
```
npm start
```

5. Acesse em http://localhost:3000

## Observações
O projeto foi desenvolvido como atividade prática para a instituição +praTI.

## Autor
Cassio Passos




