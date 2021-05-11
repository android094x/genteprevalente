import Link from 'next/link';
import { motion } from 'framer-motion';

const Card = ({ url, title, icon, text }) => {
  return (
    <motion.div
      initial={{ rotate: 180, scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 160,
        damping: 20,
      }}
      whileHover={{ scale: 1.1 }}
      className='w-full flex justify-center'>
      <Link href={url}>
        <a className='bg-white flex flex-col justify-between w-full max-w-lg h-48 lg:max-w-xl lg:w-10/12 lg:h-80 rounded-xl'>
          <div className='flex items-center lg:flex-col lg:items-start'>
            <motion.figure
              className='bg-BlueGDM w-1/4 sm:w-1/5 lg:w-24 rounded-md -mt-6 ml-8 p-4 py-6 self-start'
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: '100%',
              }}>
              <img src={icon} alt='' className='w-full' />
            </motion.figure>
            <h2 className='w-3/4 sm:w-4/5 p-2 mt-6 text-2xl lg:text-3xl lg:ml-8 '>
              {title}
            </h2>
          </div>
          <div className='flex items-center border-t-2 border-GrayNavBarGDM p-6'>
            <img src='/Clock-icon.svg' alt='' className='mr-2' />
            <p className='text-gray-500 text-xs'>{text}</p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default Card;
