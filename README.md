# Projeto Enquete

## Instalação

OBS: Para a execução dos comandos em ambiente linux pode ser necessário
 permissões de superusuário dependendo das configurações.

### Node.js

Baixe e instale o [node.js] versão LTS.

### Global Package Angular CLI

Abra o terminal do seu sistema e execute o seguinte comando para instalar o Angular CLI.

```sh
npm install -g @angular/cli@latest
```

### Local Project Package

Abra o terminal na pasta raiz do projeto e execute os seguintes comandos para instalar os pacotes necessários para rodar o projeto.

```sh
npm install --save-dev @angular/cli@latest
npm install
```

## Executar Localmente

Abra o terminal na pasta raiz no projeto e execute o seguinte comando.

```sh
ng serve
```

Após terminar a execução, abra o navegador e entre com a url disponível.

## Para Produção

Abra o terminal na pasta raiz do projeto e execute o seguinte comando.

```sh
ng build --prod
```

Após terminar a execução será gerado um arquivo com nome "dist" na raiz do projeto que conterá todos os arquivos necessários para colocar a aplicação em produção.

[node.js]: <https://nodejs.org/en/download/>
