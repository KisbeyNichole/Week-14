import React, { useState } from 'react';

export default function Stars({ setRating, rating = null, readOnly = false }) {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleRating = (newRating) => {
    if (!readOnly) {
      setSelectedRating(newRating);
      setRating(newRating);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: readOnly ? 'default' : 'pointer', color: star <= selectedRating ? 'gold' : 'gray' }}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
