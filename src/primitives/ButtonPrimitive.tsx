import React from 'react';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../themes/colors';

interface IButtonProps {
  mode?: ButtonModes;
  children?: React.ReactNode;
  color?: textColors;
  borderColor?: borderColors;
  afterColor?: afterBgColors;
  hoverTextColor?: hoverTextColors;
  bgColor?: bgColors;
  onClick?: () => void;
  additionalClasses?: string;
}

export enum ButtonModes {
  PRIMARY = 'PRIMARY',
  PRIMARYVERTICAL = 'PRIMARYVERTICAL',
  PRIMARYFULL = 'PRIMARYFULL',
  PRIMARYROUNDED = 'PRIMARYROUNDED',
  SIMPLE = 'SIMPLE',
}

function ButtonPrimitive({
  mode = ButtonModes.PRIMARY,
  color = textColors.WHITE,
  bgColor = bgColors.TRANSPARENT,
  borderColor = borderColors.WHITE,
  afterColor = afterBgColors.WHITE,
  hoverTextColor = hoverTextColors.BLACK,
  children,
  onClick,
  additionalClasses,
}: IButtonProps) {
  return (
    <button
      className={`${ButtonStylesMap[mode]} ${color} ${afterColor} ${bgColor} ${borderColor} ${hoverTextColor} ${additionalClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default React.memo(ButtonPrimitive);

const ButtonStylesMap = {
  [ButtonModes.PRIMARY]:
    'button-primary px-5 py-2 block focus:outline-none border border-solid text-center overflow-hidden',
  [ButtonModes.PRIMARYVERTICAL]:
    'button-primary max-w-full lg:max-w-[80px] lg:button-vertical pr-5 pl-1 pt-2 block focus:outline-none border border-solid text-center overflow-hidden',
  [ButtonModes.PRIMARYROUNDED]:
    'button-primary px-5 py-2 block focus:outline-none border border-solid text-center overflow-hidden rounded-t-lg',
  [ButtonModes.PRIMARYFULL]:
    'button-primary w-full sm:w-auto px-5 py-2 block focus:outline-none border border-solid text-center overflow-hidden',
  [ButtonModes.SIMPLE]: '',
};
