import React, { FunctionComponent } from 'react';

import SectionTitle from '../../../components/SectionTitle';
import './ThirdSection.scss';

const ThirdSection: FunctionComponent = () => {
  return (
    <section className="third-section">
      <SectionTitle
        content={
          <p>
            ¡TE ENCANTARÁ
            <br></br>
            <span>TRABAJAR CON NOSOTROS!</span>
          </p>
        }
      />
    </section>
  );
};

export default ThirdSection;
