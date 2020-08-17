import React from 'react';

import './InputWithLabel.scss';

type Props = {
  onChange(e: any): void;
  onBlur?(e: any): void;
  value?: string | number;
  name?: string;
  label: string;
  error?: string;
};

const InputWithLabel = ({
  onChange,
  onBlur,
  value,
  name,
  label,
  error,
}: Props) => (
  <div className="input-with-label">
    <p className="input-label">{label}</p>
    <input
      type="text"
      value={value}
      name={name}
      className={`form-input ${error ? 'form-error' : null}`}
      onChange={onChange}
      onBlur={onBlur}
    />
    <p className="error-text">{error}</p>
  </div>
);

export default InputWithLabel;
