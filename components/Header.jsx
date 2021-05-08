import { useState } from 'react';
import Image from 'next/image';

import NavBar from './NavBar';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className='h-16 bg-gray-800 text-white flex justify-between items-center px-8'>
      <Image
        src='/logo.svg'
        alt='Logo Gente PreValente'
        width='196'
        height='70'
      />
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(searchTerm);
        }}>
        <label htmlFor='searchTerm'>
          <input
            className='border-0 bg-transparent focus:outline-none'
            type='text'
            placeholder='Buscar...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </label>
      </form>
      <NavBar />
    </header>
  );
};

export default Header;
