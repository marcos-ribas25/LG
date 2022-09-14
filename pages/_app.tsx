import Head from "next/head";
import { AppProps } from "next/app";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, {
  Virtual,
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
} from "swiper";

import "../styles/reset.css";
import "../styles/fonts.css";

import { GlobalStyle } from "../styles/global";
import { useEffect } from "react";

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, FreeMode, Virtual]);

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Head>
        <title>Dr.José Neto</title>
        <meta name="description" content="Doutor José neto" />
        <meta itemProp="description" content="Doutor José neto" />
        <meta name="twitter:description" content="Doutor José neto" />
        <meta name="og:description" content="Doutor José neto" />
        <meta property="og:title" content="Dr.José Neto" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://drjoseneto.vercel.app/" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="content-language" content="pt-br" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content="Codie" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="language" content="portuguese, PT" />
        <meta name="location" content="Londrina, Paraná" />
        <meta name="keyboard-shortcuts-preference" content="all" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="referrer" content="origin" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content="Codie" />
        <meta name="rating" content="general" />
        <link rel="stylesheet" href="https://use.typekit.net/ucm7zit.css" style={{display:"swap"}}/>
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
};

export default App;
