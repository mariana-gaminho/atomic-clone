import React, { FunctionComponent } from 'react';

import JoinButton from '../../../components/JoinButton';
import Astronaut from '../../../assets/icons/atomic-astronaut.png';
import ChevronDown from '../../../assets/icons/chevron-down.png';
import AtomicLogo from '../../../assets/icons/atomic-labs-logo.png';

import './FirstSection.scss';

const FirstSection: FunctionComponent = () => {
  return (
    <section className="first-section row">
      <div className="logo d-flex align-content-left">
        <img src={AtomicLogo} alt="atomic-logo" />
      </div>
      <div className="join-atomic d-flex col-12 flex-wrap">
        <div className="col-lg-6 col-12 justify-content-right">
          <img src={Astronaut} alt="atomic-astronaut" />
        </div>
        <div className="col-lg-6 col-12 justify-content-center">
          <p className="main-text">
            Desarrolla todo <br />
            <span>tu POTENCIAL</span>
            <br /> dentro del equipo <br />
            <span>ATOMIC</span>
            LABS
          </p>
          <JoinButton />
        </div>
      </div>
      <div className="know-more col-12">
        <a href="#section-2">
          <img src={ChevronDown} alt="know-more" />
        </a>
        <p>Quiero saber más</p>
      </div>
    </section>
  );
};

export default FirstSection;
