import styled from "styled-components";

interface TextImageStyleProps {
  color: string;
  align: string;
  btWidth: string;
}

export const TextImage = styled.section<TextImageStyleProps>`
  background-color: ${(props) =>
    props.color === "orange"
      ? "var(--orange)"
      : props.color === "blue"
      ? "var(--blue)"
      : "#fff"};

  .text-image {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1635px;
    gap: 35px;
    margin: ${(props) => props.align === "left" ? "0 auto 0 0" : "0 0 0 auto"};
  }

  .image {
    max-width: 945px;
    width: 100%;

    img {
      width: 100% !important;
      object-fit: contain !important;
    }
  }

  .text {
    max-width: 660px;
    width: 100%;
  }

  h2 {
    color: ${(props) =>
      props.color === "orange" || "blue" ? "#fff" : "var(--orange)"};
      line-height: 1.35;
      margin-bottom: 35px;
      max-width: 414px;
  }

  p {
    color: ${(props) => (props.color === "orange" || "blue" ? "#fff" : "#333")};
    line-height: 24px;
    margin-bottom: 35px;
  }

  .bt {
    background-color: ${(props) => props.color === "blue" ? "var(--orange)" : "var(--blue)"};
    max-width: ${(props) => props.btWidth === "small" ? "256px" : "356px"};
  }

  .bt:hover {
    background-color: ${(props) => props.color === "orange" ? "#002b3e" : props.color === "blue" ? "#0f85bc" : "var(--orange)"};
  }
`;
