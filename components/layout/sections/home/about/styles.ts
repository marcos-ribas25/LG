import styled from "styled-components";

interface AboutStylesProps {
  grid: string;
}

export const About = styled.section<AboutStylesProps>`
  padding: 100px 0;
  position: relative;

  .container {
    position: relative;
  }

  .navigation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: var(--orange);
      width: 31px;
      height: 31px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: unset;

      svg {
        width: 17px;
        fill: var(--blue);
      }
    }
  }

  .grid-services {
    display: grid;
    grid-template-columns: ${(props) => props.grid};
    gap: 50px;
  }

  .grid-services + * {
    margin-top: 50px;
  }

  a {
    max-width: 430px;
    margin: 0 auto;
  }

  .absolute-image {
    position: absolute;
    bottom: -100px;
    left: -50px;
    max-width: 26.04vw;
    width: 100%;
    z-index: 3;

    img {
      width: 100% !important;
      object-fit: contain !important;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 85px 0;

    .grid-services + * {
      margin-top: 45px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 70px 0;

    .grid-services + * {
      margin-top: 40px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 50px 0;

    .grid-services + * {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 40px 0;

    .absolute-image {
      display: none;
    }

    .hide-mobile {
      display: none!important;
    }

    .show-mobile {
      display: block!important;
    }

    .swiper-wrapper {
      display: flex;
      align-items: center;
    } 

    .swiper-services {
      max-width: 650px;
      margin: 0 auto;
    }

    .swiper-services + * {
      margin-top: 25px;
    }

    .navigation {
      display: flex;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 0;

    .swiper-services {
      max-width: 400px;
    }

    .swiper-services + * {
      margin-top: 25px;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 25px 0;

    .container {
      max-width: 480px;
    }

    .swiper-services {
      max-width: 380px;
    }
  }

  @media only screen and (max-width: 500px) {
    .container {
      max-width: 320px;
    }

    .swiper-services {
      max-width: 215px;
    }

    .swiper-services + * {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 400px) {
    .container {
      max-width: 280px;
    }

    .swiper-services {
      max-width: 215px;
    }

    .swiper-services + * {
      margin-top: 20px;
    }

    .button {
      a {
        font-size: 11.5px;
      }
    }

    .navigation {
      button {
        width: 24px;
        height: 24px;

        svg {
          width: 12px;
        }
      }
    }
  }
`;
