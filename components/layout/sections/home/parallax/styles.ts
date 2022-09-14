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
`;
