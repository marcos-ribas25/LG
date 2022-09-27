import styled from "styled-components";

export const CardTreatment = styled.div`
  text-align: center;

  .image {
    aspect-ratio: 80/80;
    max-width: 80px;
    width: 100%;
    margin: 0 auto;

    img {
      width: 100% !important;
      object-fit: contain !important;
    }
  }

  h3 {
    margin-top: 11px;
    color: var(--orange);
    line-height: 1.2;
    min-height: 58px;
  }

  p {
    margin-top: 12px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  @media only screen and (max-width: 1600px) {
    .image {
      max-width: 75px;
    }

    h3 {
      min-height: 50px;
    }

    p {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .image {
      max-width: 70px;
    }

    p {
      margin-top: 8px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .image {
      max-width: 60px;
    }

    h3 {
      min-height: 44px;
    }

    p {
      -webkit-line-clamp: 5;
      margin-top: 8px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .image {
      max-width: 50px;
    }

    p {
      font-size: 12.5px;
    }

    h3 {
      min-height: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    .image {
      max-width: 45px;
    }
  }

  @media only screen and (max-width: 500px) {
    h3 {
      min-height: fit-content;
    }
  }
`;
