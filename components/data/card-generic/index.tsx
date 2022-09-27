import { NextImage } from "../NextImage";

import { GenericCard } from "./data";

import * as S from "./styles";

interface CardTreatmentProps {
  data: GenericCard;
}

export function CardGeneric({ data }: CardTreatmentProps) {
  return (
    <S.CardTreatment
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="300"
      data-aos-easing="ease-out"
      className="card-generic"
    >
      <div className="box">
        <div className="image">
          <NextImage src={data.icon} alt="Tratamento icone" layout="fill" />
        </div>

        <h3 className="title-3-bold tk-noka uppercase">{data.title}</h3>

        <p className="paragraph-2-regular tk-poppins">{data.subTitle}</p>
      </div>
    </S.CardTreatment>
  );
}
