const Card = () => {
  return (
    <div className='bg-white w-full h-48 lg:w-10/12 lg:h-64'>
      <div className='px-8'>
        <img src='/Home-icon-1.svg' alt='' />
        <h2>Solicitudes de creación de empresas</h2>
      </div>
      <span className='flex'>
        <img src='/Clock-icon.svg' alt='' />2 Solicitudes sin tratar
      </span>
    </div>
  );
};

export default Card;
