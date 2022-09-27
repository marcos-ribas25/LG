import styled from "styled-components";

interface BannerStyleProps {
  heightHeader?: string;
}

export const BannerComponent = styled.section<BannerStyleProps>`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  height: ${(props) => props.heightHeader};

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    height: ${(props) => props.heightHeader};
    max-width: 100%;
    width: 100%;
  }

  h1 {
    padding-top: 14.26vh;
    text-align: center;
    color: var(--blue);
    line-height: 1.3;

    span {
      display: block;
      color: var(--orange);
    }
  }

  @media only screen and (max-width: 1600px) {
    h1 {
      padding-top: 13vh;
    }
  }

  @media only screen and (max-width: 1400px) {
    h1 {
      padding-top: 12vh;
    }
  }

  @media only screen and (max-width: 1200px) {
    h1 {
      padding-top: 11vh;
      font-size: 44px;
    }
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      padding-top: 10vh;
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 37px;
    }

    .container {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 34px;
      padding-top: 9vh;
    }

    .container {
      max-width: 350px;
    }
  }

  
  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 34px;
      padding-top: 8vh;
    }
  }
`;
