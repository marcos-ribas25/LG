import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { LinksNavigation, LinksServicos } from "./navigation";

import { Container, ButtonComponent } from "components/data";

import * as S from "./styles";

export function HeaderComponent() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMenu(false);
  }, [router]);

  return (
    <S.Header id="header">
      <div className={`menu-mobile ${menu ? "active" : ""}`}>
        <div className="filter" onClick={() => setMenu(false)}></div>

        <div className="menu">
          <div
            className="close title-5-bold tk-poppins"
            onClick={() => setMenu(false)}
          >
            X
          </div>

          <nav className="link-1-regular">
            <h3 className="title-3-bold tk-noka">Mapa do site</h3>

            {LinksNavigation.map((link) => (
              <Link href={link.url} passHref>
                <a className="link-1-medium tk-noka">{link.titulo}</a>
              </Link>
            ))}

            <div className="border"></div>

            <h3 className="title-3-bold tk-noka">Serviços</h3>

            {LinksServicos.map((link) => (
              <Link href={link.url} passHref>
                <a className="link-1-medium tk-noka">{link.titulo}</a>
              </Link>
            ))}

            <div className="border"></div>

            <div className="actions-redes">
              <a href="#" target={"_blank"} className="link-redes">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g>
                    <g>
                      <path d="M19.43 14.133l-4.376-1.875a.937.937 0 0 0-1.093.27l-1.938 2.367a14.48 14.48 0 0 1-6.921-6.922l2.367-1.937a.935.935 0 0 0 .27-1.094L5.862.567A.944.944 0 0 0 4.79.024L.727.962A.938.938 0 0 0 0 1.875C0 11.895 8.121 20 18.125 20a.938.938 0 0 0 .914-.726l.938-4.063a.949.949 0 0 0-.547-1.078z" />
                    </g>
                  </g>
                </svg>
              </a>

              <a href="#" target={"_blank"} className="link-redes">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="20"
                  viewBox="0 0 15 20"
                >
                  <g>
                    <g>
                      <path d="M4.375 7.5a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0zm3.896 12.096C13.946 11.368 15 10.524 15 7.5a7.5 7.5 0 1 0-15 0c0 3.024 1.054 3.868 6.73 12.096a.938.938 0 0 0 1.54 0z" />
                    </g>
                  </g>
                </svg>
              </a>

              <a href="#" target={"_blank"} className="link-redes">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <g>
                    <g>
                      <path d="M18 4l-8 5-8-5V2l8 5 8-5zm0-4H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>

      <Container>
        <div className="box-left">
          <div className="logo-header">
            <img src="/images/logo-header.webp" alt="Logo header" />
            {/* <NextImage
              src="/images/logo-header.webp"
              alt="Logo header"
              layout="fill"
            /> */}
          </div>
        </div>

        <div className="box-right">
          <nav className="link-1-regular">
            {LinksNavigation.map((link) => (
              <Link href={link.url} passHref>
                <a className="link-1-medium tk-noka">{link.titulo}</a>
              </Link>
            ))}
          </nav>

          <ButtonComponent
            backgroundColor="var(--blue)"
            className="bt link-1-bold tk-poppins"
            href="#contato"
            text="Entre em contato"
          />
        </div>

        <div className="block-bar" onClick={() => setMenu(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </S.Header>
  );
}
