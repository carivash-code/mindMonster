import { ImageContainRight } from "../../components/ui/images/ImageContainRight";
import { TitleLgAndDescription } from "../../components/ui/titles/TitleLgAndDescription";

import ImageLeft from "../../assets/img/IMG-Tentaculo.png";
import { ColNumberAndCircle } from "../../components/sections/ColNumberAndCircle";
import {works} from '../../constants/index';
import {numbers} from '../../constants/numbers'

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
          texts={works}
          subTitle="Nosotros diseñamos"
          description={description}
        />
        <ColNumberAndCircle
          numbersData={numbers}
          circleText1="PORTAFOLIO"
          circleText2="LATEST PROJECTS"
          circleText3="PORTAFOLIO"
          circleText4="LATEST PROJECTS"
        />
      </div>
    </main>
  );
};
