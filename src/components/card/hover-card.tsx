import React from 'react';
import Button from '../buttons/button';

type CardProps = {
  title: string;
  className?: string;
  imgSrc: string;
};

const HoverCard: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  title,
  className,
  imgSrc
}) => {
  const clssName = `card ${className}`;
  return (
    <div className={clssName} style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{children}</p>
        <Button className="bg-red-800 hover:bg-red-900 focus:bg-red-950 focus:outline-none focus:ring active:bg-red-950">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HoverCard;
