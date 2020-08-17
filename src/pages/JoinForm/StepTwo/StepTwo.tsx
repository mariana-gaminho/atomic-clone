import React, { FunctionComponent } from 'react';

import { StepProps } from '../../../types';
import './StepTwo.scss';

const StepTwo: FunctionComponent<StepProps> = () => {
  return (
    <div className="step-two">
      <p>Im step Two</p>
    </div>
  );
};

export default StepTwo;
