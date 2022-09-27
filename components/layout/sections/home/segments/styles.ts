import styled from "styled-components";

export const Segments = styled.section`
  padding: 120px 0;
  position: relative;

  .absolute-image {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 24vw;
    width: 100%;

    img {
      width: 100% !important;
      object-fit: contain !important;
    }
  }

  h2 {
    line-height: 1.2;
    color: var(--orange);
    margin-bottom: 35px;
  }

  ul {
    display: flex;
    max-width: 770px;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
  }

  li {
    height: 48px;
    border-radius: 24px;
    padding: 0 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--blue);
    color: var(--blue);
  }

  @media only screen and (max-width: 1600px) {
    padding: 100px 0;

    .absolute-image {
      max-width: 22vw;
    }

    h2 {
      margin-bottom: 29px;
    }

    ul {
      gap: 18px;
    }

    li {
      height: 44px;
      padding: 0 20px;
      border-radius: 22px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 85px 0;

    .absolute-image {
      max-width: 20vw;
    }

    h2 {
      margin-bottom: 25px;
    }

    ul {
      gap: 16px;
    }

    li {
      height: 42px;
      padding: 3px 18px 0;
      border-radius: 20px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 70px 0;

    .absolute-image {
      max-width: 18.5vw;
    }

    h2 {
      margin-bottom: 22px;
    }

    ul {
      gap: 15px;
    }

    li {
      height: 40px;
      padding: 3px 16px 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 50px 0;
    text-align: center;

    h2 {
      margin-bottom: 18px;
    }

    ul {
      justify-content: center;
      gap: 14px;
      max-width: 590px;
      margin: 0 auto;
    }

    li {
      height: 38px;
      padding: 3px 14px 0;
      font-size: 13px;
    }

    .absolute-image {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 0 45px;

    h2 {
      margin-bottom: 16px;
    }

    ul {
      gap: 13px;
    }

    li {
      height: 36px;
      padding: 3px 13px 0;
      font-size: 12.5px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 30px 0 35px;

    h2 {
      margin-bottom: 16px;
      font-size: 17px;
      line-height: 1.4;
    }

    ul {
      gap: 12px;
    }

    li {
      height: 34px;
      padding: 3px 12px 0;
      font-size: 12px;
    }
  }
`;
