# Player de áudio

Player com músicas e login com o perfil do usuário do Spotfy.

## IMPORTANTE:

Esse projeto só irá funcionar após a configuração do servidor com a autorização para a API e com os dados do cliente.
Como é um projeto com dados pessoais, eu não subi para o github com os meus.

### Obtendo autorização do Spotify para consumir os dados, por Vitória Batistoti:

[consumindo-a-api-do-spotify-um-breve-passo-a-passo](https://medium.com/reprogramabr/consumindo-a-api-do-spotify-um-breve-passo-a-passo-fd210312fdd)

## Instalação para rodar o projeto pós-configuração:

```
npm install
```

ou

```
yarn install
```

## O que pratiquei nesse projeto:

### JS (Reactjs)

- Hooks:
  - useContext - Para passar funções e estados globalmente
  - useEffect - Função de efeito, que passado um estado a função fica observando esse estado e a cada vez que ele for alterado a função é executada.
  - useRef - Armazenar informações em uma referência, que persiste entre várias renderizações, mas não atualiza o estado
  - useState - cria e atualizar estados
- Fetch - Para requisições de músicas e dados do usuário da api do Spotfy
- Componentização para Styled-Components

### CSS

- Styled-Components

### Screenshots da primeira versão do projeto

![Player desligado](https://github.com/saranascimento/Player-spotfy/blob/main/src/assets/to_readme/player-off.png?raw=true)

![Player ligado](https://github.com/saranascimento/Player-spotfy/blob/main/src/assets/to_readme/player-on.png?raw=true)

![Player tocando](https://github.com/saranascimento/Player-spotfy/blob/main/src/assets/to_readme/player-playing.png?raw=true)

## vídeo de apresentação:

[vídeo do player](https://www.awesomescreenshot.com/video/2790984?key=99b8325d6582c57c25a5d45773a49bd7)

## Design de inspiração:

[Uidesingdaily](https://www.uidesigndaily.com/posts/photoshop-music-player-day-9)
