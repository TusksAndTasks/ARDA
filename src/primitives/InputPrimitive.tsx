import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
import { bgColors, hoverTextColors, textColors } from '../themes/colors';

interface InputPrimitiveProps {
  type?: HTMLInputTypeAttribute;
  mode?: InputModes;
  textParams?: {
    placeholder: string;
  };
  rangeParams?: {
    min: number;
    max: number;
  };
  value: string | boolean;
  radioParams?: {
    name: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export enum InputModes {
  CHECKBOXPRIMARY = 'CHECKBOXPRIMARY',
  TEXTPRIMARY = 'TEXTPRIMARY',
  RADIOPRIMARY = 'RADIOPRIMARY',
  RANGEPRIMARY = 'RANGEPRIMARY',
  SUBMITPRIMARY = 'SUBMITPRIMARY',
}

function InputPrimitive({
  type = 'text',
  mode = InputModes.TEXTPRIMARY,
  textParams,
  rangeParams,
  radioParams,
  value,
  onChange,
}: InputPrimitiveProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = () =>
    typeof value === 'boolean' ? handleCheck(onChange) : handleInput(onChange);

  const handleCheck =
    (callback: (e: ChangeEvent<HTMLInputElement>) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.checked);
      callback(e);
    };

  const handleInput =
    (callback: (e: ChangeEvent<HTMLInputElement>) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      callback(e);
    };

  return (
    <input
      type={type}
      className={InputsStyleMap[mode]}
      {...textParams}
      {...rangeParams}
      {...radioParams}
      {...(typeof value === 'boolean'
        ? { checked: inputValue as boolean }
        : { value: inputValue as string })}
      onChange={handleChange()}
    />
  );
}

export default React.memo(InputPrimitive);

const InputsStyleMap = {
  [InputModes.CHECKBOXPRIMARY]:
    'bg-current text-black outline-2 outline-offset-4 w-6 h-6 standard-checkbox',
  [InputModes.TEXTPRIMARY]:
    'mt-0 block w-full px-0.5 border-0 bg-transparent border-b-2 border-black focus:ring-0 focus:border-gold',
  [InputModes.RADIOPRIMARY]:
    'bg-current text-black outline-2 outline-offset-4 w-6 h-6 standard-radio',
  [InputModes.RANGEPRIMARY]: 'standard-range',
  [InputModes.SUBMITPRIMARY]: `w-full h-full px-5 py-2 block focus:outline-none border border-solid text-center overflow-hidden ${bgColors.TRANSPARENT} ${textColors.GOLD} ${hoverTextColors.BLACK} transition-colors duration-300 cursor-pointer`,
};
