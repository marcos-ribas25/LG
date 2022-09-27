import styled from "styled-components";

export const Sobre = styled.section`
  .banner-about {
    display: flex;
    align-items: center;
    max-width: 1600px;
    margin: 0 0 0 auto;
    gap: 40px;

    h1 {
      color: var(--orange);
      line-height: 1.4;

      span {
        color: var(--blue);
      }
    }

    .text {
      max-width: 545px;
    }

    .image {
      max-width: 1120px;
      width: 100%;

      img {
        width: 100% !important;
        object-fit: contain !important;
      }
    }
  }

  .historia {
    .image {
      img {
        margin: 0 auto!important;
      }
    }
  }

  .card-generic {
    max-width: 375px;
  }
`;
