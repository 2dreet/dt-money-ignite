import styled from "styled-components";

export const Container = styled.div`
  // é igual ao flex, mas é utilizado quando todos os componentes iram ter o mesmo tamanho
  display: grid;
  // utilizado para dizer que vai ter 3 componentes com o mesmo valor de tamanho
  // repeat serve para não ter que escrever 1rf 1rf 1rf
  grid-template-columns: repeat(3, 1fr);
  // espaçamento entre cada 1 dos elementos da grid
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    // aqui colocamos display flex
    // alinhamento no centro
    // e espaço entre os componentes fazendo assim ficarem na extremidade da div
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    // aqui dizemos que quando estiver uma div igual mas com esse className
    // aplica apenas para ela
    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`;
