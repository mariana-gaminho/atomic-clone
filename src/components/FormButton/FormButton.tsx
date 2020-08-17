import React from 'react';

import './FormButton.scss';

type Props = {
  text: string;
  onClick(e?: any): void;
  disabled?: boolean;
};

const FormButton = ({ text, onClick, disabled }: Props) => (
  <button
    className={`form-button ${disabled ? 'disabled' : null}`}
    onClick={onClick}
    style={{
      opacity: disabled ? 0.3 : 1,
      outline: 'none',
    }}
    disabled={disabled}
  >
    {text}
  </button>
);

export default FormButton;
