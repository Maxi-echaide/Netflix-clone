import React from 'react';

interface MovileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MovileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className='flex flex-col gap-4'>
        <div className='px-3 text-center text-white hober:underline'>
          Home
        </div>
        <div className='px-3 text-center text-white hober:underline'>
          Series
        </div>
        <div className='px-3 text-center text-white hober:underline'>
          Films
        </div>
        <div className='px-3 text-center text-white hober:underline'>
          New & Popular
        </div>
        <div className='px-3 text-center text-white hober:underline'>
          My List
        </div>
        <div className='px-3 text-center text-white hober:underline'>
          Browse by Languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
