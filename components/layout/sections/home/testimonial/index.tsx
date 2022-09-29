import { Swiper, SwiperSlide } from "swiper/react";

import { Container, NextImage } from "components/data";

import * as S from "./styles";

export interface Testimonial {
  id: number;
  text: string;
  image: string;
}

interface TestimonialProps {
  data: Testimonial[];
}

export function TestimonialComponent({ data }: TestimonialProps) {
  return (
    <S.Testimonial>
      <Container>
        <Swiper
          navigation={{
            nextEl: ".nav-next-testimonial",
            prevEl: ".nav-prev-testimonial",
          }}
          fadeEffect={{ crossFade: true }}
          effect={"fade"}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1000"
          data-aos-easing="ease-out"
        >
          {data.map((data) => {
            return (
              <SwiperSlide key={data.id} className="card-testimonial">
                <div className="image">
                  <NextImage
                    src={data.image}
                    layout="fill"
                    alt={"depoimento" + data.id}
                  />
                </div>

                <div className="text">
                  <p className="paragraph-1-regular tk-poppins">{data.text}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div
          className="navigation"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1000"
          data-aos-easing="ease-out"
        >
          <button
            type="button"
            aria-label="Voltar"
            className="nav-prev-testimonial"
          >
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
          <button
            type="button"
            aria-label="avançar"
            className="nav-next-testimonial"
          >
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
    </S.Testimonial>
  );
}
