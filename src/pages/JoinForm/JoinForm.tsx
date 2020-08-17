import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AtomicLogo from '../../assets/icons/atomic-labs-logo.png';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

import './JoinForm.scss';

type FormState = {
  currentStep: number;
  firstName: string;
  lastName: string;
  phoneNumber: number | undefined;
  verificationCode: number | undefined;
  errorMessage: string | undefined;
};

class JoinForm extends Component<{}, FormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentStep: 1,
      firstName: '',
      lastName: '',
      phoneNumber: undefined,
      verificationCode: undefined,
      errorMessage: undefined,
    };
    this.switchStep = this.switchStep.bind(this);
    this.changeStep = this.changeStep.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputValidation = this.handleInputValidation.bind(this);
  }

  changeStep(currentStep: number, action: string) {
    if (action === 'next') {
      this.setState({
        currentStep: currentStep + 1,
        errorMessage: undefined,
      });
    } else {
      this.setState({
        currentStep: currentStep - 1,
        errorMessage: undefined,
      });
    }
  }

  handleInputChange(e: any) {
    // @ts-ignore
    this.setState({ [e.target.name]: e.target.value });
  }

  handleInputValidation(e: any) {
    if (e.target.name === 'firstName' && e.target.value.length < 5) {
      this.setState({
        errorMessage: 'El nombre deberá tener mínimo 5 caracteres',
      });
    } else this.setState({ errorMessage: undefined });
  }

  switchStep() {
    switch (this.state.currentStep) {
      case 1:
        return (
          <StepOne
            changeStep={this.changeStep}
            handleInputChange={this.handleInputChange}
            handleInputValidation={this.handleInputValidation}
            {...this.state}
          />
        );
      case 2:
        return (
          <StepTwo
            changeStep={this.changeStep}
            handleInputChange={this.handleInputChange}
            handleInputValidation={this.handleInputValidation}
            {...this.state}
          />
        );
      case 3:
        return (
          <StepThree
            changeStep={this.changeStep}
            handleInputChange={this.handleInputChange}
            handleInputValidation={this.handleInputValidation}
            {...this.state}
          />
        );
      case 4:
        return (
          <StepFour
            changeStep={this.changeStep}
            handleInputChange={this.handleInputChange}
            handleInputValidation={this.handleInputValidation}
            {...this.state}
          />
        );
    }
  }

  render() {
    return (
      <div className="join-form">
        <div className="custom-container">
          <div className="logo d-flex align-content-left">
            <Link to="/">
              <img src={AtomicLogo} alt="atomic-logo" />
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            {this.switchStep()}
          </div>
        </div>
      </div>
    );
  }
}

export default JoinForm;
