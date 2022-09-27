import styled from "styled-components";

export const Contact = styled.section`
  padding: 100px 0;
  background-color: var(--blue);
 
  .container {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 5;
  }

  h2 {
    border-bottom: 1px solid #fff;
    margin-bottom: 40px;
  }

  .text {
    max-width: 430px;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;

    .link {
      display: flex;
      align-items: center;
      gap: 11px;
      fill: #fff;
      color: #fff;
      transition: all 0.3s;

      svg {
        width: 20px;
        padding-bottom: 2px;
      }
    }

    .link:hover {
      color: var(--orange);
      fill: var(--orange);
    }

    .link + * {
      margin-top: 15px;
    }

    .link.base {
      align-items: flex-start;

      svg {
        display: block;
        height: 100%;
      }
    }
  }

  form {
    max-width: 775px;
    width: 100%;
  }

  label {
    color: #fff;
    margin-bottom: 5px;
  }

  button {
    border: unset;
    max-width: 360px;
    width: 100%;
  }

  button:hover {
    background-color: #fff;
    color: var(--orange);
  }

  @media only screen and (max-width: 1600px) {
    padding: 80px 0;

    form {
      max-width: 630px;
    }

    h2 {
      margin-bottom: 35px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 60px 0;

    form {
      max-width: 535px;
    }

    h2 {
      margin-bottom: 32px;
    }

    .text {
      max-width: 400px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 50px 0;

    form {
      max-width: 450px;
    }

    h2 {
      margin-bottom: 27px;
    }

    .text {
      max-width: 400px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 40px 0 60px;

    h2 {
      font-size: 30px;
    }

    form {
      max-width: 350px;
    }

    .text {
      max-width: 315px;

      .link {
        svg {
          max-width: 17px;
        }
      }

      .link + * {
        margin-top: 12px;
      }
    }
  }

  @media only screen and (max-width:768px) {
    padding: 30px 0 60px;

    .container {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    h2 {
      margin: 0 auto 20px;
      max-width: 350px;
      width: 100%;
      text-align: center;
    }

    .text, form {
      max-width: 500px;
    }

    form {
      .button {
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width:500px) {
    padding: 25px 0 50px;

    h2 {
      font-size: 26px;
      max-width: 270px;
    }

    .text {
      .link+*{
        margin-top: 11px;
      }

      .link {
        svg {
          max-width: 15px;
        }
      }
    }
  }
`;
