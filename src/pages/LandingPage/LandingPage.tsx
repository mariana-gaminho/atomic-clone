import React from 'react';

import Astronaut from '../../assets/atomic-astronaut.png';
import ChevronDown from '../../assets/chevron-down.png';
import AtomicLogo from '../../assets/atomic-labs-logo.png';

import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page container-fluid">
      <section className="section-1 row">
        <div className="logo d-flex align-content-left">
          <img src={AtomicLogo} alt="atomic-logo" width="12%" />
        </div>
        <div className="join-atomic d-flex col-12 flex-wrap">
          <div className="col-lg-6 col-12 justify-content-right">
            <img src={Astronaut} alt="atomic-astronaut" />
          </div>
          <div className="col-lg-6 col-12 justify-content-center">
            <p>
              Desarrolla todo <br />
              <span>tu POTENCIAL</span>
              <br /> dentro del equipo <br />
              <span>ATOMIC</span>
              LABS
            </p>
            <button className="join-button">¡Quiero ser parte!</button>
          </div>
        </div>
        <div className="know-more col-12">
          <a href="#section-2">
            <img src={ChevronDown} alt="know-more" />
          </a>
          <p>Quiero saber más</p>
        </div>
      </section>
      <section className="section-2" id="section-2"></section>
      <section className="section-3"></section>
      <section className="section-4"></section>
      <section className="section-5"></section>
    </div>
  );
};

export default LandingPage;
