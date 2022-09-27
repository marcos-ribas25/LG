import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--orange);
  padding-top: 80px;
  padding-bottom: 8px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }

  .top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }

  .links {
    display: flex;
    flex-direction: column;
    color: #f5f5f5;

    h4 {
      margin-bottom: 8px;
    }
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    color: #f5f5f5;
    margin-bottom: 9px;

    svg {
      width: 20px;
      fill: #f5f5f5;
    }
  }

  .link:hover {
    color: var(--blue);

    svg {
      fill: var(--blue);
    }
  }

  .grid-services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 50px;
  }

  .logo {
    max-width: 315px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 40px;
  }

  .codie {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    color: #fff;
    opacity: 0.8;

    .logo-codie {
      max-width: 69px;
      width: 100%;
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding-top: 65px;

    .logo {
      max-width: 295px;
    }

    .links {
      h4 {
        margin-bottom: 7px;
      }
    }

    .link {
      margin-bottom: 8px;
    }

    .grid-services {
      gap: 0 40px;
    }

    .container {
      gap: 70px;
    }

    .codie {
      gap: 6px;

      .logo-codie {
        max-width: 64px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-top: 55px;

    .logo {
      max-width: 260px;
    }

    .links {
      h4 {
        margin-bottom: 6px;
      }
    }

    .link {
      margin-bottom: 8px;

      svg {
        width: 16px;
      }
    }

    .grid-services {
      gap: 0 30px;
    }

    .container {
      gap: 60px;
    }

    .codie {
      gap: 5px;

      .logo-codie {
        max-width: 59px;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    padding-top: 40px;

    .logo {
      max-width: 230px;
    }

    .links {
      h4 {
        margin-bottom: 5px;
      }
    }

    .link {
      margin-bottom: 6px;
      font-size: 13px;

      svg {
        width: 14px;
      }
    }

    .grid-services {
      gap: 0 30px;
    }

    .container {
      gap: 45px;
    }

    .codie {
      .logo-codie {
        max-width: 54px;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    padding-top: 30px;

    .top {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 15px;
    }

    .hide-mobile {
      display: none;
    }

    .logo {
      max-width: 215px;
      margin-bottom: 5px;
    }

    .link {
      justify-content: center;
      font-size: 14px;
      margin-bottom: 5px;

      svg {
        display: none;
      }
    }

    .links {
      h4 {
        margin-bottom: 4px;
      }
    }

    .container {
      gap: 35px;
    }

    .codie {
      span {
        font-size: 13px;
      }
      
      .logo-codie {
        max-width: 49px;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    padding-top: 20px;

    .logo {
      max-width: 200px;
    }

    .top {
      gap: 10px;
    }

    .link {
      margin-bottom: 2px;
    }

    .links {
      h4 {
        margin-bottom: 2px;
      }
    }

    .container {
      gap: 30px;
    }
  }
  @media only screen and (max-width: 400px) {
  }
`;
