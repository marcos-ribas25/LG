import styled from "styled-components";

export const Work = styled.section`
  padding-top: 15vh;
  margin-bottom: 120px;

  .button {
    max-width: 400px;
    margin: 0 auto;

    button {
      width: 100%;
    }
  }

  .image-absolute {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
  }

  .container {
    position: relative;
    z-index: 5;
  }

  h2 {
    color: var(--blue);
    text-align: center;
    margin-bottom: 10vh;
  }

  form {
    max-width: 890px;
    margin: 0 auto;
    background-color: #fff;
    padding: 50px;
  }

  h3 {
    color: var(--orange);
    margin-bottom: 25px;
  }

  label {
    color: #2f2d2e;
  }

  .double-column {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media only screen and (max-width: 1600px) {
    padding-top: 14vh;
    margin-bottom: 100px;

    h2 {
      margin-bottom: 8vh;
    }

    form {
      max-width: 810px;
      padding: 40px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-top: 13vh;
    margin-bottom: 80px;

    h2 {
      margin-bottom: 6vh;
    }

    h3 {
      margin-bottom: 20px;
    }

    form {
      max-width: 750px;
      padding: 35px;
    }

    .double-column {
      gap: 25px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding-top: 11.5vh;
    margin-bottom: 60px;

    h2 {
      margin-bottom: 4vh;
    }

    h3 {
      margin-bottom: 18px;
    }

    form {
      max-width: 650px;
      padding: 30px;
    }

    .double-column {
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-top: 10vh;
    margin-bottom: 50px;

    h2 {
      margin-bottom: 3vh;
    }

    h3 {
      margin-bottom: 15px;
    }

    form {
      max-width: 600px;
      padding: 25px;
    }

    .double-column {
      gap: 15px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 8vh;
    margin-bottom: 40px;

    h2 {
      margin-bottom: 2vh;
    }

    h3 {
      margin-bottom: 13px;
    }

    form {
      padding: 20px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding-top: 50px;
    margin-bottom: 30px;

    position: relative;

    h2 {
      max-width: 195px;
      margin: 0 auto 20px;
    }

    h3 {
      font-size: 14px;
    }

    label {
      font-size: 13px;
    }

    .double-column {
      grid-template-columns: repeat(1, 1fr);
      gap: 9px;
    }
  }

  @media only screen and (max-width: 400px) {
    padding-top: 50px;
    position: relative;

    .container {
      padding: 0;
    }

    h3 {
      font-size: 12px;
    }

    form {
      padding: 15px;
    }
  }
`;
