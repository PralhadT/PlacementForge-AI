import React from 'react';
import './Card.css';

const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
  return (
    <div 
      className={`card box-3d ${hoverEffect ? 'card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
