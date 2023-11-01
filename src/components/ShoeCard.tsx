import React from 'react';

interface Props {
  imgURL: { thumbnail: string; bigShoe: string };
  changeBigShoeImage: (shoe: string) => void;
  bigShoeImg: string;
}

const ShoeCard: React.FC<Props> = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl
    ${
      bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'
    } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
