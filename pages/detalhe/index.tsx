import { ButtonComponent } from "components/data/button";
import { Container } from "components/data/container";
import { NextImage } from "components/data/NextImage";
import { Layout } from "components/layout";
import { Contact } from "components/layout/sections/home";
import { TextImage } from "components/layout/text-image";
import * as S from "styles/pages/detalhe";

export default function DetalhePage() {
  return (
    <Layout>
      <S.Detalhe>
        <div className="banner-service">
          <div className="absolute-image">
            <NextImage
              src="/images/absolute-icone-text-image.webp"
              layout="fill"
              alt="Icone absoluto"
            />
          </div>
          <Container>
            <div className="image">
              <NextImage
                src="/images/image-service.webp"
                layout="fill"
                alt="Banner serviços"
              />
            </div>

            <div className="text">
              <h3 className="title-4-regular tk-poppins">Nossos serviços</h3>

              <h2 className="title-1-bold tk-noka uppercase">limpeza</h2>

              <p className="paragraph-2-regular tk-poppins">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>

              <ButtonComponent
                backgroundColor="var(--blue)"
                href="/contato"
                text="Entre em contato"
              />
            </div>
          </Container>
        </div>

        <TextImage
          align="right"
          color="white"
          image="/images/text-image/image-2.webp"
          title="soluções PERSONALIZADAS PARA CADA CLIENTE"
          subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          link={{
            text: "Saiba mais sobre nossos serviços",
            url: "/servicos",
          }}
        />

        <Contact />
      </S.Detalhe>
    </Layout>
  );
}
