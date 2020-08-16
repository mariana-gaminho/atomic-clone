import React, { FunctionComponent } from 'react';

import Card from '../../../components/Card';
import SectionTitle from '../../../components/SectionTitle';
import IdeaCloud from '../../../assets/icons/idea-cloud.png';
import Planets from '../../../assets/icons/planets.png';
import WorldFlag from '../../../assets/icons/world-flag.png';

import './SecondSection.scss';

const SecondSection: FunctionComponent = () => {
  return (
    <section className="second-section" id="section-2">
      <SectionTitle
        content={
          <p className="second-section-title">
            SOMOS EL BRAZO DERECHO <br />
            <span>DE LA TECNOLOGÍA</span>
          </p>
        }
      />
      <div
        className="d-flex justify-content-center align-items-center flex-wrap"
        style={{ width: '100%' }}
      >
        <Card
          title="EXPLORA"
          imageSrc={Planets}
          content={[
            <p key="Creacion">
              Innovación y <strong>creación tecnológica</strong>
            </p>,
            <p key="UXUI">
              <strong>UX / UI</strong>
            </p>,
            <p key="Innovacion">
              <strong>Innovación</strong>
            </p>,
          ]}
        />
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
          smallSize={false}
          style={{
            boxShadow: '0px 0px 21px 8px rgba(0,0,0,0.41)',
            zIndex: 2,
          }}
        />
        <Card
          title="CONQUISTA"
          imageSrc={WorldFlag}
          content={[
            <p key="Desarrollo">
              Desarrollo tecnológico<strong> a la medida</strong>
            </p>,
            <p key="Ciberseguridad">
              <strong>Ciberseguridad</strong>
            </p>,
            <p key="Nube">
              <strong>Servicios de la Nube</strong>
            </p>,
          ]}
        />
      </div>
    </section>
  );
};

export default SecondSection;
