import React, { FunctionComponent } from 'react';

import Card from '../../../components/Card';
import IdeaCloud from '../../../assets/idea-cloud.png';

import './SecondSection.scss';

const SecondSection: FunctionComponent = () => {
  return (
    <section className="second-section row" id="section-2">
      <div className="col-12 d-flex justify-content-center">
        <p className="second-section-title">
          SOMOS EL BRAZO DERECHO <br />
          <span>DE LA TECNOLOGÍA</span>
        </p>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <Card
          title="IMAGINA"
          imageSrc={IdeaCloud}
          backgroundColor="#f34c26"
          contentColor="#ffff"
          titleColor="#ffff"
          content={[
            <p key="Estrategia">
              <strong>Estrategia</strong> Digital
            </p>,
            <p key="BigData">
              Big Data & <strong>Analysis</strong>
            </p>,
            <p key="Consultora">
              <strong>Consultoría</strong> Tecnológica
            </p>,
            <p key="Reduccion">
              <strong>Reducción </strong>de Costos TI
            </p>,
          ]}
        />
      </div>
    </section>
  );
};

export default SecondSection;
