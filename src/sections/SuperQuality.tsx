import React from 'react';

import { arrowRight } from '../assets/icons';
import { shoe8 } from '../assets/images';

import { Button } from '../components';

const SuperQuality: React.FC = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className="text-coral-red"> Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is design to elevate your experience providing you with unmatched
          quality, innovation and touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our attention to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button
            label="Shop now"
            iconURL={arrowRight}
            animationName="bounce"
          />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          className="object-contain"
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
