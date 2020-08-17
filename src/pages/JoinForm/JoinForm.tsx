import React, { Component } from 'react';

import AtomicLogo from '../../assets/icons/atomic-labs-logo.png';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

import './JoinForm.scss';
import { Link } from 'react-router-dom';

type FormState = {
  currentStep: number;
  firstName: string;
  lastName: string;
  phoneNumber: number | undefined;
  verificationCode: number | undefined;
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
    };
    this.switchStep = this.switchStep.bind(this);
    this.changeStep = this.changeStep.bind(this);
  }

  switchStep(changeStep: Function) {
    switch (this.state.currentStep) {
      case 1:
        return <StepOne changeStep={changeStep} {...this.state} />;
      case 2:
        return <StepTwo changeStep={changeStep} {...this.state} />;
      case 3:
        return <StepThree changeStep={changeStep} {...this.state} />;
      case 4:
        return <StepFour changeStep={changeStep} {...this.state} />;
    }
  }

  changeStep(currentStep: number, action: string) {
    if (action === 'next') {
      this.setState({
        currentStep: currentStep + 1,
      });
    } else {
      this.setState({
        currentStep: currentStep - 1,
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="join-form">
        <div className="custom-container">
          <div className="logo d-flex align-content-left">
            <Link to="/">
              <img src={AtomicLogo} alt="atomic-logo" />
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            {this.switchStep(this.changeStep)}
          </div>
        </div>
      </div>
    );
  }
}

export default JoinForm;
