import React from 'react';

interface IButtonProps {
  mode?: ButtonModes;
  children?: React.ReactNode;
  onClick?: () => void;
}

enum ButtonModes {
  PRIMARY = 'PRIMARY',
}

function ButtonPrimitive({ mode = ButtonModes.PRIMARY, children, onClick }: IButtonProps) {
  return (
    <button className={ButtonStylesMap[mode].button} onClick={onClick}>
      <span className={ButtonStylesMap[mode].textSpan}>{children}</span>
    </button>
  );
}

export default React.memo(ButtonPrimitive);

const ButtonStylesMap = {
  [ButtonModes.PRIMARY]: {
    button: 'flex flex-wrap justify-center py-20 text-white  my-5',
    textSpan:
      'button-primary border-white px-5 py-3 bg-transparent hover:text-black relative block focus:outline-none border-2 border-solid text-center overflow-hidden',
  },
};
