import React from "react";

function Rating({ value, text, color }) {
  const ratingRange = [
    { first: 1, second: 0.5 },
    { first: 2, second: 1.5 },
    { first: 3, second: 2.5 },
    { first: 4, second: 3.5 },
    { first: 5, second: 4.5 },
  ];

  return (
    <div className="rating">
      {ratingRange.map((rating, index) => (
        <span key={index}>
          <i
            style={{ color }}
            className={
              value >= rating.first
                ? "fas fa-star"
                : value >= rating.second
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  );
}

export default Rating;
