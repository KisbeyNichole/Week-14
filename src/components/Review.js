import React from 'react';
import Stars from './Stars';

export default function Review({ text, rating }) {
  return (
    <div>
      <p>{text}</p>
      <Stars readOnly={true} rating={rating} />
    </div>
  );
}
