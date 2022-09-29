import Head from "next/head";
import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { Contact } from "components/layout/sections/home";
import {
  ButtonComponent,
  Container,
  NextImage,
  TextImage,
} from "components/data";

import * as S from "styles/pages/detalhe";

export default function DetalhePage() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Detalhe</title>
        <link rel="canonical" href={router.pathname} />
        <meta property="og:title" content="Detalhe" />
        <meta name="og:description" content="Detalhe" />
        <meta name="description" content="Detalhe" />
        <meta itemProp="description" content="Detalhe" />
        <meta name="twitter:description" content="Detalhe" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
      </Head>

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
