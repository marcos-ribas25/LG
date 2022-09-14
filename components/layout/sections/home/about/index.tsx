import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  ButtonComponent,
  CardGeneric,
  NextImage,
} from "components/data/components";
import { Container } from "components/data/container";

import * as S from "./styles";

export interface Service {
  id: number;
  icon: string;
  title: string;
  subTitle: string;
}

interface AboutProps {
  services: Service[];
}

export function About({ services }: AboutProps) {
  const [size, setSize] = useState<{ height: number; width: number } | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  if (!size) {
    return <></>;
  }

  return (
    <S.About id="sobre">
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
        {size.width > 1024 && (
          <div className="grid-services hide-mobile">
            {services.map((service) => {
              return (
                <CardGeneric key={service.id + service.title} data={service} />
              );
            })}
          </div>
        )}

        {size.width <= 1024 && (
          <div className="swiper-services">
            <Swiper>
              {services.map((service) => {
                return (
                  <SwiperSlide key={service.id + service.title}>
                    <CardGeneric
                      key={service.id + service.title}
                      data={service}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}

        <ButtonComponent
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          data-aos-easing="ease-out"
          href="/servicos"
          className="bt blue link-3-bold tk-poppins"
          text="Saiba mais sobre os nossos serviços"
        />
      </Container>
    </S.About>
  );
}
