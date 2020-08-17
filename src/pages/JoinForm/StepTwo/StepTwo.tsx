import React, { Component } from 'react';

import { StepProps } from '../../../types';
import AstronautMoon from '../../../assets/icons/astronaut-moon.png';
import NumberTwo from '../../../assets/icons/num-two-orange@2x.png';
import FormTitle from '../../../components/FormTitle';
import ProgressBar from '../../../components/ProgressBar';
import FormButton from '../../../components/FormButton';
import InputWithLabel from '../../../components/InputWithLabel';

import './StepTwo.scss';

class StepTwo extends Component<StepProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { currentStep, phoneNumber } = this.props;
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
            iconSrc={NumberTwo}
            text={
              <p>
                VALIDA TU <span>CELULAR</span>
              </p>
            }
          />
          <p className="legend">
            Necesitamos validar tu número para continuar. <br />
            <span>
              Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
            </span>
          </p>
          <div className="input">
            <InputWithLabel
              name="phoneNumber"
              onChange={(e) => this.props.handleInputChange(e)}
              label="Número de Celular"
              value={phoneNumber}
            />
          </div>
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <img src={AstronautMoon} alt="astronaut" className="astronaut" />
        </div>
        <FormButton
          text="Continuar"
          onClick={() => this.props.changeStep(currentStep, 'next')}
          disabled={!phoneNumber || phoneNumber.toString().length < 10}
        />
      </div>
    );
  }
}

export default StepTwo;
