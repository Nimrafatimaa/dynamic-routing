import React, { useState } from 'react';
import Card from './Cards';
import { NavLink } from 'react-router-dom';

const Mainnav = ({ data }) => {
  const [visible, setvisible] = useState(3);
   const showMore = () => {
    setvisible((preValue)=> preValue + 3)
   }
   const showLess = () => {
    setvisible(3); // Reset to initial visible number when showing less
  };
  const allDisplayed = visible >= data.length;
  return (
    <div className="container mx-auto">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.slice(0,visible).map((item, index) => (
         <NavLink to={`/card/${item.id}`} key={index} > <Card title={item.title} 
         content={item.content} image={item.image} id={item.id}/></NavLink>
        ))}
      </div>
      <div  className=' w-full flex items-center justify-center '>
      
      {allDisplayed ? (
          <button className='bg-gray-600 text-white px-3 py-2 rounded-md' onClick={showLess}>
            Show less
          </button>
        ) : (
          <button className='bg-gray-600 text-white px-3 py-2 rounded-md' onClick={showMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};
export default Mainnav;
