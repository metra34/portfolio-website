import React from 'react';

type ButtonLinkProps = React.HTMLProps<HTMLAnchorElement> & {
  className?: string;
};

const ButtonLink: React.FC<React.PropsWithChildren<ButtonLinkProps>> = ({
  children,
  className,
  href = '#',
  target = '_blank'
}) => {
  const clssName = `button-link ${className}`;
  return (
    <a href={href} className={clssName} target={target}>
      {children}
    </a>
  );
};

export default ButtonLink;
