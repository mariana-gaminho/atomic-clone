import React, { Component } from 'react';

import { StepProps } from '../../../types';
import NumberOne from '../../../assets/icons/num-one-orange@2x.png';
import AstronautEating from '../../../assets/icons/astronaut-food.png';
import FormTitle from '../../../components/FormTitle';
import ProgressBar from '../../../components/ProgressBar';
import './StepOne.scss';

class StepOne extends Component<StepProps> {
  constructor(props: any) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: any) {
    // @ts-ignore
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { currentStep } = this.props;
    return (
      <div className="step-one row">
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
          <input
            type="text"
            name="firstName"
            onChange={(e) => this.handleInputChange(e)}
          />
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <img src={AstronautEating} alt="astronaut" className="astronaut" />
        </div>
        <button onClick={() => this.props.changeStep(currentStep, 'next')}>
          Enviar
        </button>
      </div>
    );
  }
}

export default StepOne;
