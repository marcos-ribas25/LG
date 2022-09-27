/* Next/React */
import { useEffect, useState } from "react";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/* Components */

/* Styles */
import * as S from "./styles";
import { Container } from "components/data/container";
import { ButtonComponent } from "components/data/button";
import { NextImage } from "components/data/NextImage";

export function HeaderComponent() {
  const [menu, setMenu] = useState(false);
  const [dropdown, setdropdown] = useState(false);
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
            className="close title-5-bold-europa"
            onClick={() => setMenu(false)}
          >
            X
          </div>

          <nav className="link-1-regular">
            <Link href={"#sobre"} passHref>
              <a href="replaced" className="link-1-bold-europa">
                Sobre mim
              </a>
            </Link>

            <Link href={"#tratamentos"} passHref>
              <a href="replaced" className="link-1-bold-europa">
                Tratamentos
              </a>
            </Link>

            <Link href={"#atendimento"} passHref>
              <a href="replaced" className="link-1-bold-europa">
                Onde atendo
              </a>
            </Link>

            <Link href={"#depoimentos"} passHref>
              <a href="replaced" className="link-1-bold-europa">
                Depoimentos
              </a>
            </Link>
          </nav>

          <div className="actions-redes">
            <a href="#" className="link-redes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g>
                  <g>
                    <path
                      fill="#002749"
                      d="M18.199 10c0-1.455.12-4.578-.402-5.894a3.374 3.374 0 0 0-1.9-1.9c-1.313-.518-4.44-.402-5.895-.402-1.454 0-4.578-.12-5.894.401a3.374 3.374 0 0 0-1.9 1.9C1.69 5.419 1.805 8.546 1.805 10c0 1.454-.12 4.578.401 5.894a3.374 3.374 0 0 0 1.901 1.9c1.312.518 4.44.402 5.894.402 1.455 0 4.578.12 5.894-.401a3.374 3.374 0 0 0 1.901-1.901c.522-1.312.402-4.44.402-5.894zm1.73 4.123c-.08 1.601-.445 3.02-1.614 4.19-1.17 1.173-2.588 1.539-4.19 1.614-1.651.094-6.6.094-8.25 0-1.602-.08-3.016-.446-4.19-1.615C.512 17.143.146 15.724.07 14.122c-.093-1.65-.093-6.598 0-8.25.08-1.601.442-3.02 1.615-4.189C2.86.514 4.278.148 5.875.073c1.65-.094 6.599-.094 8.25 0 1.602.08 3.02.446 4.19 1.615 1.173 1.169 1.539 2.587 1.615 4.19.093 1.65.093 6.594 0 8.245zm-3.395-9.46c0 .665-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zM13.335 10a3.336 3.336 0 0 0-3.333-3.333A3.336 3.336 0 0 0 6.67 10c0 1.838 1.5 3.333 3.333 3.333A3.339 3.339 0 0 0 13.335 10zm1.794 0a5.118 5.118 0 0 1-5.127 5.126A5.118 5.118 0 0 1 4.876 10a5.118 5.118 0 0 1 5.126-5.127A5.118 5.118 0 0 1 15.13 10z"
                    />
                  </g>
                </g>
              </svg>
            </a>

            <a href="#" className="link-redes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="16"
                viewBox="0 0 23 16"
              >
                <g>
                  <g>
                    <g>
                      <path
                        fill="none"
                        stroke="#002749"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="20"
                        strokeWidth="2"
                        d="M20.83 3.173a2.527 2.527 0 0 0-1.763-1.818C17.504.973 11.25.973 11.25.973v0s-6.255 0-7.818.418A2.527 2.527 0 0 0 1.668 3.21a26.363 26.363 0 0 0-.418 4.81c-.01 1.624.13 3.246.418 4.844.242.85.911 1.512 1.764 1.746 1.563.418 7.818.418 7.818.418v0s6.254 0 7.817-.418a2.527 2.527 0 0 0 1.764-1.818c.284-1.575.424-3.173.418-4.773.01-1.624-.13-3.246-.418-4.845z"
                      />
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#002749"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="20"
                        strokeWidth="2"
                        d="M8.475 11.663v0L14.9 8.01v0L8.475 4.357v0z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Container>
        <div className="box-left">
          <div className="logo-header">
            <img
              src="/images/logo-header.webp"
              alt="Logo header"
            />
            {/* <NextImage
              src="/images/logo-header.webp"
              alt="Logo header"
              layout="fill"
            /> */}
          </div>
        </div>

        <div className="box-right">
          <nav>
            <Link href={"/"} passHref>
              <a href="replaced" className="link-1-medium tk-noka">
                início
              </a>
            </Link>

            <Link href={"/sobre"} passHref>
              <a href="replaced" className="link-1-medium tk-noka">
                sobre nós
              </a>
            </Link>

            <Link href={"/servicos"} passHref>
              <a href="replaced" className="link-1-medium tk-noka">
                nossos serviços
              </a>
            </Link>

            <Link href={"#depoimentos"} passHref>
              <a href="replaced" className="link-1-medium tk-noka">
                trabalhe conosco
              </a>
            </Link>
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
