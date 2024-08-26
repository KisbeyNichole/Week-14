import React, { useState } from 'react';

export default function ReviewForm({ addReview }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review) {
      addReview(review);
      setReview('');  // Clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Leave a review"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
