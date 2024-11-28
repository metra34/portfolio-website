import React from 'react';

type ButtonProps = {
  className?: string;
  href?: string;
};

const ButtonLink: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  href = '#'
}) => {
  const clssName = `button-link ${className}`;
  return (
    <a href={href} className={clssName}>
      {children}
    </a>
  );
};

export default ButtonLink;
