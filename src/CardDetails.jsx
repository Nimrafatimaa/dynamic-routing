import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = ({ data }) => {
  let { id } = useParams();
  
  const card = data.find(card => card.id === parseInt(id));

  return (
    <div className="border border-gray-200 p-4 rounded-md">
      {card ? (
        <>
          <img src={card.image} alt="" />
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p>{card.content}</p>
        </>
      ) : (
        <p>Card not found.</p>
      )}
    </div>
  );
};

export default CardDetails;











//working
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Card from './Cards';
// const CardDetails = ({ data }) => {
//   const { id } = useParams(); // Get the id from the URL params
//   const card = data.find(card => card.id === parseInt(id));
//   // const [selectedCard, setSelectedCard] = useState({})
  
  
//     return( 
//       <div>
//     {
//       card ? 
//     (
//       <div className="container mx-auto mt-8">
//             <img className='rounded mb-4' src={card.image} alt="image" />
//             <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
//             <p className="text-gray-600">{card.content}</p>
//             <button className='text-gray-600 mt-4'>views</button>
//       </div>
//     ) // Display all if the card is not found
//        :(
//           <div className="container mx-auto mt-8">
//             {data.map(card => (
//               <div key={card.id} className="bg-white p-8 shadow rounded-lg mb-4">
//                 <img className='rounded mb-4' src={card.image} alt="image" />
//                 <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
//                 <p className="text-gray-600">{card.content}</p>
//                 <button className='text-gray-600 mt-4'>views</button>
//               </div>
//             ))}
//           </div>
//       )}
//       </div>
//     )
//     };
//     export default CardDetails;





