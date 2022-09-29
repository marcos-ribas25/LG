import styled from "styled-components";

export const Servicos = styled.section`
  .servicos {
    padding-top: 183px;
    position: relative;

    h2 {
      color: var(--blue);
      text-align: center;
      margin-bottom: 20px;
    }

    .image-absolute {
      position: absolute;
      top: -130px;
      left: 0;
      max-width: 100%;
    }
  }

  .card-generic {
    max-width: 230px;
  }

  @media only screen and (max-width: 1600px) {
    .servicos {
      padding-top: 140px;

      h2 {
        margin-bottom: 15px;
      }

      .image-absolute {
        top: -100px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .servicos {
      padding-top: 120px;

      h2 {
        margin-bottom: 10px;
      }

      .image-absolute {
        top: -120px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .servicos {
      padding-top: 100px;

      h2 {
        margin-bottom: 5px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .servicos {
      padding-top: 80px;

      h2 {
        margin-bottom: 0;
        font-size: 40px;
      }

      .image-absolute {
        top: -100px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .servicos {
      padding-top: 70px;

      h2 {
        font-size: 35px;
      }

      .image-absolute {
        top: -80px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .servicos {
      padding-top: 60px;

      h2 {
        font-size: 30px;
      }

      .image-absolute {
        top: -60px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .servicos {
      padding-top: 25px;

      h2 {
        font-size: 20px;
      }

      .image-absolute {
        display: none;
      }

      #sobre {
        padding: 0;
      }
    }
  }
`;
