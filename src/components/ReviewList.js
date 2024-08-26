import React from 'react';
import Review from './Review';

export default function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <Review key={index} text={review} />
        ))
      ) : (
        <p>No reviews yet. Be the first to leave one!</p>
      )}
    </div>
  );
}
