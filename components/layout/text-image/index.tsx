import { ButtonComponent } from "components/data/button";
import { NextImage } from "components/data/NextImage";
import * as S from "./styles";

interface TextImageProps {
  padding?: boolean;
  color: "orange" | "blue" | "white";
  align: string;
  invert?: boolean;
  titleSmall?: string;
  title: string;
  subTitle: string;
  image: string;
  absoluteImage?: string;
  link?: {
    text: string;
    url: string;
  };
}

export function TextImage({
  title,
  image,
  titleSmall,
  subTitle,
  link,
  invert,
  color,
  align,
  padding,
  absoluteImage,
}: TextImageProps) {
  return (
    <S.TextImage padding={padding} invert={invert} align={align} color={color}>
      {absoluteImage && (
        <div className="absolute-image">
          <NextImage src={absoluteImage} layout="fill" alt="Icone absoluto" />
        </div>
      )}

      <div
        className="text-image"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300"
        data-aos-easing="ease-out"
      >
        <div className="text">
          {titleSmall && <h3 className="title-4-regular tk-poppins">{titleSmall}</h3>}

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

        <div
          className="image"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          <NextImage src={image} layout="fill" alt="Imagem sobre" />
        </div>
      </div>
    </S.TextImage>
  );
}
