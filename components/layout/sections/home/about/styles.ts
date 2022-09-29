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
    justify-content: space-between;
    align-items: center;
    z-index: 5;

    button {
      border: unset;
      background-color: transparent;
      width: 40px;
      height: 40px;
      padding: 0;

      svg {
        fill: var(--orange);
        stroke: #fff;
        transition: 0.45s;
      }
    }

    button:hover {
      svg {
        fill: var(--blue);
        stroke: #fff;
      }
    }
  }

  .grid-services {
    display: grid;
    grid-template-columns: ${(props) => props.grid};
    gap: 50px;
  }

  .button {
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

    .button {
      margin-top: 45px;
    }

    .grid-services {
      gap: 45px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 70px 0;

    .button {
      margin-top: 40px;
    }

    .grid-services {
      gap: 40px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 50px 0;

    .button {
      margin-top: 30px;
    }

    .grid-services {
      gap: 35px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 40px 0;

    .navigation {
      display: flex;

      svg {
        width: 32px;
      }
    }

    .absolute-image {
      display: none;
    }

    .hide-mobile {
      display: none !important;
    }

    .show-mobile {
      display: block !important;
    }

    .swiper-services {
      max-width: 650px;
      margin: 0 auto;
    }

    .button {
      margin-top: 25px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 0;

    .swiper-services {
      max-width: 400px;
    }

    .button {
      margin-top: 25px;
    }

    .navigation {
      svg {
        width: 25px;
      }
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

    .navigation {
      svg {
        width: 23px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .container {
      max-width: 320px;
    }

    .swiper-services {
      max-width: 215px;
    }

    .swiper-wrapper {
      display: flex;
      align-items: center;
    }

    .button {
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

    .button {
      margin-top: 20px;
    }

    .button {
      a {
        font-size: 11.5px;
      }
    }
  }
`;
