import { ButtonComponent } from "components/data/button";
import { Container } from "components/data/container";
import { NextImage } from "components/data/NextImage";
import Link from "next/link";

import * as S from "./styles";

export function FooterComponent() {
  return (
    <S.Footer>
      <Container>
        <div className="top">
          <a
            href="#header"
            className="scroll-top"
            aria-label="Scroll topo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <g>
                <g>
                  <g>
                    <path d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24z" />
                  </g>
                  <g transform="rotate(-180 24 24)">
                    <path
                      fill="#d8e2cf"
                      d="M30.492 26.788a.919.919 0 0 0-1.294-.007l-4.282 4.268V14.786a.91.91 0 0 0-.914-.907.91.91 0 0 0-.914.907v16.263l-4.282-4.275a.925.925 0 0 0-1.294.007.91.91 0 0 0 .007 1.287l5.836 5.793c.085.078.176.141.289.19a.916.916 0 0 0 .991-.19l5.836-5.793a.896.896 0 0 0 .02-1.28z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>

          <div className="logo" >
            <NextImage
              src="/images/logo-footer.webp"
              alt="Logo Dr.José"
              layout="fill"
            />
          </div>

          <div className="actions" >
            <nav>
              <Link href={"#sobre"} passHref>
                <a href="replaced" className="link-1-regular-europa">
                  Sobre mim
                </a>
              </Link>

              <Link href={"#tratamentos"} passHref>
                <a href="replaced" className="link-1-regular-europa">
                  Tratamentos
                </a>
              </Link>

              <Link href={"#onde-atendo"} passHref>
                <a href="replaced" className="link-1-regular-europa">
                  Onde atendo
                </a>
              </Link>

              <Link href={"#depoimentos"} passHref>
                <a href="replaced" className="link-1-regular-europa">
                  Depoimentos
                </a>
              </Link>
            </nav>

            <ButtonComponent
              className="bt yellow link-1-regular-europa"
              href="#contato"
              text="Entre em contato"
            />
          </div>
        </div>

        <div className="codie">
          <span className="paragraph-2-semibold-europa">Desenvolvido por</span>

          <div className="logo-codie">
            <NextImage
              src="/images/logo-codie.webp"
              alt="Logo codie"
              layout="fill"
            />
          </div>
        </div>
      </Container>
    </S.Footer>
  );
}
