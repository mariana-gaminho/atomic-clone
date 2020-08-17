import React from 'react';

import './InputWithLabel.scss';

type Props = {
  onChange(e: any): void;
  value?: string;
  name?: string;
  label: string;
  error?: string;
};

const InputWithLabel = ({ onChange, value, name, label, error }: Props) => (
  <div className="input-with-label">
    <div className="labels">
      <p className="input-label">{label}</p>
      <p className="error-text">{error}</p>
    </div>
    <input
      type="text"
      value={value}
      name={name}
      className={`form-input ${error ? 'form-error' : ''}`}
      onChange={onChange}
    />
  </div>
);

export default InputWithLabel;
