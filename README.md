# Projeto Bons Flúidos

## Descrição
O **Bons Flúidos** é uma plataforma desenvolvida para combater a pobreza menstrual, facilitando a arrecadação de doações financeiras e a distribuição de produtos essenciais. Através de uma abordagem colaborativa, o sistema permite a realização de vaquinhas solidárias e o registro de doações recebidas, além de exibir pontos de coleta em um mapa interativo e postagens com as últimas doações recebidas.

## Objetivo
O projeto tem como foco resolver a falta de distribuição de itens adequados para o ciclo menstrual e oferecer um ambiente informativo sobre doações e pontos de distribuição.

## Funcionalidades
- **Doação monetária**: Permite que o usuário faça uma doação por meio de QR Code via PIX.
- **Visualização dos pontos de coleta**: Exibe um mapa interativo com pontos de coleta identificados, permitindo que o usuário veja mais informações sobre cada ponto.
- **Postagem de doações recentes**: Exibe postagens sobre as últimas doações recebidas, mantendo a comunidade informada.
- **Cadastro de doações recebidas**: Autoriza membros do projeto a cadastrar itens recebidos por meio físico, ajudando a manter o controle das doações.

## Tecnologias Utilizadas
- **Linguagem de Programação**: JavaScript
- **Bibliotecas de Front-End**: 
  - [ReactJS](https://reactjs.org/): biblioteca para criação da interface do usuário
  - [React Router DOM](https://reactrouter.com/): biblioteca para roteamento no React
  - [Leaflet](https://leafletjs.com/): biblioteca para visualização de mapas
  - [QRCode Generator](https://github.com/soldair/node-qrcode): geração de QR Code para doações via PIX
- **Back-End**:
  - [Express.js](https://expressjs.com/): framework para criação de APIs
  - [Node.js](https://nodejs.org/): ambiente de execução do JavaScript no servidor
- **Banco de Dados**: 
  - [MongoDB](https://www.mongodb.com/) com [Mongoose](https://mongoosejs.com/) para modelagem de dados
- **IDE**: Visual Studio Code
- **Controle de Versionamento**: Git
- **Deploy**: Vercel

## Execução do sistema
- **Instalar Node.js e NPM:**
   - Acesse o site oficial do Node.js: [nodejs.org](https://nodejs.org/)
   - Clique no botão para baixar a versão recomendada.
   - Siga as instruções de instalação.
   - Para verificar se o Node.js foi instalado corretamente, abra o terminal (ou prompt de comando no Windows) e digite:
     ```sh
     node -v
     npm -v
     ```
     Você deve ver a versão do Node.js e do NPM (Node Package Manager) aparecer.

- **Instalar Git:**
   - Acesse o site oficial do Git: [git-scm.com](https://git-scm.com/)
   - Baixe a versão mais recente para o seu sistema operacional.
   - Siga as instruções de instalação.
   - Para verificar se o Git foi instalado corretamente, abra o terminal (ou prompt de comando no Windows) e digite:
     ```sh
     git --version
     ```
     Você deve ver a versão do Git aparecer.


- **Criar diretório:**
    - Abrir terminal e criar um diretório:  
      ```sh
      mkdir projeto
      ```
    - Em seguida entrar no diretório criado:
      ```sh
      cd projeto
      ```
- **Clonar Repositório:**
    - Com o cmd do diretório criado: 
      ```sh
      git init
      ```
  - Em seguida:
    ```sh
    git clone git@github.com:MauricioJrB/certificadora-identitaria.git
    ```
  - Após a clonagem, entrar no diretório do projeto:
    ```sh
    cd certificadora-identitaria
    ```
- **Instalar Dependências**
  - Dentro do diretório do projeto, navegue para o diretório `Backend`
    ```sh
    cd BackEnd
    ```
  - Instale as dependências utilizando o comando:
    ```sh
    npm install
    ```

- **Adicionar variáveis de ambiente**
  - No diretório raiz do BackEnd, crie um arquivo chamado `.env`
  - Dentro do arquivo criado copie e cole essas variáveis de ambiente que está no exemplo:

    `
    SERVER_PORT=8000
    `

    `
    MONGODB_URI=mongodb+srv://<nome_do_usuario>:<senha_do_usuario>@competencia-identitaria.8j9b6.mongodb.net/
    `

    `
    SUPER_EMAIL=admin@admin
    `

    `
    SUPER_PASSWORD=admin
    `

    `
    SECRET=banana
    `

- **Executar servidor**
  - No diretório BackEnd, inicie o servidor:
    ```sh
    npm run dev
    ```
  - Com o servidor iniciado, essas mensagens aparecerão no terminal:
  ![image](https://github.com/user-attachments/assets/1352821e-ccd2-476c-8d55-07ea536b47ea)

- **Executar interface na web**
  - Após iniciar o servidor, voltar para o diretório do projeto:
      ```sh
      cd .. 
      ```
- **Instalar Dependências**
  - Dentro do diretório do projeto, navegue para o diretório `FrontEnd`
    ```sh
    cd FrontEnd
    ```
  - Instale as dependências utilizando o comando:
    ```sh
    npm install
    ```
  - No diretório BackEnd, inicie o servidor:
    ```sh
    npm run dev
    ```
  - Com o FrontEnd iniciado, aparecerá no terminal
  ![image](https://github.com/user-attachments/assets/ab2e7f3b-c9fb-492e-9b49-9469a5e00bbd)

  - Clique no link em roxo e abrirá a página do projeto no seu navegador web.
  
- **Testar sistema** 
  - Com o projeto aberto no seu navegador clique em `Login` (canto superior direito) e realize o login do administrador com essas credenciais:
  
    Email:
      ```sh
      admin@admin
      ```
    Senha:
      ```sh
      admin
      ```
  - E clique em `Entrar`
  - Então aparecerá uma opção `Cadastrar produto` (canto superior direito), clique e navegue até a página.
  - Cadastre um produto e clique em `Cadastrar`:
  ![image](https://github.com/user-attachments/assets/341282c8-9930-4af7-957e-6a8783163499)
  - Em seguida navegue para `Pontos de doação`, role o scroll para baixo e veja o produto inserido.

- **Equipe**
  - Eduardo Affonso Kasprovicz
  - Leandro Henrique 
  - Matheus Kodi Y.
  - Maurício Júnior
  - Victor Hugo Moreira

