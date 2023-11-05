import React from 'react';

import { close, hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className='absolute w-full padding-x py-8 z-10'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='Logo'
            height={29}
          />
        </a>
        <ul
          className={`flex flex-1 items-center justify-center max-lg:fixed inset-0 max-lg:back-ground max-lg:transition-transform bg-gradient-to-r from-coral-red to-coral-red backdrop-blur-3xl ${
            isMenuVisible
              ? 'translate-x-[0rem] no-scroll'
              : 'translate-x-[100%]'
          }
        } max-lg:flex-col gap-16

          `}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className='font-montserrat leading-normal text-3xl lg:text-xl text-slate-100 drop-shadow-2xl
                lg:text-slate-gray max-lg:font-bold  hover:text-black hover:underline'
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='relative z-10 lg:hidden'>
          <img
            className='cursor-pointer'
            src={isMenuVisible ? close : hamburger}
            alt='Hamburger'
            width={25}
            height={25}
            onClick={handleMenuClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
