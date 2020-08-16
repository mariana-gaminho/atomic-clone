import React, { FunctionComponent } from 'react';

import { ReactComponent as Arrow } from '../../../assets/icons/arrow-right.svg';
import Team from '../../../assets/icons/atomic-team.png';
import SectionTitle from '../../../components/SectionTitle';
import JoinButton from '../../../components/JoinButton';

import './ThirdSection.scss';

const ThirdSection: FunctionComponent = () => {
  return (
    <section className="third-section row justify-content-center">
      <SectionTitle
        content={
          <p>
            ¡TE ENCANTARÁ
            <br></br>
            <span>TRABAJAR CON NOSOTROS!</span>
          </p>
        }
      />
      <img src={Team} alt="atomic-team" />
      <div className="steps d-flex flex-wrap justify-content-around align-items-center">
        <p>Contratación remota</p>
        <Arrow />
        <p>Entrevista con el área de RH</p>
        <Arrow />
        <p>Prueba práctica</p>
        <Arrow />
        <p>Entrevista técnica</p>
      </div>
      <div className="d-flex justify-content-center third-section-join-button">
        <JoinButton />
      </div>
    </section>
  );
};

export default ThirdSection;
