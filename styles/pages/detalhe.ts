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
      max-width: 404px;

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
    }

    h2 {
      margin-bottom: 35px;
    }

    p {
      line-height: 24px;
      margin-bottom: 35px;
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
`;
