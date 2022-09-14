import { GetServerSideProps } from "next";

import { Layout } from "components/layout";
import {
  Banner,
  About,
  Contact,
  Segments,
  Parallax,
} from "components/layout/sections/home";
import { TextImage } from "components/layout/text-image";

import * as S from "styles/pages/home";
import { Service } from "components/layout/sections/home/about";
import { Segment } from "components/layout/sections/home/segments";

interface HomeProps {
  services: Service[];
  segments: Segment[];
}

export default function HomePage({ services,segments }: HomeProps) {
  console.log(services);
  return (
    <Layout>
      <S.Home>
        <Banner />

        <About services={services} />

        <TextImage
          btWidth="small"
          align="left"
          color="orange"
          image="/images/text-image/image-1.webp"
          title="atendendo suas necessidades com eficiência"
          subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          link="Saiba mais sobre nós"
        />

        <Segments segments={segments}/>

        <Parallax />

        <TextImage
          invert
          btWidth="full"
          align="right"
          color="orange"
          image="/images/text-image/image-2.webp"
          title="soluções PERSONALIZADAS PARA CADA CLIENTE"
          subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          link="Saiba mais sobre nossos serviços"
        />

        {/* <Contact  /> */}
      </S.Home>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ListServices = [
    {
      id: 1,
      icon: "/images/servicos/service-1.webp",
      title: "Setor administrativo",
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

  const ListSegments = [
    {
      id: 1,
      title: "indústrias",
    },
    {
      id: 2,
      title: "varejo",
    },
    {
      id: 3,
      title: "condomínios",
    },
    {
      id: 4,
      title: "órgãos públicos",
    },
    {
      id: 5,
      title: "escolas",
    },
    {
      id: 6,
      title: "universidades",
    },
    {
      id: 7,
      title: "clínicas",
    },
    {
      id: 8,
      title: "hospitais",
    },
    {
      id: 9,
      title: "escritórios",
    },
  ];

  return {
    props: {
      services: ListServices,
      segments: ListSegments,
    },
  };
};
