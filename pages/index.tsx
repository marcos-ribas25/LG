import { GetServerSideProps } from "next";

import { Layout } from "components/layout";
import {
  Banner,
  About,
  Contact,
  Segments,
  Parallax,
  TestimonialComponent,
} from "components/layout/sections/home";
import { TextImage } from "components/layout/text-image";

import * as S from "styles/pages/home";
import { Customer, Customers } from "components/layout/customers";
import { Segment } from "components/layout/sections/home/segments";
import { Testimonial } from "components/layout/sections/home/testimonial";
import { GenericCard } from "components/data/card-generic/data";

interface HomeProps {
  services: GenericCard[];
  segments: Segment[];
  customers: Customer[];
  testimonials: Testimonial[];
}

export default function HomePage({
  services,
  segments,
  customers,
  testimonials,
}: HomeProps) {
  return (
    <Layout>
      <S.Home>
        <Banner />

        <About grid="repeat(4,1fr)" button data={services} />

        <TextImage
          invert
          align="left"
          color="orange"
          image="/images/text-image/image-1.webp"
          title="atendendo suas necessidades com eficiência"
          subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          link={{
            text: "Saiba mais sobre nós",
            url: "/sobre",
          }}
        />

        <Segments segments={segments} />

        <Parallax />

        <TextImage
          align="right"
          color="orange"
          image="/images/text-image/image-2.webp"
          title="soluções PERSONALIZADAS PARA CADA CLIENTE"
          subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          link={{
            text: "Saiba mais sobre nossos serviços",
            url: "/servicos",
          }}
        />

        <Customers data={customers} />

        <TestimonialComponent data={testimonials} />

        <Contact />
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

  const ListTestimonial = [
    {
      id: 1,
      image: "/images/servicos/service-1.webp",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
    },
    {
      id: 2,
      image: "/images/servicos/service-2.webp",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: 3,
      image: "/images/servicos/service-3.webp",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    },
  ];

  return {
    props: {
      services: ListServices,
      segments: ListSegments,
      customers: ListCustomers,
      testimonials: ListTestimonial,
    },
  };
};
