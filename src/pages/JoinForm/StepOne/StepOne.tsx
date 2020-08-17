import React, { Component } from 'react';

import { StepProps } from '../../../types';
import NumberOne from '../../../assets/icons/num-one-orange@2x.png';
import AstronautEating from '../../../assets/icons/astronaut-food.png';
import FormTitle from '../../../components/FormTitle';
import ProgressBar from '../../../components/ProgressBar';
import FormButton from '../../../components/FormButton';
import InputWithLabel from '../../../components/InputWithLabel';

import './StepOne.scss';

class StepOne extends Component<StepProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { currentStep, firstName, lastName, errorMessage } = this.props;
    return (
      <div className="step-one row justify-content-center">
        <div className="col-lg-8 col-12 d-flex flex-wrap justify-content-start">
          <ProgressBar currentStep={currentStep} />
          <FormTitle
            iconSrc={NumberOne}
            text={
              <p>
                TE QUEREMOS <span>CONOCER</span>
              </p>
            }
          />
          <p className="legend">
            Queremos saber que eres tú, por favor ingresa los siguientes datos:
          </p>
          <div className="inputs">
            <InputWithLabel
              name="firstName"
              onChange={(e) => this.props.handleInputChange(e)}
              onBlur={(e) => this.props.handleInputValidation(e)}
              label="Nombre (s)"
              value={firstName}
              error={errorMessage}
            />
            <InputWithLabel
              name="lastName"
              onChange={(e) => this.props.handleInputChange(e)}
              label="Apellidos"
              value={lastName}
            />
          </div>
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <img src={AstronautEating} alt="astronaut" className="astronaut" />
        </div>
        <FormButton
          text="Enviar"
          onClick={() => this.props.changeStep(currentStep, 'next')}
          disabled={firstName.length < 5 || lastName === ''}
        />
      </div>
    );
  }
}

export default StepOne;
