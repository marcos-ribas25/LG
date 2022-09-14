import styled from "styled-components";

export const CardTreatment = styled.div`
  text-align: center;

  .image {
    aspect-ratio: 80/80;
    max-width: 80px;
    width: 100%;
    margin: 0 auto;

    img {
      width: 100% !important;
      object-fit: contain !important;
    }
  }

  h3 {
    margin-top: 8px;
    color: var(--orange);
    line-height: 1.2;
  }

  p {
    margin-top: 12px;
    color: #333;
  }
`;
