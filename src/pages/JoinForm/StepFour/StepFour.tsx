import React, { Component } from 'react';

import { StepProps } from '../../../types';
import AstronautRubik from '../../../assets/icons/astronaut-rubik.png';
import NumberFour from '../../../assets/icons/num-four-orange@2x.png';
import FormTitle from '../../../components/FormTitle';
import ProgressBar from '../../../components/ProgressBar';
import FormButton from '../../../components/FormButton';

import './StepFour.scss';

class StepFour extends Component<StepProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { currentStep } = this.props;
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
            iconSrc={NumberFour}
            text={
              <p>
                TÉRMINOS Y <span>CONDICIONES</span>
              </p>
            }
          />
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <img
            src={AstronautRubik}
            alt="astronaut"
            className="astronaut"
            style={{ marginTop: 10 }}
          />
        </div>
        <FormButton
          text="Enviar"
          onClick={() => this.props.changeStep(currentStep, 'next')}
          // disabled={
          //   !verificationCode || verificationCode.toString().length < 6
          // }
        />
      </div>
    );
  }
}

export default StepFour;
