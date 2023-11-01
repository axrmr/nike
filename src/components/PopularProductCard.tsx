import React from 'react';

import { star } from '../assets/icons';

type Props = {
  imgURL: string;
  name: string;
  price: string;
};

const PopularProductCard: React.FC<Props> = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full ">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
        />
        <div className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
          <span className="block mt-2 leading-normal font-palanquin font-semibold">
            {name}
          </span>
          <span className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
