import InputPrimitive, { InputModes } from '../../../primitives/InputPrimitive';
import { inputPlaceholderFunction } from '../../../utils/inputPlaceholderFunction';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import React from 'react';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../../themes/colors';
import { Fonts } from '../../../themes/fonts';

interface IProfileFormProps {
  settings: Array<{ descriptor: string; value: string }>;
  closeForm: () => void;
}

function ProfileForm({ settings, closeForm }: IProfileFormProps) {
  return (
    <div
      className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50"
      onClick={closeForm}
    >
      <form
        className="h-11/12 flex w-[90%] flex-col gap-5 bg-white p-10 sm:w-2/3 lg:w-1/3"
        onClick={(e) => e.preventDefault()}
        onSubmit={(e) => {
          e.preventDefault();
          closeForm();
        }}
      >
        {settings.map((setting) => (
          <TypographyPrimitive
            as="label"
            mode={TypographyModes.PRIMARYPLUS}
            key={setting.descriptor}
          >
            {setting.descriptor}
            <InputPrimitive
              textParams={{ placeholder: setting.descriptor }}
              value={setting.value}
              onChange={inputPlaceholderFunction}
            />
          </TypographyPrimitive>
        ))}
        <div
          className={` ${bgColors.TRANSPARENT} ${afterBgColors.BRONZE} ${borderColors.BRONZE} ${hoverTextColors.LIGHTGOLD} ${textColors.BRONZE} ${Fonts.GENERALMEDIUM} button-primary relative self-center overflow-hidden border-2`}
        >
          <InputPrimitive
            type="submit"
            mode={InputModes.SUBMITPRIMARY}
            value="Подтвердить изменения"
            onChange={inputPlaceholderFunction}
          />
        </div>
      </form>
    </div>
  );
}

export default React.memo(ProfileForm);
