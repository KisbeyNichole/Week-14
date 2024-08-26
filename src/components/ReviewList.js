import React from 'react';
import Review from './Review';

export default function ReviewList({ reviews }) {
  return (
    <>
      {reviews.map((review, index) => (
        <Review key={index} text={review.text} rating={review.rating} />
      ))}
    </>
  );
}
