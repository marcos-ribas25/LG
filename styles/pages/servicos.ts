import styled from "styled-components";

export const Servicos = styled.section`
  .servicos {
    padding-top: 183px;
    position: relative;

    h2 {
      color: var(--blue);
      text-align: center;
      margin-bottom: 20px;
    }

    .image-absolute {
      position: absolute;
      top: -100px;
      left: 0;
      max-width: 100%;
    }
  }

  .card-generic {
    max-width: 230px;
  }
`;
