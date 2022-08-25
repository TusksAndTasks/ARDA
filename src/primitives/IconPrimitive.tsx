import { bgColors, textColors } from '../themes/colors';
import React from 'react';
import { squareSizes } from '../themes/sizes';

interface IIconPrimitiveProps {
  color?: textColors;
  bgColor?: bgColors;
  size?: squareSizes;
  bgSize?: squareSizes;
  children?: React.ReactNode;
}

function IconPrimitive({
  color = textColors.BLACK,
  bgColor = bgColors.WHITE,
  size = squareSizes.SMALL,
  bgSize = squareSizes.SMALLPLUS,
  children,
}: IIconPrimitiveProps) {
  return (
    <div className={`${bgColor} ${bgSize} flex items-center justify-center`}>
      <svg
        className={`${size} ${color}`}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </div>
  );
}

export default React.memo(IconPrimitive);
