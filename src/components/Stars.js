import React, { useState } from 'react';

export default function Stars({ setRating }) {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRating = (rating) => {
    setSelectedRating(rating);
    setRating(rating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: 'pointer', color: star <= selectedRating ? 'gold' : 'gray' }}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
