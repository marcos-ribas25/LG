import styled from "styled-components";

export const Customers = styled.section`
  padding: 120px 0 100px;

  .show-mobile {
    position: relative;
  }

  .navigation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    display: flex;
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

  h2 {
    color: var(--orange);
    margin-bottom: 75px;
  }

  .grid-customers {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 50px;
  }

  .image {
    aspect-ratio: 260/53;
    max-width: 270px;
    width: 100%;

    img {
      width: 100% !important;
      object-fit: contain !important;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 100px 0 85px;

    h2 {
      margin-bottom: 55px;
    }

    .grid-customers {
      gap: 45px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 80px 0 70px;

    h2 {
      margin-bottom: 40px;
    }

    .grid-customers {
      gap: 40px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 60px 0 55px;

    h2 {
      margin-bottom: 25px;
    }

    .grid-customers {
      gap: 35px;
    }
  }

  @media only screen and (max-width: 1024px) {
    text-align: center;

    .hide-mobile {
      display: none;
    }

    .show-mobile {
      display: block !important;
    }

    h2 {
      margin-bottom: 20px;
    }

    .navigation {
      svg {
        width: 32px;
      }
    }

    .image {
      max-width: 200px;
    }

    .swiper {
      max-width: 600px;
    }

    .swiper-slide {
      .image {
        margin: 0 auto;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 45px 0 40px;

    h2 {
      margin-bottom: 18px;
    }

    .image {
      max-width: 195px;
    }

    .swiper {
      max-width: 550px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 0 30px;

    .navigation {
      svg {
        width: 25px;
      }
    }

    .image {
      max-width: 170px;
    }

    .swiper {
      max-width: 400px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 27px 0 23px;

    .image {
      max-width: 160px;
    }

    .container {
      max-width: 350px;
    }

    .navigation {
      svg {
        width: 23px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 24px 0 30px;

    h2 {
      font-size: 17px;
      margin-bottom: 15px;
    }

    .image {
      max-width: 150px;
    }

    .container {
      max-width: 300px;
    }
  }
`;
