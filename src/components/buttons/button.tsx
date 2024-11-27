import React from 'react';

type ButtonProps = {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  type = 'button'
}) => {
  const clssName = `button ${className}`;
  return (
    <button className={clssName} type={type}>
      {children}
    </button>
  );
};

export default Button;
