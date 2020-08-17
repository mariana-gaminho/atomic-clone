import React, { FunctionComponent } from 'react';

import { StepProps } from '../../../types';

import './StepThree.scss';

const StepThree: FunctionComponent<StepProps> = () => {
  return (
    <div className="step-three">
      <p>Im step Three</p>
    </div>
  );
};

export default StepThree;
