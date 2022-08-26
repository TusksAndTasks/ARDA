import React, { HTMLInputTypeAttribute } from 'react';

interface InputPrimitiveProps {
  type: HTMLInputTypeAttribute;
  mode?: InputModes;
}

enum InputModes {
  TEXTPRIMARY = 'TEXTPRIMARY',
}

function InputPrimitive({ type, mode = InputModes.TEXTPRIMARY }: InputPrimitiveProps) {
  return <input type={type} className={InputsStyleMap[mode]} />;
}

export default React.memo(InputPrimitive);

const InputsStyleMap = {
  [InputModes.TEXTPRIMARY]:
    'border-1 border-black-600 bg-current text-green-400 outline-2 outline-offset-4 focus:outline focus:ring-offset-black-700',
};
