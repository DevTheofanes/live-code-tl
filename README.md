# TechLeader Developer - Test
![Albert Einstein Logo](https://cockpit-asset.s3.amazonaws.com/images/logo_ae_branco.svg)

## Detalhes ##
- Exibir mensagem informativa e botão para fazer busca dos usuários
- Fazer uma requisição de **GET** exibindo uma lista de usuários no endpoint de **/users**
- Exibir listagem de usuários
- Chamada na API deve estar em uma função isolada contendo lógica da API do next
- Chamada do click do botão deve estar no contexto e o state que armazenará os users também.
- Fazer uma requisição de **POST** na pagina "backendTest" para adicionar um novo usuário
- Fazer uma requisição de **PUT** na pagina "backendTest" para alterar o ultimo registro de usuário
- Fazer uma requisição de **DELETE** na pagina "backendTest" para remover o ultimo registro de usuário

## Informações técnicas ##
- Fazer as requisições necessárias na API do next dentro do próprio projeto.
- Atente-se a qualidade do código.
- Necessário que o site seja responsivo para diversos tamanhos de telas.
  - Mobile breakpoint até 550px
  - Tablet breakpoint até 1023px
  - Desktop a partir de 1024px
- Utilizar **ContextApi** para armazenar states.
- Utilizar **Fetch** para fazer a requisição na API.
- Utilizar **Styled Components** para tratar HTML e CSS.
- Utilizar **TypeScript**.
- Utilizar regras e padrões de **ESLint** e/ou **Prettier**.
- Ter testes funcionais utilizando **Jest** e **React Testing Library**
- Utilizar **fs** e **path** para manipular o arquivo data.json.
- Retornar statusCode corretos nos endpoints
- Retornar tratativa de erros nos endpoints

## Layout ##
Tela inicial

![layout 1](images/layout_1.jpg)

Carregando

![layout 2](images/layout_2.jpg)

Usuários Desktop

![layout 3](images/layout_3.jpg)

Usuários Tablet

![layout 4](images/layout_4.jpg)

Usuários Mobile

![layout 5](images/layout_5.jpg)