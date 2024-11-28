import React from 'react';
import ButtonLink from '../buttons/button-link';

type CardProps = {
  title: string;
  className?: string;
  imgSrc: string;
  href?: string;
};

const HoverCard: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  title,
  className,
  imgSrc,
  href = '#'
}) => {
  const clssName = `card ${className}`;
  return (
    <div className={clssName} style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{children}</p>
        <ButtonLink
          href={href}
          className="bg-red-800 hover:bg-red-900 focus:bg-red-950 focus:outline-none focus:ring active:bg-red-950"
        >
          Learn More
        </ButtonLink>
      </div>
    </div>
  );
};

export default HoverCard;
