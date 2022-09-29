import { Swiper, SwiperSlide } from "swiper/react";

import { GenericCard } from "components/data/card-generic/data";

import {
  NextImage,
  Container,
  CardGeneric,
  ButtonComponent,
} from "components/data";

import * as S from "./styles";

interface AboutProps {
  button?: boolean;
  data: GenericCard[];
  absoluteImage?: boolean;
  grid: "repeat(3,1fr)" | "repeat(4,1fr)";
}

export function About({ data, button, grid, absoluteImage }: AboutProps) {
  return (
    <S.About id="sobre" grid={grid}>
      {absoluteImage && (
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
      )}

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <g>
                <g>
                  <g>
                    <path d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z" />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke-miterlimit="20"
                      stroke-width="3"
                      d="M24.194 9.611v0l-10.388 10.39v0l10.388 10.388v0"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>

          <button className="nav-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <g>
                <g transform="rotate(-180 20 20)">
                  <g>
                    <path d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z" />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke-miterlimit="20"
                      stroke-width="3"
                      d="M24.194 9.611v0l-10.388 10.39v0l10.388 10.388v0"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </Container>
    </S.About>
  );
}
