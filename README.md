# Nome do Projeto

Neste projeto foi desenvolvido uma loja de itens medievais, no formato de uma API, utilizando Typescript e Sequelize. Foram desenvolvidas as camadas de Service e Controllers da aplicação, utilizando JWT para autenticar algumas rotas, além dos testes que garantiram o funcionamento delas. A aplicação tem endpoints que dão suporte a operações de criação, leitura e atualização de informações.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [ESLint](https://eslint.org/)
- [Sequelize](https://sequelize.org/)
- [Mocha](https://mochajs.org/)

## Estrutura do Projeto

O projeto é dividido em várias pastas:

- `src/`: Contém o código fonte da aplicação.
- `tests/`: Contém os testes unitários e de integração.
- `src/controller/`: Contém os controladores da aplicação.
- `src/database/`: Contém os arquivos de configuração, migrações, modelos e seeders do banco de dados.
- `src/middleware/`: Contém os middlewares da aplicação.
- `src/service/`: Contém os serviços da aplicação.
- `src/types/`: Contém os tipos TypeScript personalizados.

## Como Executar o Projeto

Para executar este projeto, você precisará ter Node.js, npm e Docker instalados em sua máquina. Depois de clonar o repositório, você pode instalar as dependências com `npm install` e iniciar o servidor com `npm start`.

## Testes

Os testes podem ser executados com o comando `npm test`.

## Docker

Este projeto inclui um `Dockerfile` e um `docker-compose.yml`, permitindo que seja facilmente construído e executado dentro de um contêiner Docker.

## Contribuição

Este projeto é para fins educacionais, portanto, pull requests não serão aceitos.

## Licença

MIT
