import React from 'react';

const Card = ({ title, content, image }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4 mt-4">
      <div><img className='rounded' src={image} alt="image" /></div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{content}</p>
      <button className='text-gray-600'>views</button>
    </div>
  );
};

export default Card;


 