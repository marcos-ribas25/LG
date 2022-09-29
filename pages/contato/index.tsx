import Head from "next/head";
import { useRouter } from "next/router";

import { Layout } from "components/layout";

import { Contact } from "components/layout/sections/home/contact";

export default function ContactPage() {
  const router = useRouter()
  
  return (
    <>
      <Head>
        <title>Contato</title>
        <link rel="canonical" href={router.pathname} />
        <meta property="og:title" content="Contato" />
        <meta name="og:description" content="Contato" />
        <meta name="description" content="Contato" />
        <meta itemProp="description" content="Contato" />
        <meta name="twitter:description" content="Contato" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
      </Head>

      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
