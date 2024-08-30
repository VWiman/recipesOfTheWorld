import React from 'react';
import { saveRating, calculateAverageRating } from '../utils/ratingStorage';

const Rating = ({ mealId, onRatingUpdate }) => {
    const handleRating = (rating) => {
        saveRating(mealId, rating);
        onRatingUpdate(); // Callback to trigger re-render in the parent component
    };

    return (
        <div className="rating">
            <p>Rating: {calculateAverageRating(mealId)} stars</p>
            {/* Star rating UI */}
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} onClick={() => handleRating(star)}>
                        &#9733;
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Rating;
