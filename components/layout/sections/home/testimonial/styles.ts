import styled from "styled-components";

export const Testimonial = styled.section`
  padding: 20px 0 120px;

  .container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .swiper {
    max-width: 1180px;
    position: unset;
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .image {
    max-width: 140px;
    width: 100%;

    img {
      width: 100%;
      object-fit: contain !important;
    }
  }

  .text {
    max-width: calc(100% - 170px);
    width: 100%;
  }

  p {
    max-height: 224px;
    overflow-x: auto;
    padding-right: 12px;
  }

  p::-webkit-scrollbar {
    width: 7px;
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
    background: var(--orange);
  }

  .card-testimonial {
    padding: 60px 90px 60px 60px;
    display: flex;
    align-items: center;
    gap: 30px;
    border: 2px solid #ff6400;
    border-radius: 24px;
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

    button {
      border: unset;
      background-color: transparent;
      width: 40px;
      height: 40px;
      padding: 0;

      svg {
        fill: var(--blue);
        stroke: #fff;
        transition: 0.45s;
      }
    }

    button:hover {
      svg {
        fill: var(--orange);
        stroke: #fff;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 25px 0 100px;

    .swiper {
      max-width: 1090px;
    }

    .card-testimonial {
      padding: 50px 70px 50px 50px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 20px 0 80px;

    .swiper {
      max-width: 930px;
    }

    .card-testimonial {
      padding: 43px 55px 43px 45px;
    }

    .image {
      max-width: 125px;
    }

    .text {
      max-width: calc(100% - 155px);
    }

    p {
      max-height: 145px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 15px 0 60px;

    .swiper {
      max-width: 810px;
    }

    .navigation {
      svg {
        width: 35px;
      }
    }

    .card-testimonial {
      padding: 38px 40px 38px 35px;
    }

    .image {
      max-width: 105px;
    }

    .text {
      max-width: calc(100% - 135px);
    }

    p {
      max-height: 135px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 10px 0 45px;

    .swiper {
      max-width: 620px;
    }

    .navigation {
      svg {
        width: 32px;
      }
    }

    .card-testimonial {
      padding: 30px 34px 30px 30px;
    }

    .image {
      max-width: 90px;
    }

    .text {
      max-width: calc(100% - 120px);
    }

    p {
      max-height: 115px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 5px 0 35px;

    .swiper {
      max-width: 520px;
    }

    .navigation {
      svg {
        width: 25px;
      }
    }

    .card-testimonial {
      padding: 25px 30px 25px 30px;
      border-radius: 15px;
    }

    .image {
      max-width: 70px;
    }

    .text {
      max-width: calc(100% - 100px);
    }

    p {
      max-height: 100px;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 650px) {
    padding: 20px 0 35px;

    .swiper {
      max-width: 350px;
    }

    .container {
      max-width: 470px;
    }

    .navigation {
      padding: 0 5px;
      svg {
        width: 23px;
      }
    }

    .card-testimonial {
      padding: 20px 25px;
      gap: 20px;
    }

    .image {
      max-width: 50px;
    }

    .text {
      max-width: calc(100% - 70px);
    }

    p {
      max-height: 85px;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 20px 0 25px;

    .swiper {
      max-width: 280px;
    }

    .container {
      max-width: 370px;
    }

    .card-testimonial {
      padding: 20px 10px;
      flex-direction: column;
    }

    .image {
      max-width: 60px;
    }

    .text {
      max-width: 100%;
    }

    p {
      text-align: center;
      max-height: 85px;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 20px 0;

    .swiper {
      max-width: 200px;
    }

    .container {
      max-width: 300px;
    }

    .card-testimonial {
      padding: 15px 10px;
      flex-direction: column;
      gap: 15px;
    }

    .image {
      max-width: 45px;
    }

    .text {
      max-width: 100%;
    }

    p {
      text-align: center;
      max-height: 110px;
      font-size: 13px;
      line-height: 18px;
    }

    p::-webkit-scrollbar {
      width: 5px;
    }
  }
`;
