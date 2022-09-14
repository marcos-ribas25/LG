import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  .menu-mobile {
    position: fixed;
    height: 100vh;
    width: 100%;
    right: 0;
    top: 0;
    z-index: -10;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: flex-end;

    .filter {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: flex-end;
    }

    .menu {
      width: 220px;
      height: 100%;
      background-color: var(--primary-color);
      position: relative;
      z-index: 99;
      transform: translateX(100%);
      transition: 0.3s ease-in-out;
      padding: 25px;

      nav {
        display: flex;
        flex-direction: column;
        flex-direction: column;
        height: auto;
        align-items: flex-start;
        gap: 10px;
        border-bottom: 1px solid var(--white-cream);
        padding-bottom: 20px;
        margin-bottom: 20px;

        a,
        span {
          color: #fff;
          cursor: pointer;
        }
      }

      .actions-redes {
        display: flex;
        gap: 12px;
      }

      .link-redes {
        background-color: var(--white-cream);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        width: 30px;
        height: 30px;
      }
    }

    .close {
      color: #fff;
      display: flex;
      justify-content: flex-end;
      transition: 0.3s;
      width: 20px;
      margin-left: auto;
      cursor: pointer;
    }

    .close:hover {
      color: var(--secundary-color);
    }
  }

  .block-bar {
    display: none;
    width: 35px;
    flex-direction: column;
    cursor: pointer;
    align-self: center;
    gap: 7px;

    div {
      background-color: #fff;
      width: 100%;
      height: 3px;
    }
  }

  .menu-mobile.active {
    z-index: 99;
    visibility: visible;
    .menu {
      transform: translateX(0%);
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 5;
    padding: 21px 15px;
  }

  .logo-header {
    max-width: 315px;
    width: 100%;
    object-fit: contain;
  }

  .box-right {
    display: flex;
    gap: 3.13vw;

    nav {
      max-width: 635px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2.71vw;

      a {
        color: var(--blue);
      }
    }

    .bt {
      width: 256px;
      transition: all .7s;
    }
  }

  .block-bar {
    display: none;
    gap: 7px;
    width: 34px;

    > div {
      background-color: var(--white-cream);
      height: 3px;
      width: 100%;
    }
  }

  @media only screen and (max-width: 1600px) {
    .logo-header {
      max-width: 235px;
    }

    .container {
      padding: 22px 15px;
    }
  }
  @media only screen and (max-width: 1400px) {
    .logo-header {
      max-width: 215px;
    }

    .container {
      padding: 20px 15px;
    }

    .box-right {
      gap: 25px;
    }
  }
  @media only screen and (max-width: 1200px) {
    .box-right {
      gap: 20px;

      .bt {
        max-width: 175px;
      }
    }

    .logo-header {
      max-width: 190px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .box-right {
      display: none;
    }

    .block-bar {
      display: flex;
    }

    .logo-header {
      max-width: 175px;
    }

    .menu {
      nav {
        a {
          font-size: 18px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .logo-header {
      max-width: 155px;
    }

    .container {
      padding: 17px 15px;
    }

    .menu-mobile {
      .menu {
        nav {
          margin-bottom: 15px;
          padding-bottom: 15px;

          a {
            font-size: 16px;
          }
        }

        .link-redes {
          width: 25px;
          height: 25px;

          svg {
            max-width: 15px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .logo-header {
      max-width: 135px;
    }
  }

  @media only screen and (max-width: 400px) {
    .logo-header {
      max-width: 115px;
    }

    .container {
      padding: 15px;
    }

    .block-bar {
      width: 33px;
      gap: 6.5px;

      > div {
        height: 2px;
      }
    }
  }
`;
