import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { GenericCard } from "components/data/card-generic/data";

import {
  Container,
  CardGeneric,
  ButtonComponent,
  NextImage,
} from "components/data";

import * as S from "./styles";

interface AboutProps {
  button?: boolean;
  data: GenericCard[];
  grid: "repeat(3,1fr)" | "repeat(4,1fr)";
}

export function About({ data, button, grid }: AboutProps) {
  return (
    <S.About id="sobre" grid={grid}>
      <div
        className="absolute-image"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
        data-aos-easing="ease-out"
      >
        <NextImage
          src="/images/absolute-about-home.webp"
          layout="fill"
          alt="icone"
        />
      </div>

      <Container>
        <div className="grid-services hide-mobile">
          {data.map((data) => {
            return <CardGeneric key={data.id + data.title} data={data} />;
          })}
        </div>

        <div className="swiper-services show-mobile">
          <Swiper
            navigation={{
              nextEl: ".nav-next",
              prevEl: ".nav-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
          >
            {data.map((data) => {
              return (
                <SwiperSlide key={data.id + data.title}>
                  <CardGeneric key={data.id + data.title} data={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {button && (
          <ButtonComponent
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
            data-aos-easing="ease-out"
            href="/servicos"
            className="bt blue link-3-bold tk-poppins"
            text="Saiba mais sobre os nossos serviços"
          />
        )}

        <div className="navigation">
          <button className="nav-prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>

          <button className="nav-next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
      </Container>
    </S.About>
  );
}
