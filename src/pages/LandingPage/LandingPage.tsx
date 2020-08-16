import React, { FunctionComponent } from 'react';

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

import './LandingPage.scss';

const LandingPage: FunctionComponent = () => {
  return (
    <div className="landing-page container-fluid">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <section
        className="row"
        style={{ height: 50, background: '#072348' }}
      ></section>
      <section className="section-4"></section>
      <section className="section-5"></section>
      <footer className="social-media">
        <p>2020 Atomic Labs. Todos los derechos reservados.</p>
        <p>Aviso de privacidad</p>
        <img src="" alt="" />
        <img src="" alt="" />
      </footer>
    </div>
  );
};

export default LandingPage;
