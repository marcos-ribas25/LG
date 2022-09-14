import { ButtonComponent } from "components/data/button";
import { NextImage } from "components/data/NextImage";
import * as S from "./styles";

interface TextImageProps {
  color: string;
  align: string;
  invert?: boolean;
  btWidth: string;
  title: string;
  subTitle: string;
  image: string;
  link?: string;
  href?: string;
}

export function TextImage({
  title,
  image,
  subTitle,
  link,
  href,
  invert,
  color,
  align,
  btWidth,
}: TextImageProps) {
  return (
    <S.TextImage btWidth={btWidth} align={align} color={color}>
      {invert && (
        <div className="text-image">
          <div
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
            data-aos-easing="ease-out"
          >
            <h2 className="title-2-bold tk-noka uppercase">{title}</h2>

            <p className="paragraph-2-regular tk-poppins">{subTitle}</p>

            {link && (
              <ButtonComponent
                className="bt link-3-bold tk-poppins"
                href={href}
                text={link}
              />
            )}
          </div>

          <div
            className="image"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
            data-aos-easing="ease-out"
          >
            <NextImage src={image} layout="fill" alt="Imagem sobre" />
          </div>
        </div>
      )}

      {!invert && (
        <div
          className="text-image"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          <div className="image">
            <NextImage src={image} layout="fill" alt="Imagem sobre" />
          </div>

          <div
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
            data-aos-easing="ease-out"
          >
            <h2 className="title-2-bold tk-noka uppercase">{title}</h2>

            <p className="paragraph-2-regular tk-poppins">{subTitle}</p>

            {link && (
              <ButtonComponent
                className="bt link-3-bold tk-poppins"
                href={href}
                text={link}
              />
            )}
          </div>
        </div>
      )}
    </S.TextImage>
  );
}
