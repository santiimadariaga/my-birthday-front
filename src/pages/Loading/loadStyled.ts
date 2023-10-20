import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const MiCara = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 155px;
  animation: loading 4s linear;

  @keyframes loading {
    0% {
      transform: translateY(-700px);
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    25% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
    }
    40% {
      transform: translateY(-60px);
      animation-timing-function: ease-in;
    }
    55% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
    }
    65% {
      transform: translateY(-25px);
      animation-timing-function: ease-in;
    }
    75% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
      opacity: 1;
      transform: scale(30);
    }
  }
`;
