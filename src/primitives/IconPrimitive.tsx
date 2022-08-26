import { bgColors, textColors } from '../themes/colors';
import React from 'react';
import { squareSizes } from '../themes/sizes';

interface IIconPrimitiveProps {
  spriteId: string;
  color?: textColors;
  bgColor?: bgColors;
  size?: squareSizes;
  bgSize?: squareSizes;
}

function IconPrimitive({
  color = textColors.BLACK,
  bgColor = bgColors.WHITE,
  size = squareSizes.SMALL,
  bgSize = squareSizes.SMALLPLUS,
  spriteId,
}: IIconPrimitiveProps) {
  return (
    <>
      <div className={`${bgColor} ${bgSize} flex items-center justify-center`}>
        <svg
          className={`${size} ${color}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <use href={`#${spriteId}`} />
        </svg>
      </div>
    </>
  );
}

export default React.memo(IconPrimitive);
