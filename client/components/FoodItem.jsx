import React from 'react';

export default function FoodItem ({ food }) {
  return(
    <div className="food">
      <h4>{food.name}</h4>
      <p>{food.region} {food.country}</p>
      <p>{food.description}</p>
      <p>{food.history}</p>
    </div>
  );
}
