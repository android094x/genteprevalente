import Link from 'next/link';
import { useState } from 'react';

import ProfileSubMenu from './ProfileSubMenu';

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className='w-2/4'>
      <ul className='flex justify-between w-full'>
        <li>
          <Link href='/'>
            <a className='flex items-center'>
              <img
                src='/Gears-icon.svg'
                width={16}
                height={16}
                className='mr-2'
              />
              Administracion
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
          <Link href='/'>
            <a className='flex items-center'>
              <img src='/CV-icon.svg' width={16} height={16} className='mr-2' />{' '}
              Mi CV
            </a>
          </Link>
        </li>
        <li
          className='flex items-center cursor-pointer relative'
          onClick={e => setShow(!show)}>
          Daniel{' '}
          <img
            src='/ArrowDown-icon.svg'
            width={16}
            height={16}
            className='ml-2'
          />
          <ProfileSubMenu show={show} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
