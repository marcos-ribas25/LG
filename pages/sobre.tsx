import { CardGeneric } from "components/data/card-generic";
import { GenericCard } from "components/data/card-generic/data";
import { NextImage } from "components/data/NextImage";
import { Layout } from "components/layout";
import { Customer, Customers } from "components/layout/customers";
import { About, Contact } from "components/layout/sections/home";
import { TextImage } from "components/layout/text-image";
import { GetServerSideProps } from "next";
import * as S from "styles/pages/sobre";

interface SobrePageProps {
  missao: GenericCard[];
  customers: Customer[];
}

export default function SobrePage({ missao,customers }: SobrePageProps) {
  return (
    <Layout>
      <S.Sobre>
        <section className="banner-about">
          <div className="text">
            <h1 className="title-1-bold tk-noka uppercase">
              <span>serviços para</span> todas as suas necessidades
            </h1>
          </div>

          <div className="image">
            <NextImage
              src="/images/banner-sobre.webp"
              layout="fill"
              alt="banner sobre"
            />
          </div>
        </section>

        <div className="historia">
          <TextImage
            padding
            invert
            align="left"
            color="orange"
            image="/images/historia.webp"
            title="nossa história"
            subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
            link={{
              text: "Entre em contato",
              url: "/contato",
            }}
          />
        </div>

        <About grid="repeat(3,1fr)" data={missao} />

        <TextImage
          align="right"
          color="orange"
          image="/images/equipe-page-about.webp"
          title="nossa equipe"
          subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          link={{
            text: "Trabalhe conosco",
            url: "/trabalhe",
          }}
        />

        <Customers data={customers} />

        <Contact />
      </S.Sobre>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const Missao = [
    {
      id: 1,
      icon: "/images/servicos/service-1.webp",
      title: "missão",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
      id: 2,
      icon: "/images/servicos/service-2.webp",
      title: "visão",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: 3,
      icon: "/images/servicos/service-3.webp",
      title: "Valores",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    },
  ];

  const ListCustomers = [
    {
      id: 1,
      imagem: "/images/clientes/customers-1.webp",
    },
    {
      id: 2,
      imagem: "/images/clientes/customers-2.webp",
    },
    {
      id: 3,
      imagem: "/images/clientes/customers-3.webp",
    },
    {
      id: 4,
      imagem: "/images/clientes/customers-4.webp",
    },
    {
      id: 5,
      imagem: "/images/clientes/customers-5.webp",
    },
    {
      id: 6,
      imagem: "/images/clientes/customers-6.webp",
    },
    {
      id: 7,
      imagem: "/images/clientes/customers-7.webp",
    },
    {
      id: 8,
      imagem: "/images/clientes/customers-8.webp",
    },
    {
      id: 9,
      imagem: "/images/clientes/customers-9.webp",
    },
    {
      id: 10,
      imagem: "/images/clientes/customers-10.webp",
    },
  ];

  return {
    props: {
      missao: Missao,
      customers: ListCustomers,
    },
  };
};
