// Save rating to local storage
export const saveRating = (mealId, rating) => {
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    if (!ratings[mealId]) {
        ratings[mealId] = [];
    }
    ratings[mealId].push(rating);
    localStorage.setItem('ratings', JSON.stringify(ratings));
};

// Get ratings for a specific meal
export const getRatings = (mealId) => {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    return ratings[mealId] || [];
};

// Calculate average rating for a meal
export const calculateAverageRating = (mealId) => {
    const ratings = getRatings(mealId);
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
};
