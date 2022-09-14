import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--white-cream);
  padding-bottom: 8px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .scroll-top {
    margin-top: -23px;
    margin-bottom: 35px;
    fill: #002749;
    transition: 0.1s;
  }

  .scroll-top:hover {
    fill: #003d71;
  }

  .logo {
    max-width: 260px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 40px;
  }

  nav {
    max-width: 660px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;
    border-bottom: 1px solid #002749;
    padding-bottom: 15px;
    margin-bottom: 15px;

    a {
      color: #002749;
    }

    a:hover {
      color: var(--yellow);
    }
  }

  .bt {
    max-width: 235px;
    margin: 0 auto;
  }

  .codie {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    color: #002749;

    .logo-codie {
      max-width: 69px;
      width: 100%;
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 1400px) {
    nav {
      max-width: 610px;
    }
  }
  @media only screen and (max-width: 1200px) {
    .logo {
      max-width: 230px;
    }

    .scroll-top {
      margin-bottom: 25px;
      margin-top: -22px;

      svg {
        width: 44px;
        height: 44px;
      }
    }

    nav {
      max-width: 560px;
      padding-bottom: 12px;
      margin-bottom: 12px;
    }

    .container {
      gap: 50px;
    }

    .codie {
      .logo-codie {
        max-width: 50px;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .logo {
      max-width: 215px;
      margin-bottom: 30px;
    }

    .scroll-top {
      margin-bottom: 22px;
      margin-top: -20px;

      svg {
        width: 40px;
        height: 40px;
      }
    }

    nav {
      max-width: 510px;
    }
  }

  @media only screen and (max-width: 500px) {
    .logo {
      max-width: 190px;
    }

    .scroll-top {
      margin-bottom: 20px;
      margin-top: -17.5px;

      svg {
        width: 35px;
        height: 35px;
      }
    }

    nav {
      gap: 15px;
      max-width: 390px;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    .container {
      gap: 40px;
    }
  }

  @media only screen and (max-width: 400px) {
    .logo {
      max-width: 165px;
      margin-bottom: 20px;
    }

    .scroll-top {
      margin-bottom: 18px;
      margin-top: -16px;

      svg {
        width: 32px;
        height: 32px;
      }
    }

    nav {
      gap: 7px;
      flex-direction: column;
      border: unset;
      align-items: center;

      a {
        font-size: 16px;
      }
    }

    .bt.yellow {
      display: none;
    }

    .container {
      gap: 20px;
    }

    .codie {
      .logo-codie {
        max-width: 40px;
      }
    }
  }
`;
