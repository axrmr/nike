import React from 'react';
import { star } from '../assets/icons';

type Props = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

const ReviewCard: React.FC<Props> = ({
  imgURL,
  customerName,
  rating,
  feedback,
}) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img
        className="rounded-full object-cover w-[120px] h-[120px]"
        src={imgURL}
        alt="customer"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex flex-col justify-center items-center gap-2.5">
        <img
          className="object-contain m-0"
          src={star}
          width={24}
          height={24}
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        <h3 className="font-palanquin text-3xl text-center font-bold leading-normal">
          {customerName}
        </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
