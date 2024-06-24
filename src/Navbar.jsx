import React from 'react';
import { Navbar, NavbarBrand, NavbarCollapse,NavbarLink, NavbarToggle } from "flowbite-react";
const Nav = () => {
  return (
    // <nav className="bg-gray-800 p-4 text-[20px] text-white">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <div><h1 className='font-semibold text-2xl'>Logo</h1></div>
    //    <div><button className='bg-gray-500 px-3 py-2 rounded-xl'>Subscribe</button></div>
    //   </div>
    // </nav>
   <div className='border'>
     <Navbar fluid rounded >
    <NavbarBrand  href="https://flowbite-react.com">
      <img src="https://cdn.pixabay.com/photo/2024/06/06/13/55/woman-8812775_640.png" className="mr-3 h-8 sm:h-9 rounded-full" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dynamic Card</span>
    </NavbarBrand>
    <NavbarToggle />
    <NavbarCollapse>
      <NavbarLink href="#" active>
        Home
      </NavbarLink>
      <NavbarLink href="#">
        About
      </NavbarLink>
      <NavbarLink href="#">Services</NavbarLink>
      <NavbarLink href="#">Pricing</NavbarLink>
      <NavbarLink href="#">Contact</NavbarLink>
    </NavbarCollapse>
  </Navbar>
   </div>
  );
};

export default Nav;