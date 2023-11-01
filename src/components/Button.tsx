import React from 'react';

type Props = {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
  animate?: string;
};

const Button: React.FC<Props> = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  animate,
}) => {
  const isPropsColor = backgroundColor
    ? `${backgroundColor} ${textColor} ${borderColor}`
    : 'bg-coral-red  text-white border-coral-red';
  const isFullWidth = fullWidth && 'w-full';
  // const animName = animate ? animate : '';

  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  transition-transform rounded-full hover:animate-none hover:scale-[1.03]
      animate-${animate || ''} ${isPropsColor} ${isFullWidth} `}
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
