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
    </div>
  );
};

export default LandingPage;
