import Link from 'next/link';
import { useState } from 'react';

import ProfileSubMenuMobile from './ProfileSubMenuMobile';

const NavBarMobile = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className='bg-GrayNavBarGDM flex flex-col fixed top-16 right-0 h-screen-4rem w-8/12 sm:w-4/12 lg:hidden'>
      <ul className='flex flex-col items-center space-y-8 p-4 overflow-y-scroll'>
        <li className='flex justify-center'>
          <form
            className=' w-8/12'
            onSubmit={e => {
              e.preventDefault();
              console.log(searchTerm);
              setSearchTerm('');
            }}>
            <label htmlFor='searchTerm' className='flex items-center'>
              <img
                src='/Search-icon.svg'
                alt='search icon'
                className='mr-2 w-4'
              />
              <input
                className='border-0 border-b-2 bg-transparent focus:outline-none w-full'
                type='text'
                placeholder='Buscar...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </label>
          </form>
        </li>
        <li
          className='flex flex-col justify-center items-center cursor-pointer relative'
          // ref={ref}
          onClick={e => setShowProfileMenu(!showProfileMenu)}>
          <span className='flex items-center'>
            <img src='/avatar.png' alt='avatar' className='mr-2' />
            Daniel
            <img
              src='/ArrowDown-icon.svg'
              width={16}
              height={16}
              className='ml-2'
            />
          </span>
          <ProfileSubMenuMobile show={showProfileMenu} />
        </li>
        <li>
          <Link href='/administration'>
            <a className='flex items-center relative'>
              <img
                src='/Gears-icon.svg'
                width={16}
                height={16}
                className='mr-2'
              />
              Administracion
              <span className='absolute bg-red-600 -top-1 -right-4 rounded-full px-1 text-xs'>
                2
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='flex items-center'>
              <img
                src='/Case-icon.svg'
                width={16}
                height={16}
                className='mr-2'
              />
              Empleo
              <img
                src='/ArrowDown-icon.svg'
                width={16}
                height={16}
                className='ml-2'
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href='/my-curriculum'>
            <a className='flex items-center'>
              <img src='/CV-icon.svg' width={16} height={16} className='mr-2' />{' '}
              Mi CV
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMobile;
