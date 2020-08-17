import React, { FunctionComponent } from 'react';

import OrangeOne from '../../assets/icons/num-one-orange.png';
import GrayTwo from '../../assets/icons/num-two-gray.png';
import GrayThree from '../../assets/icons/num-three-gray.png';
import GrayFour from '../../assets/icons/num-four-gray.png';
import OrangeTransparentTwo from '../../assets/icons/num-two-orange-transparent.png';
import OrangeTransparentThree from '../../assets/icons/num-three-orange-transparent.png';
import OrangeTransparentFour from '../../assets/icons/num-four-orange-transparent.png';
import CheckMark from '../../assets/icons/checkmark-white.png';

import './ProgressBar.scss';

type ProgressBarProps = {
  currentStep: number;
};

const determineNumberIcon = (currentStep: number) => {
  switch (currentStep) {
    case 1:
      return {
        one: OrangeOne,
        two: GrayTwo,
        three: GrayThree,
        four: GrayFour,
      };
    case 2:
      return {
        one: CheckMark,
        two: OrangeTransparentTwo,
        three: GrayThree,
        four: GrayFour,
      };
    case 3:
      return {
        one: CheckMark,
        two: CheckMark,
        three: OrangeTransparentThree,
        four: GrayFour,
      };
    case 4:
      return {
        one: CheckMark,
        two: CheckMark,
        three: CheckMark,
        four: OrangeTransparentFour,
      };
  }
};

const ProgressBar: FunctionComponent<ProgressBarProps> = ({ currentStep }) => {
  const widthPercentage = currentStep * 25 - 12;
  //@ts-ignore
  const { one, two, three, four } = determineNumberIcon(currentStep);
  return (
    <div className="progress-bar">
      <div className="numbers d-flex justify-content-around">
        <div className="number d-flex justify-content-center">
          <img src={one} alt="one" />
        </div>
        <div className="number d-flex justify-content-center">
          <img src={two} alt="two" />
        </div>
        <div className="number d-flex justify-content-center">
          <img src={three} alt="three" />
        </div>
        <div className="number d-flex justify-content-center">
          <img src={four} alt="four" />
        </div>
      </div>
      <div className="bar-container d-flex">
        <div
          className="bar-data"
          style={{
            width: `${widthPercentage}%`,
            background: '#f34c26',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
