import { ButtonComponent, NextImage } from "components/data";

import * as S from "./styles";

interface TextImageProps {
  align: string;
  title: string;
  image: string;
  link?: {
    text: string;
    url: string;
  };
  invert?: boolean;
  subTitle: string;
  padding?: boolean;
  titleSmall?: string;
  absoluteImage?: string;
  color: "orange" | "blue" | "white";
}

export function TextImage({
  link,
  title,
  image,
  invert,
  color,
  align,
  padding,
  subTitle,
  titleSmall,
  absoluteImage,
}: TextImageProps) {
  return (
    <S.TextImage padding={padding} invert={invert} align={align} color={color}>
      {absoluteImage && (
        <div className="absolute-image">
          <NextImage src={absoluteImage} layout="fill" alt="Icone absoluto" />
        </div>
      )}

      <div className="text-image">
        <div
          className="text"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          {titleSmall && (
            <h3 className="title-4-regular tk-poppins">{titleSmall}</h3>
          )}

          <h2 className="title-2-bold tk-noka uppercase">{title}</h2>

          <p className="paragraph-2-regular tk-poppins">{subTitle}</p>

          {link && (
            <ButtonComponent
              backgroundColor={
                color && `var(--${color === "orange" ? "blue" : "orange"})`
              }
              href={link.url}
              text={link.text}
            />
          )}
        </div>

        <div className="image">
          <NextImage src={image} layout="fill" alt="Imagem sobre" />
        </div>
      </div>
    </S.TextImage>
  );
}
