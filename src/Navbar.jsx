import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-[20px] text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div><h1 className='font-semibold text-2xl'>Logo</h1></div>
       <div><button className='bg-gray-500 px-3 py-2 rounded-xl'>Subscribe</button></div>
      </div>
    </nav>
  );
};

export default Navbar;