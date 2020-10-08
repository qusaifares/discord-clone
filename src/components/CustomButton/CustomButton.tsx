import React from 'react';
import './CustomButton.css';

interface Props extends React.ComponentProps<'button'> {
  fullWidth?: boolean;
}

const CustomButton: React.FC<Props> = ({
  fullWidth,
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`customButton ${className || ''} ${
        fullWidth ? 'fullWidth' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
