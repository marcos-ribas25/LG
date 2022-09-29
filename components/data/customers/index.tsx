import { Swiper, SwiperSlide } from "swiper/react";

import { Container, NextImage } from "components/data";

import * as S from "./styles";

export interface Customer {
  id: number;
  imagem: string;
}

interface CustomersProps {
  data: Customer[];
}

export function Customers({ data }: CustomersProps) {
  return (
    <S.Customers>
      <Container>
        <h2
          className="title-2-bold tk-noka uppercase"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          ALGUNS DE NOSSOS CLIENTES
        </h2>

        <div
          className="grid-customers hide-mobile"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1200"
          data-aos-easing="ease-out"
        >
          {data.map((customer) => {
            return (
              <div className="image" key={customer.id}>
                <NextImage src={customer.imagem} layout="fill" alt="cliente" />
              </div>
            );
          })}
        </div>

        <div
          className="show-mobile"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          <Swiper
            navigation={{
              prevEl: ".nav-prev-customers",
              nextEl: ".nav-next-customers",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((customer) => {
              return (
                <SwiperSlide>
                  <div className="image" key={customer.id}>
                    <NextImage
                      src={customer.imagem}
                      layout="fill"
                      alt="cliente"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="navigation">
            <button className="nav-prev-customers">
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

            <button className="nav-next-customers">
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
        </div>
      </Container>
    </S.Customers>
  );
}
