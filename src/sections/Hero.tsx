import React from 'react';

import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';

import { shoes, statistics } from '../constants';

import { Button, ShoeCard } from '../components';

const Hero: React.FC = () => {
  const [bigShoeImg, setBigShoeImg] = React.useState<string>(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center gap-10 min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col flex-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-[9] pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 mr-4">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button
          label="Show now"
          iconURL={arrowRight}
          animationName="pulse"
        />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex items-center justify-center max-2xl:pt-40 xl:min-h-screen bg-primary">
        <img
          className="relative z-10 -top-36 "
          src={bigShoeImg}
          alt="shoe"
          width={610}
          height={500}
        />
        <ul className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <li key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
