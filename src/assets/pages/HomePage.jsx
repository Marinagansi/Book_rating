import React, { useState } from 'react';

function BookReviewForm() {
  const [ratings, setRatings] = useState({
    plotQuality: 5,
    writingStyle: 5,
    characterDevelopment: 5,
    pacing: 5,
    creativity: 5,
    emotionalImpact: 5,
    endingSatisfaction: 5,
    design: 5,
    recommendation: 5,
  });
  
  const [finalRating, setFinalRating] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRatings((prevRatings) => ({
      ...prevRatings,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ratingsValues = Object.values(ratings);
    const averageRating = ratingsValues.reduce((acc, rating) => acc + parseInt(rating), 0) / ratingsValues.length;
    const finalStarRating = (averageRating / 10) * 5;
    const roundedFinalStarRating = Math.round(finalStarRating * 10) / 10;

    setFinalRating({
      averageScore: averageRating.toFixed(2),
      starRating: roundedFinalStarRating,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Review Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="question">
          <label className="block text-gray-700 mb-2">How would you rate the plot or content quality?</label>
          <div className="rating-value text-center text-lg font-semibold text-gray-800 mb-2">{ratings.plotQuality}</div>
          <input
            type="range"
            name="plotQuality"
            min="1"
            max="10"
            value={ratings.plotQuality}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
          />
        </div>

        <div className="question">
          <label className="block text-gray-700 mb-2">How engaging is the writing style?</label>
          <div className="rating-value text-center text-lg font-semibold text-gray-800 mb-2">{ratings.writingStyle}</div>
          <input
            type="range"
            name="writingStyle"
            min="1"
            max="10"
            value={ratings.writingStyle}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
          />
        </div>

        <div className="question">
          <label className="block text-gray-700 mb-2">Are the characters well-developed? (Skip if non-fiction)</label>
          <div className="rating-value text-center text-lg font-semibold text-gray-800 mb-2">{ratings.characterDevelopment}</div>
          <input
            type="range"
            name="characterDevelopment"
            min="1"
            max="10"
            value={ratings.characterDevelopment}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
          />
        </div>

        <div className="question">
          <label className="block text-gray-700 mb-2">Is the pacing well-balanced?</label>
          <div className="rating-value text-center text-lg font-semibold text-gray-800 mb-2">{ratings.pacing}</div>
          <input
            type="range"
            name="pacing"
            min="1"
            max="10"
            value={ratings.pacing}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
          />
        </div>

        <div className="question">
          <label className="block text-gray-700 mb-2">How original and creative is the book?</label>
          <div className="rating-value text-center text-lg font-semibold text-gray-800 mb-2">{ratings.creativity}</div>
          <input
            type="range"
            name="creativity"
            min="1"
            max="10"
            value={ratings.creativity}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
          />
        </div>

        <div className="question">
          <label className="block text-gray-700 mb-2">How emotionally impactful was the book?</label>
          <div className="rating-value text-center text-lg font-semibold text-gray-800 mb-2">{ratings.emotionalImpact}</div>
          <input
            type="range"
            name="emotionalImpact"
            min="1"
            max="10"
            value={ratings.emotionalImpact}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
          />
        </div>

        <div className="question">
          <label className="block text-gray-700 mb-2">How satisfying was the ending?</label>
          <div className="rating-value text-center text-lg font-semibold text-gray-800 mb-2">{ratings.endingSatisfaction}</div>
          <input
            type="range"
            name="endingSatisfaction"
            min="1"
            max="10"
            value={ratings.endingSatisfaction}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
          />
        </div>

        <div className="question">
          <label className="block text-gray-700 mb-2">How well is the book designed (cover, formatting, readability)?</label>
          <div className="rating-value text-center text-lg font-semibold text-gray-800 mb-2">{ratings.design}</div>
          <input
            type="range"
            name="design"
            min="1"
            max="10"
            value={ratings.design}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
          />
        </div>

        <div className="question">
          <label className="block text-gray-700 mb-2">Would you recommend this book to others?</label>
          <div className="rating-value text-center text-lg font-semibold text-gray-800 mb-2">{ratings.recommendation}</div>
          <input
            type="range"
            name="recommendation"
            min="1"
            max="10"
            value={ratings.recommendation}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit Review
        </button>
      </form>

      {finalRating && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Final Book Rating:</h3>
          <p className="text-gray-800">Average Score: {finalRating.averageScore} / 10</p>
          <p className="text-gray-800">
            Star Rating: {'⭐'.repeat(Math.floor(finalRating.starRating))} ({finalRating.starRating}/5)
          </p>
        </div>
      )}
    </div>
  );
}

export default BookReviewForm;