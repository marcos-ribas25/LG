import styled from "styled-components";

export const Sobre = styled.section`
  .banner-about {
    display: flex;
    align-items: center;
    max-width: 90%;
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
        margin: 0 auto !important;
      }
    }
  }

  .card-generic {
    max-width: 375px;
  }

  @media only screen and (max-width: 1600px) {
    .banner-about {
      .text {
        max-width: 510px;
      }

      h1 {
        font-size: 57px;
        line-height: 1.3;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .banner-about {
      .text {
        max-width: 450px;
      }

      h1 {
        font-size: 51px;
        line-height: 1.25;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .banner-about {
      .text {
        max-width: 390px;
      }

      h1 {
        font-size: 45px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner-about {
      .text {
        max-width: 320px;
      }
      
      h1 {
        font-size: 37px;
        line-height: 1.2;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .banner-about {
      .text {
        max-width: 290px;
      }
      
      h1 {
        font-size: 33px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .banner-about {
      .text {
        max-width: 245px;
      }
      
      h1 {
        font-size: 28px;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .banner-about {
      gap: 25px;

      .text {
        max-width: 195px;
      }
      
      h1 {
        font-size: 22px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .banner-about {
      gap: 20px;

      .text {
        max-width: 155px;
      }
      
      h1 {
        font-size: 18px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .banner-about {
      gap: 15px;

      .text {
        max-width: 135px;
      }
      
      h1 {
        font-size: 13.5px;
      }
    }
  }
`;
