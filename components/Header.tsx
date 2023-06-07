import React from 'react';
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div
      id='home'
      className='relative w-screen h-screen bg-backnoam bg-cover bg-center'
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='flex flex-col items-center justify-center h-full text-white'>
        <div className='flex space-x-4'>
        <Link to='contact' smooth={true}  duration={500} offset={-80}>
          <button className='relative top-32 z-10 px-6 py-3px-6 py-3 bg-white text-black hover:bg-cyan-300 rounded-md font-medium'>
            Réservez
            <div className='absolute inset-0 bg-black opacity-0 hover:opacity-30 rounded-md'></div>
          </button>
          </Link>
          <a href="tel:+33604080808">
            <button  className='relative top-32 z-10 px-6 py-3 bg-white text-black hover:bg-cyan-300   rounded-md font-medium'>
            Appelez-Nous
            <div className='absolute inset-0 bg-black opacity-0 hover:opacity-30 rounded-md'></div>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
