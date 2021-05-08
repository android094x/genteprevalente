import Link from 'next/link';

import { IoPerson, IoSettings, IoExit, IoMail } from 'react-icons/io';

const ProfileSubMenu = ({ show }) => {
  return (
    <>
      {show ? (
        <div className='absolute top-16 bg-gray-800'>
          <ul>
            <li>
              <Link href='/'>
                <a>
                  {/* <IoPerson /> */}
                  Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  {/* <IoMail /> */}
                  My Messages
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  {/* <IoSettings /> */}
                  Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  {/* <IoExit /> */}
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

export default ProfileSubMenu;
