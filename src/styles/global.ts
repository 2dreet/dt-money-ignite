import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // aqui Definimos variaveis para re utilizar nos estilos
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  // padrão de todo projeto
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // aqui definimso o padrao de acessibilidade
  // muito importante fazer!!!!!!!!!!!!!!!!!
  html {
    @media (max-width: 1080px){
      // aqui definimos que quando dispositivos com a largura maxima de 1080px
      // vamos pegar o 93.75% do valor inicial
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      // aqui definimos que quando dispositivos com a largura maxima de 720px
      // vamos pegar o 87.5% do valor inicial
      font-size: 87.5%;
    }
  }

  // aqui utilizamos as variaveis de background
  // e deixamos as fontes mais nitidas
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    // aqui caso não baixe a fonte vai usar a sans-serif
    font-family: 'Poppins', sans-serif;
    //padrao de tamanho
    font-style: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    // padrao de tamanho para fonts negritas
    font-weight: 600;
  }

  // padrao para deixar com o icone da mão
  button { 
    cursor: pointer;
  }

  // criamos um padrao para que todo componente
  // disabled receba essa estilização
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;