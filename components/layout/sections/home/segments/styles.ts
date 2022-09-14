import styled from "styled-components";

export const Segments = styled.section`
  padding: 120px 0;
  position: relative;

  .absolute-image {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 26vw;
    width: 100%;

    img {
        width: 100%!important;
        object-fit: contain!important;
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
`;
