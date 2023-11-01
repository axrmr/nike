import React from 'react';

import { Button } from '../components';

const Subscribe: React.FC = () => {
  return (
    <section
      className="flex justify-between items-center max-container max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="font-palanquin font-bold text-4xl leading-[68px] lg:max-width-lg ">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          className="input"
          type="text"
          placeholder="subscribe@nike.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label="Sign Up"
            fullWidth
            animate="bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
