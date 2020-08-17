import React, { FunctionComponent } from 'react';

import './FormTitle.scss';

type FormTitleProps = {
  text: any;
  iconSrc: string;
};

const FormTitle: FunctionComponent<FormTitleProps> = ({ text, iconSrc }) => {
  return (
    <div className="form-title d-flex align-items-center">
      <img src={iconSrc} alt="step-number" />
      {text}
    </div>
  );
};

export default FormTitle;
