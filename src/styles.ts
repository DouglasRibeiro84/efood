import { createGlobalStyle } from 'styled-components'

export const cores = {
  corPrincipal: '#E66767',
  corSecundaria: '#FFEBD9',
  corFundo: '#FFF8F1',
  branca: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

  body {
    background-color: ${cores.corFundo};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
