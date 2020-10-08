import React from 'react';
import './CustomInput.css';

interface Props extends React.ComponentProps<'input'> {
  label?: string;
  labelProps?: React.ComponentProps<'label'>;
  fullWidth?: boolean;
}

const CustomInput: React.FC<Props> = ({
  label,
  labelProps,
  fullWidth,
  className,
  ...props
}) => {
  return (
    <div className='customInput'>
      {label && (
        <label {...labelProps} className='customInput__label'>
          {label}
        </label>
      )}
      <input
        {...props}
        className={`customInput__input ${className || ''} ${
          fullWidth ? 'fullWidth' : ''
        }`}
      />
    </div>
  );
};

export default CustomInput;
