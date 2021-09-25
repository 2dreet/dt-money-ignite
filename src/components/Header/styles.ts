import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  // aqui utilizando o rem usamo a unidade de medida
  // responsiva 

  // calculo é simples 16 x o valor
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;

  // aqui definimos que queremos espaço entre os componentes
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      // aqui utilizamos uma funcao do css chamada filter
      // aonde podemos aplicar estilos de maneira mais simples
      // como por exemplo escurecemos o componente em 0.9 % 
      // aonde da o efeito de hover
      filter: brightness(0.9);
    }

  }
`;