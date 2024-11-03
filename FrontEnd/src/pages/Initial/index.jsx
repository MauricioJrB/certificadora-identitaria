import { useInView } from 'react-intersection-observer';
import Transform from "../../assets/image/transform.svg";
import Objective from "../../assets/image/object.svg";
import Menstrual from "../../assets/image/menstrual.svg";

import { Card } from "../../components/Card";
import { InvertionCard } from "../../components/InvertionCard";
import { Footer } from "../../components/Footer";

import "./styles.css";

export const Initial = () => {
  const { ref: card1Ref, inView: card1InView } = useInView({ triggerOnce: true });
  const { ref: card2Ref, inView: card2InView } = useInView({ triggerOnce: true });
  const { ref: card3Ref, inView: card3InView } = useInView({ triggerOnce: true });

  return (
    <>
      <div ref={card1Ref} className={`fade-in ${card1InView ? 'visible' : ''}`}>
        <Card
          title="Dignidade é um direito. Doe absorventes, transforme vidas!"
          text="A pobreza menstrual afeta milhões de mulheres e meninas em todo o mundo, limitando seu acesso à educação, ao trabalho e a uma vida plena. Com a sua doação, podemos transformar essa realidade. Ajude a garantir dignidade e saúde para quem precisa!"
          sourceImg={Transform}
          buttonText={"Doar"}
        />
      </div>

      <div ref={card2Ref} className={`fade-in ${card2InView ? 'visible' : ''}`}>
        <InvertionCard
          title="Quem somos?"
          text="O projeto Bons Fluidos da UTFPR-CP tem como objetivo levar dignidade para meninas que têm o direito à educação prejudicado por menstruarem."
          sourceImg={Menstrual}
        />
      </div>

      <div ref={card3Ref} className={`fade-in ${card3InView ? 'visible' : ''}`}>
        <Card
          title="Nossos objetivos"
          text="Diálogo sobre menstruação
              Naturalizar a menstruação e seu clico
              Combater a pobreza menstrual
              Promover a saúde e o bem-estar
              Reduzir o estigma e aumentar a conscientização"
          sourceImg={Objective}
        />
      </div>

      <Footer />
    </>
  );
};
