import React from 'react';

import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  const slideInOutAnim = `${
    !visible
      ? 'translate-x-[32rem] scale-[0.7] '
      : 'translate-x-[0rem] scale-1 no-scroll'
  } max-lg:flex-col gap-16`;

  return (
    <header className="absolute w-full padding-x py-8 z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>

        <ul
          className={`flex flex-1 items-center justify-center lg:transform-none max-lg:fixed inset-0  max-lg:backdrop-blur-[30px] origin-top-right max-lg:transition-transform duration-500 transform-gpu ${slideInOutAnim}

          `}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-montserrat leading-normal text-3xl lg:text-xl text-coral-red
                lg:text-slate-gray max-lg:font-bold  hover:text-black hover:underline"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative z-10 lg:hidden">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={handleClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
