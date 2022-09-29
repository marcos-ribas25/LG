import Head from "next/head";
import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { ButtonComponent } from "components/data";

import * as S from "styles/pages/sucesso";

export default function SucessPage() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Sucesso {router.query.name}</title>
        <link rel="canonical" href={router.pathname} />
        <meta property="og:title" content="Sucesso" />
        <meta name="og:description" content="Sucesso" />
        <meta name="description" content="Sucesso" />
        <meta itemProp="description" content="Sucesso" />
        <meta name="twitter:description" content="Sucesso" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
      </Head>

      <S.Sucesso>
        <div className="box-sucesso">
          <h3 className="title-3-bold tk-noka uppercase">Obrigado</h3>

          <p className="paragraph-2-regular tk-poppins">
            {router.query.name} seu contato foi enviado com sucesso
          </p>

          <ButtonComponent
            href="/"
            text="Voltar para página inicial"
            backgroundColor="var(--orange)"
          />
        </div>
      </S.Sucesso>
    </Layout>
  );
}
