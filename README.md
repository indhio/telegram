# Telegram - Visualizar dados de grupos e canais

<p align="center">
  <img src="https://web.telegram.org/img/logo_share.png" width="120" alt="Telegram Logo" /></a>
</p>


  <p align="center">Visualizar todos os números de telefones de um grupo e/ou canal do telegram</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Essa aplicação irá resgatar os números de telefones de um grupo e/ou canal do telegram. 

## Como funciona?

Primeiro você precisa logar no seu Telegram Web em https://web.telegram.org/. Depois de autenticar com o app no browser, basta copiar o valor da chave 'tt-global-site' no LocalStorage do browser.

<p align="center">
  <img src="https://images.indh.io/telegram-application2.png" /></a>
</p>

Apague o conteúdo do arquivo `global.json` e cole o valor copiado na integra. 

<p align="center">
  <img src="https://images.indh.io/telegram-application3.png" /></a>
</p>

Tudo pronto! Só executar applicação. 

```
node main.js
```

## Resultado

Vai ser mais ou menos a imagem abaixo. 

<p align="center">
  <img src="https://images.indh.io/telegram-application4.jpeg" /></a>
</p>

## Pega tudo mesmo?

Não, existem uma série de restrições devido a segurança dos dados dos usuários no Telegram. 

### Situações que é possível recuperar dados 

 1. Grupos normais privados com permissão de comentar
 2. Grupos abertos com entrada com link join

### Situações que NÃO É possível recuperar dados 
 
 1. Canais privados
 2. Grupos privados onde só admin pode comentar
 3. Canais abertos onde só administradores podem postar

## License

Nest is [MIT licensed](LICENSE).