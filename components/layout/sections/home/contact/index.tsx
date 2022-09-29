import { useRef, useState } from "react";

import router from "next/router";

import { api } from "src/services/api";

import {
  Form,
  FormHandles,
  YupValidation,
  InputComponent,
  TextAreaComponent,
} from "components/inputs/core";
import { Container, ButtonComponent } from "components/data";

import * as S from "./styles";

interface SubmitProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit({ name, email, message, phone }: SubmitProps) {
    const Yup = await import("yup");

    try {
      setLoading(true);

      const phoneOnlyNumbers = phone?.replace(/[^0-9]/g, "");

      const schema = Yup.object().shape({
        name: Yup.string().required("Por favor, digite um nome"),
        email: Yup.string()
          .email("Email inválido")
          .required("Por favor, digite um email"),
        message: Yup.string().required("Por favor, digite uma mensagem"),
        phone: Yup.string()
          .required("Por favor, digite um número")
          .min(11, "Número inválido"),
      });

      await schema.validate(
        { name, email, message, phone: phoneOnlyNumbers },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      const response = await api.post("form", {
        name,
        email,
        message,
        phone: phoneOnlyNumbers,
      });

      if (response.status === 200) {
        router.push({
          pathname: "/contato/sucesso",
          query: { name },
        });

        setLoading(false);
      }
    } catch (err) {
      setLoading(false);

      YupValidation(Yup, err, formRef);
    }
  }

  return (
    <S.Contact>
      <Container>
        <div
          className="text"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          <h2 className="title-2-bold tk-noka uppercase">Entre em contato</h2>

          <a href="#" className="link link-1-regular tk-poppins">
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
            <span>(43) 9 9636-9930</span>
          </a>

          <div className="link base link-1-regular tk-poppins">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g>
                  <g>
                    <path d="M12.637 14.9l-4.089-3.446v-7.1h1.755v6.254l3.44 2.812zM10 0C4.476 0 0 4.476 0 10s4.476 10 10 10 10-4.476 10-10S15.524 0 10 0z" />
                  </g>
                </g>
              </svg>
            </i>

            <span>
              Segunda a sexta-feira
              <br /> (exceto feriados)
            </span>
          </div>

          <a href="#" className="link base link-1-regular tk-poppins">
            <i>
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
            </i>
            Av. Duque de Caxias, 1726 - Sala 707
            <br /> Vila Brasil, Londrina - PR, 86010-190
          </a>

          <a href="#" className="link link-1-regular tk-poppins">
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

          <a href="#" className="link link-1-regular tk-poppins">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g>
                <g>
                  <path d="M7 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm8.25-4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM5.878.06C4.812.11 4.088.277 3.45.525a4.897 4.897 0 0 0-1.772 1.153A4.88 4.88 0 0 0 .525 3.45C.277 4.088.11 4.812.06 5.878.01 6.944 0 7.283 0 10c0 2.717.013 3.056.06 4.122.05 1.065.217 1.791.465 2.428.25.667.644 1.272 1.153 1.772a4.89 4.89 0 0 0 1.772 1.153c.638.247 1.363.415 2.428.465 1.066.05 1.405.06 4.122.06 2.717 0 3.056-.013 4.122-.06 1.065-.05 1.791-.218 2.428-.465a4.915 4.915 0 0 0 1.772-1.153c.51-.5.903-1.104 1.153-1.772.247-.638.415-1.363.465-2.428.05-1.066.06-1.405.06-4.122 0-2.717-.013-3.056-.06-4.122-.05-1.065-.218-1.791-.465-2.428a4.908 4.908 0 0 0-1.153-1.772A4.876 4.876 0 0 0 16.55.525C15.912.277 15.187.11 14.122.06 13.056.01 12.717 0 10 0 7.283 0 6.944.013 5.878.06z" />
                </g>
              </g>
            </svg>
            @lgadmin
          </a>

          <a href="#" className="link link-1-regular tk-poppins">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g>
                <g>
                  <path d="M20.122 10.06A10.06 10.06 0 0 0 10.06 0 10.06 10.06 0 0 0 0 10.06c0 5.022 3.68 9.185 8.489 9.94v-7.03H5.933v-2.91H8.49V7.845c0-2.521 1.5-3.914 3.8-3.914 1.1 0 2.252.197 2.252.197V6.6h-1.269c-1.25 0-1.64.776-1.64 1.571v1.889h2.791l-.446 2.908h-2.344V20c4.81-.755 8.489-4.918 8.489-9.94z" />
                </g>
              </g>
            </svg>
            /lgadmin
          </a>

          <a href="#" className="link link-1-regular tk-poppins">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g>
                <g>
                  <path d="M17.156 17.143h-2.964V12.5c0-1.107-.022-2.531-1.54-2.531-1.545 0-1.781 1.205-1.781 2.45v4.724H7.906V7.598h2.844v1.304h.04c.398-.75 1.366-1.54 2.808-1.54 3 0 3.558 1.977 3.558 4.549zM4.563 6.295a1.72 1.72 0 0 1 0-3.438c.946 0 1.718.772 1.718 1.719 0 .95-.768 1.719-1.718 1.719zM3.08 17.143V7.598h2.97v9.545zM18.571 0H1.424C.638 0 0 .647 0 1.442v17.116C0 19.353.638 20 1.424 20h17.147c.786 0 1.429-.647 1.429-1.442V1.442C20 .647 19.357 0 18.571 0z" />
                </g>
              </g>
            </svg>
            /lgadmin
          </a>
        </div>

        <Form
          method="post"
          ref={formRef}
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          <InputComponent
            id="name"
            name="name"
            type="text"
            label="Nome completo*"
            placeholder="Digite seu nome aqui"
          />

          <div className="input-content phone">
            <label
              className="label-text paragraph-2-bold tk-poppins"
              htmlFor={"phone"}
            >
              Telefone*
            </label>

            <InputComponent
              id="phone"
              name="phone"
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

          <TextAreaComponent
            label="Mensagem"
            id="message"
            name="message"
            placeholder="O que deseja nos dizer?"
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
    </S.Contact>
  );
}
