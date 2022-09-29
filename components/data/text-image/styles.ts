import styled from "styled-components";

interface TextImageStyleProps {
  color: string;
  align: string;
  invert?: boolean;
  padding?: boolean;
}

export const TextImage = styled.section<TextImageStyleProps>`
  background-color: ${(props) =>
    props.color === "orange"
      ? "var(--orange)"
      : props.color === "blue"
      ? "var(--blue)"
      : "#fff"};
  padding-top: ${(props) => props.padding && "50px"};
  position: relative;

  .absolute-image {
    position: absolute;
    top: 0;
    left: 0;
  }

  .text-image {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1635px;
    gap: 35px;
    margin: ${(props) =>
      props.align === "left" ? "0 auto 0 0" : "0 0 0 auto"};
    flex-direction: ${(props) => (props.invert ? "row-reverse" : "")};
    position: relative;
    z-index: 5;
  }

  .image {
    max-width: 945px;
    width: 100%;

    img {
      width: fit-content !important;
      object-fit: contain !important;
      margin: ${(props) =>
        props.align === "left"
          ? "0 auto 0 0!important"
          : "0 0 0 auto!important"};
    }
  }

  .text {
    padding: ${(props) =>
      props.align === "left" ? "20px 80px 20px 0" : "20px 0 20px 80px"};
    max-width: 660px;
    width: 100%;
  }

  h3 {
    color: ${(props) =>
      props.color === "orange" || "blue" ? "#fff" : "var(--orange)"};
    margin-bottom: 40px;
  }

  h2 {
    color: ${(props) =>
      props.color === "orange"
        ? "#fff"
        : props.color === "blue"
        ? "#fff"
        : props.color === "white" && "var(--orange) "};
    line-height: 1.35;
    margin-bottom: 35px;
    max-width: 414px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  p {
    color: ${(props) =>
      props.color === "orange"
        ? "#fff"
        : props.color === "blue"
        ? "#fff"
        : props.color === "white" && "#333"};
    line-height: 24px;
    margin-bottom: 35px;
    max-height: 170px;
    overflow-y: auto;
    padding-right: 20px;
  }

  p::-webkit-scrollbar {
    width: 5px;
  }

  p::-webkit-scrollbar-track {
    background: #ccc;
    border-radius: 5px;
  }

  p::-webkit-scrollbar-thumb {
    background: ${(props) => props.color === "orange" ? "var(--blue)" : "var(--orange)"};
    border-radius: 5px;
  }

  p::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }

  .bt:hover {
    background-color: ${(props) =>
      props.color === "orange"
        ? "#002b3e"
        : props.color === "blue"
        ? "#0f85bc"
        : "var(--orange)"};
  }

  @media only screen and (max-width: 1600px) {
    padding-top: ${(props) => props.padding && "40px"};

    h2 {
      margin-bottom: 20px;
    }

    p {
      line-height: 23px;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-top: ${(props) => props.padding && "30px"};

    h2 {
      margin-bottom: 15px;
    }

    p {
      line-height: 22px;
      margin-bottom: 25px;
      font-size: 13.5px;
      max-height: 150px;
    }

    .text {
      max-width: 550px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding-top: ${(props) => props.padding && "20px"};

    h2 {
      margin-bottom: 10px;
    }

    p {
      line-height: 21px;
      margin-bottom: 20px;
      font-size: 12.5px;
      max-height: 105px;
    }

    .text {
      max-width: 550px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-top: ${(props) => props.padding && "0"};

    .image {
      display: none;
    }

    .text-image {
      justify-content: center;
      padding: 40px 15px;
    }

    .text {
      max-width: 600px;
      text-align: center;
      padding: 0;
    }

    h2 {
      margin: 0 auto 15px;
      max-width: 460px;
    }

    p {
      max-height: fit-content;
      padding: 0;
    }

    .button {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .text-image {
      padding: 30px 15px;
    }

    h2 {
      max-width: 375px;
    }

    p {
      max-width: 490px;
      margin: 0 auto 15px;
      line-height: 20px;
    }
  }

  @media only screen and (max-width: 500px) {
    .text-image {
      padding: 25px 15px;
    }

    h2 {
      margin: 0 auto 10px;
    }

    p {
      margin: 0 auto 13px;
      line-height: 20px;
    }
  }
`;
