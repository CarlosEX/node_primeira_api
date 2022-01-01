# node_primeira_api

Nesse README, vou compartilhar um pouco do conhecimento e experiências que tive ao criar a minha primeira api em nodejs.



## Desafio em preparar um ambiente .NET 6 no Android, via Termux com uma Arquitetura ARM32 bits.



A linguagem/ambiente que mais tenho familiaridade é o C#.



Eu estive tentando sem sucesso, fazer a instalação do SDK/Rutime do .NET 6 no meu ambiente atual, porém, devido meu ambiente ser um Android e, para complicar, a minha arquitetura é em arm 32 bits. Cheguei a baixar o script de instalação manual do .NET SDK e fazer o processo instalando direto via os binários, mesmo assim ainda não consegui acessar a CLI "dotnet". 



## Experimentando outras tecnologias / alternativas



O objetivo principal era poder criar uma API simples no ambiente atual que estou estudando. Como eu já havia configurado o Termux e baixado o Nodejs, eu resolvi explorar esse ambiente e aprender algo novo.



## Flexibilidade de uso



Algo que gostei muito no ambiente Nodejs/Javascript e também HTML e CSS. É a facilidade e viabilidade que temos em poder criar projetos de forma rápida em quase tudo que é plataforma. Isso realmente é algo que motiva o aprendizado.



## Preparando o Ambiente (Planta)



A primeira coisa que fiz, foi preparar o ambiente e documentar algumas coisas bem simples, como por exemplo:



 - Escopo: Criar uma api simples em Nodejs

 - Projeto: nodejs_primeira_api

 - Local: Cartão de memória “/sdcard”

 - Ambiente: Android 10 Termux

 - Editor: VIM:



## Etapas do desenvolvimento



 - Configuração
 - Codificação
 - Execução


## Passo 1: Configuração



O primeiro passo, foi construir a pasta do projeto no diretório pré-definido. No terminal, utilizei o seguinte comando:



 `mkdir nodejs_primeira_api`


Com a pasta criada, entrei no diretório com o comando cd



 `cd nodejs_primeira_api`


Após preparar e construir a casa para o meu projeto, era hora de fazer as instalações.



Um pré requisito importante para realização das próximas etapas, era ter o Nodejs instalado. Caso você ainda não tenha ele instalado em sua máquina, eu recomendo que faça o download dele através desse link aqui.



 `npm init`



Esse comando, é responsável pela criação do arquivo de configuração do projeto “packge.json”. Porém, ele possui muitas funcionalidades, caso queira saber mais, segue a documentação.



No terminal, utilizei o seguinte comando:



 `npm init`


Após executar esse comando, vai ser solicitado que informemos algumas informações no terminal como por exemplo: Autor, Licença, Descrição, Repositório e etc. No meu caso, apenas fui dando “enter”.

`
package name:
version: (1.0.0)
description:
entry point: (index.js)                        
test command:
git repository:
keywords:
author:
license: (ISC/MIT)
`

`yarn`


O yarn é também um gerenciador de pacotes, semelhante ao npm. Para o meu projeto, o npm já seria o suficiente, mas decidi fazer a instalação e realizar algumas instruções por ele.

Para fazer a instalação via npm, basta utilizar o comando abaixo:

`npm install yarn`


No meu caso, como estou utilizando o termux, eu precisei instalar através de outro gerenciador do pacote nativo que é o pkg.

`pkg install yarn`


### Express

O express é uma biblioteca que fornece recursos para trabalharmos com configurações de rotas, comunicação HTTP, manipulação de exceções entre outros.

Para fazer a instalação, utilizei o seguinte comando via yarn:

`yarn add express`

Se a execução desse comando for bem sucedida, será criado uma pasta chamada node_modules e um arquivo chamado yarn.lock.

Porém, no meu caso aconteceu um erro na instalação. Foi criado a pasta node_modules, porém ao invés de ser criado um arquivo chamado yarn.lock, foi criado um chamado de yarn-error.log, e apresentou o seguinte error:


`error An unexpected error occurred: "EPERM: operation not permitted, symlink '../../../mime/cli.js' -> '/storage/emulated/0/Documents/Nodejs/teste/node_modules/send/node_modules/.bin/mime'".`

Investigando o erro acima, descobri que ele estava relacionado ao tipo de sistema de armazenamento de arquivos (FAT16/32, NTFS, exT2/3/4 e etc), ou seja, o erro foi gerado devido ao tipo de sistema contido no meu cartão SD não suportar a geração de “Links Simbólicos”. 

Em resumo, links simbólicos são “atalhos” criados para facilitar o gerenciamento de estruturas de arquivos e pastas no sistema operacional.

### Solucionando o problema

Após dar um “google” encontrei uma solução que foi fazer a transferência do projeto do diretório SD para o diretório do Termux. Para isso, utilizei o comando mv para mover a estrutura de arquivos.

`mv /sdcard/Documents/Nodejs/node_primeira_api ˜/Nodejs/`

Em resumo, o comando acima faz o seguinte:

`Move "mv" a estrutura contida em /sdcard/Documents/Nodejs/node_primeira_api para ˜/Nodejs/ que nesse caso, é a raiz no diretório do termux na pasta de projetos Node.`

Com isso feito, eu apaguei o diretório node_modules e o arquivo yarn-error.log

`rm -rf node-modules yarn-error.log`


Refazendo o procedimento de instalação:

`yarn add express`


E agora, tudo funcionou conforme o esperado.


`
success Saved lockfile.
success Saved 30 new dependencies.
info Direct dependencies
└─ express@4.17.2
info All dependencies
├─ accepts@1.3.7
├─ utils-merge@1.0.1
 …
`

E por último, precisei criar um arquivo para ser o endpoint e onde estaria o meu código da API.

Para isso utilizei o seguinte comando:



`touch index.js`


## Passo 2: Configuração



Com o ambiente configurado iniciei a codificação do primeiro arquivo 'fonte' do projeto.



### Index.js



Abaixo segue o código fonte da API.



Para poder editar esse arquivo eu utilizei o VIM. No terminal, eu digitei o seguinte comando:



`vim index.js`


Após isso, eu apertei a letra i, e em seguida, escrevi o código abaixo


`
const express = require('express');
const server = express();

server.get('/api/user',(req, res) => {
 return res.json({usuario:'Pedro'})
});

server.listen(3000, () => {
 console.log('Servidor em execução...')
});
`

Feito isso, eu apertei o esc, depois : “dois pontos” e em seguida as letras “wq” para salvar as alterações e sair do VIM.



Algumas observações sobre o código acima.



O código para criar uma API em Nodejs, é bem simples.



`const express = require(‘express’);`


Repare no seguinte trecho de código acima `“require(‘express’)”`. Como eu segui um tutorial no YouTube para criar essa api, eu não sabia o que ao certo esse comando fazia. Foi então que eu perguntei ao meu amigo “Google”.



### require



O que pude entender desse comando é que ele é responsável por interpretar e retornar o conteúdo do código de algum arquivo/lib e posteriormente, utilizá-lo em nossa aplicação. No nosso exemplo, estamos atribuindo o seu conteúdo a uma constante chamada de express “mas poderia ser qualquer nome”.



Mas de onde ele vem e para onde ele vai dentro do código?



Eu tenho uma certa “curiosidade” de saber como as coisas funcionam nos bastidores, e por isso fui abrindo algumas portas para entender melhor.



Se listarmos a pasta node_modules, teremos os seguintes arquivos:



`ls node_modules`


accepts

array-flatten

body-parser

bytes

content-disposition

content-type                     

cookie

cookie-signature

debug

depd

destroy

ee-first

encodeurl

escape-html

etag

express                          

finalhandler

forwarded

fresh

http-errors

iconv-lite

inherits

ipaddr.js

media-typer

merge-descriptors                

methods                          

mime

mime-db

mime-types

ms

negotiator

on-finished

parseurl

path-to-regexp

proxy-addr

qs

range-parser

raw-body

safe-buffer

safer-buffer

send

serve-static

setprototypeof

statuses

toidentifier

type-is

unpipe

utils-merge

vary



Esses são módulos ou “bibliotecas” semelhantes aos assemblies em .NET. Perceba que temos justamente uma pasta chamada de “express”.



Listando o conteúdo da pasta express, temos os seguintes itens:



`ls express`


History.md

LICENSE

Readme.md

index.js

lib

package.json





Analisando o conteúdo do index.js, temos duas linhas de código, que ajudam a compreender melhor o que está acontecendo nos bastidores, veja:


`
'use strict';

module.exports = require('./lib/express');
`

### Pasta lib



LIstando o conteúdo da pasta lib, foi que as coisas começaram a ficar mais claras e interessantes.



`ls lib`


application.js           

express.js                

middleware                

request.js                

response.js               

router                    

utils.js                  

view.js





Porém, eu ainda queria saber se require('express') estava fazendo referência ao nome da pasta ou ao arquivo interno direto dentro da árvore. Para isso eu alterei o nome da minha pasta express para catraca



`mv express catraca`


Rodei o código novamente, e para minha surpresa, ele quebrou.


`
node:internal/modules/cjs/loader:936
  throw err;
  ^
Error: Cannot find module 'express'
`

Então eu também mudei o nome lá no require do meu código fonte para 'catraca' require(‘catraca’) e ele funcionou.



Isso me ajudou a compreender que o nome da pasta, é apenas uma “abstração” para referenciar o conteúdo com a estrutura de recursos. Um desses recursos é o arquivo express.js



De onde vem o método get?


`
server.get('/api/user',(req, res) => {
 return res.json({usuario:'Pedro'})
});
`

No nosso código, utilizamos uma função chamada de get, porém, eu queria saber de onde ela vinha, ou pelo menos saber como ela foi criada. Nesse ponto, eu fiz uso do comando grap, para facilitar a minha vida e, localizar mais rápido os arquivos e linhas que continham esse nome.



`grep -i --color get <folde/file>`





Nesse ponto, por limitação de conhecimento eu confesso que não compreendi o código, mas suspeito que ele tenha relação com o arquivo contido no seguinte caminho: 

`express/lib/router/route.js`



E assim fui codando para entender melhor o que eu estava fazendo.



### Passo 3: Execução



Após tudo configurado, executei o projeto com o seguinte comando:



`node index.js`


Sendo assim, minha api estava em execução e eu podia acessar ela no browser, através do seguinte endereço:



http://localhost:3000/api/user



Onde 3000 é a porta que definimos no nosso código, e /api/user a rota que colocamos.



Conclusão



Ao realizar esse exercício simples, eu pude aprender bastante coisas novas através dos erros e da curiosidade de tentar entender melhor o que eu estava fazendo.



Eu poderia resumir esse artigo da seguinte forma:



Pessoal, criei minha primeira api em node.js, vejam o código:



`const express = require('express');
const server = express();`

`server.get('/api/user',(req, res) => {
 return res.json({usuario:'Pedro'})
});`

`server.listen(3000, () => {
 console.log('Servidor em execução...')
});`


Muito obrigado!


Mas o intuito não era esse, e sim, poder compartilhar o conhecimento aprendido de algo novo, através da experiência dos erros.



Segue treinamento para programação no Android: https://youtube.com/playlist?list=PLV2Wfr3HZ9tjkSYBOpYaW1A6ZOi1xJH5e



Muito obrigado a todos!

Carlos Antonio
