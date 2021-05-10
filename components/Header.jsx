import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoClose, IoMenu } from 'react-icons/io5';

import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className='h-16 bg-GrayNavBarGDM text-white flex justify-between items-center px-8 fixed w-full z-10'>
      <Link href='/'>
        <a className='flex'>
          <Image
            src='/logo.svg'
            alt='Logo Gente PreValente'
            width={196}
            height={64}
          />
        </a>
      </Link>
      <form
        className='hidden lg:block'
        onSubmit={e => {
          e.preventDefault();
          console.log(searchTerm);
          setSearchTerm('');
        }}>
        <label htmlFor='searchTerm' className='flex items-center'>
          <img src='/Search-icon.svg' alt='search icon' className='mr-2 w-4' />
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
      {showMobileMenu ? (
        <IoClose
          className='cursor-pointer lg:hidden text-2xl'
          onClick={e => setShowMobileMenu(!showMobileMenu)}
        />
      ) : (
        <IoMenu
          className='cursor-pointer lg:hidden text-2xl'
          onClick={e => setShowMobileMenu(!showMobileMenu)}
        />
      )}
      {showMobileMenu && (
        <div
          className='absolute top-0 left-0 h-screen-4rem mt-16 w-full bg-black opacity-30'
          onClick={e => setShowMobileMenu(!showMobileMenu)}
        />
      )}
      {showMobileMenu && <NavBarMobile />}
    </header>
  );
};

export default Header;
