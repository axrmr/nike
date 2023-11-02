import React from 'react';

type Props = {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
  animationName?: string;
};

const Button: React.FC<Props> = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  animationName,
}) => {
  const isPropsColor = backgroundColor
    ? `${backgroundColor} ${textColor} ${borderColor}`
    : 'bg-coral-red  text-white border-coral-red';

  return (
    <button
      className={`flex justify-center items-center  gap-2 px-7 py-4 border font-montserrat text-lg leading-none  transition-transform rounded-full hover:animate-none hover:scale-[1.03]
      ${animationName && `animate-${animationName}`} 
      ${isPropsColor} ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="Arrow right"
        />
      )}
    </button>
  );
};

export default Button;
