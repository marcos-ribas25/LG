import styled from "styled-components";

export const Sucesso = styled.section`
  padding: 20vh 0;

  .box-sucesso {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--blue);
    padding: 25px 20px 30px;
    border-radius: 10px;
    color: #fff;
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 0 auto 15px;
    max-width: 300px;
  }

  .button {
    justify-content: center;
  }

  @media only screen and (max-width: 500px) {
    padding: 19vh 0;

    .box-sucesso {
      max-width: 90%;
      padding: 20px;
    }

    p {
      margin: 0 auto 12px;
      font-size: 13px;
    }

    h3 {
      margin-bottom: 8px;
    }
  }
`;
