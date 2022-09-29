import { useRef, useState } from "react";

import Head from "next/head";
import router, { useRouter } from "next/router";

import { api } from "src/services/api";

import {
  Form,
  FormHandles,
  InputComponent,
  InputFile,
  TextAreaComponent,
} from "components/inputs/core";
import { Layout } from "components/layout";
import { ButtonComponent, Container, NextImage } from "components/data";

import * as S from "styles/pages/trabalhe-conosco";

interface WorkUsProps {
  nome: string;
  numero: string;
  email: string;
  mensagem: string;
  arquivo: File;
}

export default function WorkUsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter()

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit({ ...data }: WorkUsProps) {
    const yup = await import("yup");

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("arquivo", data.arquivo);

      const schema = yup.object().shape({
        nome: yup.string().required("Por favor, digite um nome"),
        email: yup
          .string()
          .email("Por favor, digite um email válido")
          .required("Por favor, digite um email"),
        numero: yup
          .string()
          .min(11, "Por favor, digite um número válido")
          .required("Por favor, digite um número"),
        arquivo: yup.string().required("Por favor, selecione um documento"),
      });

      await schema.validate({ ...data }, { abortEarly: false });

      formRef.current?.setErrors({});

      const response = await api.post("form", {
        ...data,
        arquivo: formData,
      });

      if (response.status === 200) {
        router.push({
          pathname: "/contato/sucesso",
          query: { name: data.nome },
        });

        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);

      const yupError = err instanceof yup.ValidationError;

      if (err && !yupError) {
        setError(err);
      }
    }
  }

  return (
    <Layout>
      <Head>
        <title>Trabalhe conosco</title>
        <link rel="canonical" href={router.pathname} />
        <meta property="og:title" content="Trabalhe conosco" />
        <meta name="og:description" content="Trabalhe conosco" />
        <meta name="description" content="Trabalhe conosco" />
        <meta itemProp="description" content="Trabalhe conosco" />
        <meta name="twitter:description" content="Trabalhe conosco" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
      </Head>

      <S.Work>
        <div className="image-absolute">
          <NextImage
            src="/images/banner-servicos.webp"
            layout="fill"
            alt="banner-servicos"
          />
        </div>

        <Container>
          <h2 className="title-2-bold tk-noka uppercase">trabalhe conosco</h2>

          <Form method="post" ref={formRef} onSubmit={handleSubmit}>
            <h3 className="title-3-bold tk-noka">
              Envie seu currículo e entraremos em contato
            </h3>

            {error.length > 0 && (
              <p
                id="error-message"
                className="error paragraph-20-medium error-message"
              >
                {error}
              </p>
            )}

            <InputComponent
              id="nome"
              name="nome"
              type="text"
              label="Nome completo*"
              placeholder="Digite seu nome aqui"
            />

            <div className="double-column">
              <div className="input-content phone">
                <label
                  className="label-text paragraph-2-bold tk-poppins"
                  htmlFor={"phone"}
                >
                  Telefone*
                </label>

                <InputComponent
                  id="numero"
                  name="numero"
                  type="text"
                  mask="(99) 99999-9999"
                  placeholder="(DDD) 00000 - 0000"
                />
              </div>

              <InputComponent
                id="email"
                name="email"
                type="email"
                label="E-mail*"
                placeholder="Digite seu e-mail aqui"
              />
            </div>

            <TextAreaComponent
              label="Mensagem"
              placeholder="Digite sua mensagem aqui"
              name="mensagem"
            />

            <InputFile
              id="arquivo"
              name="arquivo"
              type="file"
              label="Envie seu currículo"
              accept=".pdf"
              placeholder="Digite seu e-mail aqui"
            />

            <div className="actions">
              <ButtonComponent
                backgroundColor="var(--orange)"
                type="submit"
                text="Enviar"
                loading={loading}
              />
            </div>
          </Form>
        </Container>
      </S.Work>
    </Layout>
  );
}
