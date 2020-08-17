import React, { Component } from 'react';

import { StepProps } from '../../../types';
import AstronautMoon from '../../../assets/icons/astronaut-moon.png';
import NumberThree from '../../../assets/icons/num-three-orange@2x.png';
import FormTitle from '../../../components/FormTitle';
import ProgressBar from '../../../components/ProgressBar';
import FormButton from '../../../components/FormButton';

import './StepThree.scss';

class StepThree extends Component<StepProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { currentStep, verificationCode } = this.props;
    return (
      <div className="step-two row justify-content-center">
        <div
          className="col-lg-8 col-12 d-flex flex-wrap justify-content-start"
          style={{ height: '100%' }}
        >
          <ProgressBar currentStep={currentStep} />
          <div
            className="go-back"
            role="button"
            onClick={() => this.props.changeStep(currentStep, 'previous')}
            tabIndex={0}
          >
            <p>&lt;&nbsp;&nbsp;Regresar</p>
          </div>
          <FormTitle
            iconSrc={NumberThree}
            text={
              <p>
                CÓDIGO DE <span>VERIFICACIÓN</span>
              </p>
            }
          />
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <img src={AstronautMoon} alt="astronaut" className="astronaut" />
        </div>
        <FormButton
          text="Validar código"
          onClick={() => this.props.changeStep(currentStep, 'next')}
          // disabled={
          //   !verificationCode || verificationCode.toString().length < 6
          // }
        />
      </div>
    );
  }
}

export default StepThree;
