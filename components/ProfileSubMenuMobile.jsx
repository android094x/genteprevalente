import Link from 'next/link';

import { IoPerson, IoSettings, IoExit, IoMail } from 'react-icons/io5';

const ProfileSubMenuMobile = ({ show }) => {
  return (
    <>
      {show ? (
        <div className='bg-gray-600 w-48 px-8 py-4'>
          <ul className='space-y-4 '>
            <li>
              <Link href='/profile'>
                <a className='flex items-center'>
                  <IoPerson className='mr-2' />
                  Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href='/my-messages'>
                <a className='flex items-center'>
                  <IoMail className='mr-2' />
                  Messages
                </a>
              </Link>
            </li>
            <li>
              <Link href='/settings'>
                <a className='flex items-center'>
                  <IoSettings className='mr-2' />
                  Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href='/signout'>
                <a className='flex items-center'>
                  <IoExit className='mr-2' />
                  Sign Out
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default ProfileSubMenuMobile;
