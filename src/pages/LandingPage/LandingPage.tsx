import React from 'react';

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page container-fluid">
      <FirstSection />
      <SecondSection />
      <section className="section-3"></section>
      <section className="section-4"></section>
      <section className="section-5"></section>
    </div>
  );
};

export default LandingPage;
