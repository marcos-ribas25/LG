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
      background-color: var(--blue);
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

        .border {
          border-bottom: 1px solid var(--orange);
          width: 100%;
          height: 1px;
          margin: 10px 0;
          opacity: .5;
        }

        h3 {
          color: var(--orange);
        }

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
        background-color: var(--orange);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        width: 25px;
        height: 25px;

        svg {
          height: 13px;
          width: 13px;
          fill: #fff;
        }
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
    width: 31px;
    flex-direction: column;
    cursor: pointer;
    align-self: center;
    gap: 7px;

    div {
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
    gap: 30px;
  }

  .logo-header {
    max-width: 315px;
    width: 100%;
    object-fit: contain;

    img {
      width: 100% !important;
      object-fit: contain !important;
    }
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
        position: relative;
        line-height: 1.7;
      }

      a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: var(--blue);
        transition: 0.3s;
      }

      a:hover::after {
        width: 100%;
      }
    }

    .bt {
      width: 256px;
      padding: 0 35px;
      transition: all 0.7s;
    }

    .bt:hover {
      background-color: var(--orange);
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
      max-width: 275px;
    }

    .box-right {
      gap: 2.3vw;

      nav {
        gap: 2.3vw;
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    .logo-header {
      max-width: 245px;
    }

    .box-right {
      gap: 2vw;

      nav {
        gap: 2vw;
      }

      .bt {
        width: 225px;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .container {
      padding: 16px 15px;
    }

    .logo-header {
      max-width: 215px;
    }

    .box-right {
      .bt {
        width: 200px;
        padding: 0 25px;
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    .logo-header {
      max-width: 205px;
    }

    .box-right {
      gap: 1.7vw;

      a {
        font-size: 15px;
      }

      .bt {
        width: 185px;
        padding: 0 20px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .box-right {
      display: none;
    }

    .block-bar {
      display: flex;

      > div {
        background-color: var(--blue);
      }
    }

    .container {
      padding: 14px 15px;
    }

    .logo-header {
      max-width: 200px;
    }
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 500px) {
    .logo-header {
      max-width: 185px;
    }
  }
  @media only screen and (max-width: 400px) {
    .block-bar {
      max-width: 29px;
      gap: 6px;

      div {
        height: 2px;
      }
    }

    .logo-header {
      max-width: 170px;
    }

    .container {
      padding: 11px 15px 13px;
    }
  }
`;
