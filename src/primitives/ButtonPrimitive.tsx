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
}

enum ButtonModes {
  PRIMARY = 'PRIMARY',
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
}: IButtonProps) {
  return (
    <button
      className={`${ButtonStylesMap[mode].textSpan} ${color} ${afterColor} ${bgColor} ${borderColor} ${hoverTextColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default React.memo(ButtonPrimitive);

const ButtonStylesMap = {
  [ButtonModes.PRIMARY]: {
    textSpan:
      'button-primary px-5 py-2 relative block focus:outline-none border border-solid text-center overflow-hidden',
  },
};
