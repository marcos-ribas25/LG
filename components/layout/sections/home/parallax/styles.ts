import styled from "styled-components";

export const Parallax = styled.section`
  background-image: url("/images/parallax-home.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
  padding: 140px 0;

  h2 {
    line-height: 1.4;
    color: #fff;
    max-width: 800px;
    margin: 0 auto;
  }

  a {
    max-width: 256px;
    margin: 45px auto 0;
  }

  @media only screen and (max-width: 1600px) {
    padding: 120px 0;

    h2 {
      max-width: 780px;
    }

    a {
      margin: 40px auto 0;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 90px 0;

    h2 {
      max-width: 700px;
    }

    a {
      margin: 35px auto 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 70px 0;

    h2 {
      max-width: 660px;
    }

    a {
      margin: 25px auto 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    background-attachment: unset;
    background-position: 20% 15%;
    padding: 50px 0;

    h2 {
      max-width: 500px;
    }

    a {
      margin: 20px auto 0;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 0;

    h2 {
      font-size: 19px;
      max-width: 400px;
    }

    a {
      margin: 15px auto 0;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 25px 0;

    h2 {
      font-size: 17px;
      max-width: 350px;
    }

    a {
      margin: 10px auto 0;
    }
  }

  @media only screen and (max-width: 400px) {
    h2 {
      font-size: 16.5px;
      max-width: 350px;
    }

    a {
      margin: 10px auto 0;
    }
  }
`;
