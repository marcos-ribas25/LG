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
          <div className="logo">
            <NextImage
              src="/images/logo-footer.webp"
              layout="fill"
              alt="logo footer"
            />
          </div>

          <div className="links">
            <h4 className="title-4-bold tk-poppins">Mapa do site</h4>

            <Link href={"/"} passHref>
              <a className="link-3-regular tk-poppins link" href="replaced">
                início
              </a>
            </Link>

            <Link href={"/sobre"} passHref>
              <a className="link-3-regular tk-poppins link" href="replaced">
                sobre nós
              </a>
            </Link>

            <Link href={"/trabalhe"} passHref>
              <a className="link-3-regular tk-poppins link" href="replaced">
                trabalhe conosco
              </a>
            </Link>
          </div>

          <div className="links services hide-mobile">
            <h4 className="title-4-bold tk-poppins">Serviços</h4>

            <div className="grid-services">
              <Link href={"/"} passHref>
                <a className="link-3-regular tk-poppins link" href="replaced">
                  limpeza
                </a>
              </Link>

              <Link href={"/"} passHref>
                <a className="link-3-regular tk-poppins link" href="replaced">
                  segurança
                </a>
              </Link>

              <Link href={"/"} passHref>
                <a className="link-3-regular tk-poppins link" href="replaced">
                  recepção
                </a>
              </Link>

              <Link href={"/"} passHref>
                <a className="link-3-regular tk-poppins link" href="replaced">
                  motorista
                </a>
              </Link>

              <Link href={"/"} passHref>
                <a className="link-3-regular tk-poppins link" href="replaced">
                  copeiro
                </a>
              </Link>

              <Link href={"/"} passHref>
                <a className="link-3-regular tk-poppins link" href="replaced">
                  reformas
                </a>
              </Link>

              <Link href={"/"} passHref>
                <a className="link-3-regular tk-poppins link" href="replaced">
                  motorista
                </a>
              </Link>

              <Link href={"/"} passHref>
                <a className="link-3-regular tk-poppins link" href="replaced">
                  copeiro
                </a>
              </Link>

              <Link href={"/"} passHref>
                <a className="link-3-regular tk-poppins link" href="replaced">
                  reformas
                </a>
              </Link>
            </div>
          </div>

          <div className="links">
          <h4 className="title-4-bold tk-poppins">Contato</h4>

            <a href="" className="link-3-regular tk-poppins link">
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
              (43) 9 9999-9999
            </a>

            <a href="" className="link-3-regular tk-poppins link">
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
              Londrina - PR
            </a>

            <a href="" className="link-3-regular tk-poppins link">
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
              contato@lgadmin.com.br
            </a>
          </div>
        </div>

        <div className="codie">
          <span className="paragraph-2-semibold tk-poppins">Desenvolvido por</span>

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
