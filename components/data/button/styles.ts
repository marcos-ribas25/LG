import styled from "styled-components";
import { lighten } from "polished";

interface ButtonProps {
  backgroundColor?: string;
  $loading?: boolean;
}

export const Button = styled.div<ButtonProps>`
  display: flex;
  align-items: center;

  a,
  button {
    width: 100%;
    height: 48px;
    padding: 0 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 25px;
    transition: 0.2s ;
    border: unset;
  }

  a:hover,
  button:hover {
    transition:  0.2s;
  }

  .bt.blue {
    background-color: var(--blue);
    color: #fff;
  }

  .bt.blue:hover {
    background-color: var(--orange);
  }

  .bt.orange {
    background-color: var(--orange);
    color: #fff;
  }

  .bt.orange:hover {
    background-color: var(--blue);
  }

  @keyframes loading {
    0% {
      background-size: 300% 100%;
    }

    50% {
      background-position: 100% 0;
    }

    100% {
      background-size: 300% 100%;
    }
  }

  button:disabled {
    cursor: not-allowed;
    background: "#6749a3";
    opacity: 0.8;
  }

  @media only screen and (max-width: 1600px) {
    a,
    button {
      height: 46px;
    }
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 44px;
    }
  }

  @media only screen and (max-width: 1200px) {
    a,
    button {
      height: 42px;
    }
  }

  @media only screen and (max-width: 1024px) {
    a,
    button {
      height: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      height: 38px;
    }
  }

  @media only screen and (max-width: 600px) {
    a,
    button {
      height: 36px;
    }
  }

  @media only screen and (max-width: 450px) {
    a,
    button {
      height: 32px;
    }
  }

  @media only screen and (max-width: 370px) {
  }

  @media only screen and (max-width: 350px) {
  }
`;
