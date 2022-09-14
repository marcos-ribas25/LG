import { ButtonComponent } from "components/data/button";
import { Container } from "components/data/container";
import * as S from "./styles";

export function Parallax() {
  return (
    <S.Parallax>
      <Container>
        <div
          className="content"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          data-aos-easing="ease-out"
        >
          <h2 className="title-2-bold tk-noka uppercase">
            Terceirize mão de obra e reduza até 30% dos custos da sua empresa
          </h2>

          <ButtonComponent
            className="bt blue link-3-bold tk-poppins"
            href="/contato"
            text="Entre em contato"
          />
        </div>
      </Container>
    </S.Parallax>
  );
}
