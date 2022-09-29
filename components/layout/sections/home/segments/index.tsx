import { Container, NextImage } from "components/data";

import * as S from "./styles";

export interface Segment {
  id: number;
  title: string;
}

interface SegmentsProps {
  segments: Segment[];
}

export function Segments({ segments }: SegmentsProps) {
  return (
    <S.Segments>
      <div
        className="absolute-image"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
        data-aos-easing="ease-out"
      >
        <NextImage
          src="/images/icon-segments-absolute.webp"
          layout="fill"
          alt="Icone"
        />
      </div>
      <Container>
        <div
          className="content"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          <h2 className="title-2-bold tk-noka uppercase">
            Atendemos diversos segmentos
          </h2>

          <ul>
            {segments.map((segment) => {
              return (
                <li
                  className="paragraph-2-bold tk-poppins"
                  key={segment.id + segment.title}
                >
                  {segment.title}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </S.Segments>
  );
}
