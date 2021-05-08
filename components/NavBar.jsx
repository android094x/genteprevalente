import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import ProfileSubMenu from './ProfileSubMenu';

const NavBar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (ref.current.contains(e.target)) return;
      setShowProfileMenu(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <nav className='hidden lg w-1/2 lg:flex lg:items-center'>
      <ul className='flex justify-between lg:w-full items-center'>
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
        <li
          className='flex items-center cursor-pointer relative'
          ref={ref}
          onClick={e => setShowProfileMenu(!showProfileMenu)}>
          <img src='/avatar.png' alt='avatar' className='mr-2' />
          Daniel{' '}
          <img
            src='/ArrowDown-icon.svg'
            width={16}
            height={16}
            className='ml-2'
          />
          <ProfileSubMenu show={showProfileMenu} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
