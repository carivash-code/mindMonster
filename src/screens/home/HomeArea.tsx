import { ImageContainRight } from "../../components/ui/images/ImageContainRight";
import { TitleLgAndDescription } from "../../components/ui/titles/TitleLgAndDescription";

import ImageLeft from "../../assets/img/IMG-Tentaculo.png";
import { ColNumberAndCircle } from "../../components/sections/ColNumberAndCircle";

export const HomeArea = () => {
  const description =
    "Imprimimos un sello único a cada propuesta creativa. Nos emocionamos contigo y te acompañamos hasta ver tus ideas realizadas";
  return (
    <main className="screen-home position-relative">
      <ImageContainRight image={ImageLeft} />
      <div className="container-custom position-relative z-2">
        <TitleLgAndDescription
          title="Bienvenid@s a"
          titleStrong="MIND MONSTER LAB."
          subTitle="Nosotros diseñamos"
          subTitleStrong="soluciones para punto de venta."
          description={description}
        />
        <ColNumberAndCircle
          number1={12}
          number2={35}
          textNumber1="ANOS DE EXPERIENCIA"
          textNumber2="CASOS DE ÉXITO"
          circleText1="PORTAFOLIO"
          circleText2="LATEST PROJECTS"
          circleText3="PORTAFOLIO"
          circleText4="LATEST PROJECTS"
        />
      </div>
    </main>
  );
};
