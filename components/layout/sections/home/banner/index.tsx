import { useEffect, useState } from "react";

import { Container, NextImage } from "components/data";

import * as S from "./styles";

export function Banner() {
  const [heightHeader, setHeightHeader] = useState("");
  useEffect(() => {
    if (process.browser) {
      const header = document.querySelector("header");
      const headerHeight = header?.offsetHeight;

      setHeightHeader("calc(100vh - " + headerHeight + "px)");
    } else {
      setHeightHeader("calc(100vh - " + "65px" + "px)");
    }
  }, []);

  return (
    <S.BannerComponent heightHeader={heightHeader}>
      <div className="bg-image">
        <NextImage
          layout="fill"
          alt="banner home"
          src="/images/banner-home.webp"
        />
      </div>
      
      <Container>
        <h1
          className="title-1-bold tk-noka uppercase"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          serviços de qualidade
          <span>para a sua empresa</span>
        </h1>
      </Container>
    </S.BannerComponent>
  );
}
