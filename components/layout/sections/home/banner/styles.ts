import styled from "styled-components";

interface BannerStyleProps {
  heightHeader?: string;
}

export const BannerComponent = styled.section<BannerStyleProps>`
 background-image: url('/images/banner-home.webp');
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 height: ${(props) => props.heightHeader};

 h1 {
  padding-top: 14.26vh;
  text-align: center;
  color: var(--blue);

  span {
    display: block;
    color: var(--orange);
  }
 }
`