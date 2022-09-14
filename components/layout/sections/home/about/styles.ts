import styled from "styled-components";

export const About = styled.section`
  padding: 100px 0;
  position: relative;

  .grid-services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .card-generic {
    max-width: 230px;
  }

  .grid-services+*{
    margin-top: 50px;
  }

  a {
    max-width: 430px;
    margin: 0 auto;
  }

  .absolute-image {
    position: absolute;
    top: 50px;
    left: -50px;
    max-width: 26.04vw;
    width: 100%;

    img {
      width: 100%!important;
      object-fit: contain!important;
    }
  }
`;
