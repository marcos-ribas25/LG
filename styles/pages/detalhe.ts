import styled from "styled-components";

export const Detalhe = styled.section`
  .banner-service {
    background-color: var(--orange);
    position: relative;
    padding-top: 20px;

    .absolute-image {
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      max-width: 21.04vw;

      img {
        object-fit: contain !important;
      }
    }

    .container {
      display: flex;
      align-items: center;
      gap: 70px;
    }

    .text {
      max-width: 660px;
      width: 100%;
      color: #fff;
      padding: 30px 0;
    }

    h2 {
      margin-bottom: 35px;
    }

    p {
      line-height: 24px;
      margin-bottom: 35px;
      max-height: 170px;
      overflow-y: auto;
      padding-right: 10px;
    }

    p::-webkit-scrollbar {
      width: 5px;
    }

    p::-webkit-scrollbar-track {
      background: #ccc;
      border-radius: 5px;
    }

    p::-webkit-scrollbar-thumb {
      background: var(--blue);
      border-radius: 5px;
    }

    p::-webkit-scrollbar-thumb:hover {
      background: #000;
    }

    .image {
      max-width: 765px;
      width: 100%;

      img {
        width: 100% !important;
        object-fit: contain !important;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .banner-service {
      h2 {
        line-height: 1.2;
        margin-bottom: 25px;
      }

      p {
        max-height: 145px;
        margin-bottom: 30px;
        line-height: 23px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .banner-service {
      h2 {
        line-height: 1.1;
        margin-bottom: 20px;
      }

      p {
        max-height: 145px;
        margin-bottom: 25px;
        line-height: 22px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .banner-service {
      h2 {
        line-height: 1.1;
        margin-bottom: 15px;
        font-size: 40px;
      }

      p {
        max-height: 125px;
        margin-bottom: 20px;
        line-height: 21.5px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner-service {
      text-align: center;
      padding: 30px 0;

      .image {
        display: none;
      }

      .text {
        max-width: 500px;
        padding: 0;
        margin: 0 auto;
      }

      .button {
        justify-content: center;
      }

      h2 {
        line-height: 1.1;
        margin-bottom: 10px;
        font-size: 35px;
      }

      p {
        font-size: 13px;
        margin-bottom: 15px;
        max-height: fit-content;
        padding: 0;
        line-height: 20px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .banner-service {
      .text {
        max-width: 470px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .banner-service {
      .absolute-image {
        display: none;
      }
      .text {
        max-width: 400px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .banner-service {
      padding: 25px 0 20px;

      .absolute-image {
        display: none;
      }

      .text {
        max-width: 400px;
      }

      h2 {
        font-size: 30px;
        margin-bottom:5px;
      }

      p {
        font-size: 12px;
        line-height: 19px;
        margin-bottom: 10px;
      }
    }
  }
`;
