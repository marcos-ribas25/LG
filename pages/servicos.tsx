import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { GenericCard } from "components/data/card-generic/data";

import { Layout } from "components/layout";
import { NextImage, TextImage } from "components/data";
import { About } from "components/layout/sections/home";

import * as S from "styles/pages/servicos";

interface ServicoPageProps {
  services: GenericCard[];
}

export default function ServicosPage({ services }: ServicoPageProps) {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>Serviços</title>
        <link rel="canonical" href={router.pathname} />
        <meta property="og:title" content="Serviços" />
        <meta name="og:description" content="Serviços" />
        <meta name="description" content="Serviços" />
        <meta itemProp="description" content="Serviços" />
        <meta name="twitter:description" content="Serviços" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
      </Head>

      <S.Servicos>
        <div className="servicos">
          <div className="image-absolute">
            <NextImage
              src="/images/banner-servicos.webp"
              layout="fill"
              alt="banner-servicos"
            />
          </div>

          <h2 className="title-1-bold tk-noka uppercase">nossos serviços</h2>

          <About grid="repeat(4,1fr)" data={services} />
        </div>

        <TextImage
          align="right"
          color="blue"
          image="/images/text-image/image-2.webp"
          title="soluções PERSONALIZADAS PARA CADA CLIENTE"
          subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
      </S.Servicos>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const Services = [
    {
      id: 1,
      icon: "/images/servicos/service-1.webp",
      title: "motorista",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    },
    {
      id: 2,
      icon: "/images/servicos/service-2.webp",
      title: "limpeza profissional",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: 3,
      icon: "/images/servicos/service-3.webp",
      title: "segurança patrimonial",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    },
    {
      id: 4,
      icon: "/images/servicos/service-4.webp",
      title: "reformas e contrução",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: 1,
      icon: "/images/servicos/service-1.webp",
      title: "motorista",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    },
    {
      id: 2,
      icon: "/images/servicos/service-2.webp",
      title: "limpeza profissional",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: 3,
      icon: "/images/servicos/service-3.webp",
      title: "segurança patrimonial",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    },
    {
      id: 4,
      icon: "/images/servicos/service-4.webp",
      title: "reformas e contrução",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ];

  return {
    props: {
      services: Services,
    },
  };
};
