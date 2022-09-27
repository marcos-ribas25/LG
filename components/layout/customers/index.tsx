import { Container, NextImage } from "components/data";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";

export interface Customer {
  id: number;
  imagem: string;
}

interface CustomersProps {
  data: Customer[];
}

export function Customers({ data }: CustomersProps) {
  console.log(data);
  return (
    <S.Customers>
      <Container>
        <h2 className="title-2-bold tk-noka uppercase">
          ALGUNS DE NOSSOS CLIENTES
        </h2>

        <div className="grid-customers hide-mobile">
          {data.map((customer) => {
            return (
              <div className="image" key={customer.id}>
                <NextImage src={customer.imagem} layout="fill" alt="cliente" />
              </div>
            );
          })}
        </div>

        <div className="show-mobile">
          <Swiper
            navigation={{
              prevEl: ".nav-prev-customers",
              nextEl: ".nav-next-customers",
            }}
            breakpoints={{
              0: {
                slidesPerView:1,
              },
              500: {
                slidesPerView:2,
                spaceBetween:15
              },
              768: {
                slidesPerView: 3,
                spaceBetween:20,
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>

            <button className="nav-next-customers">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </S.Customers>
  );
}
