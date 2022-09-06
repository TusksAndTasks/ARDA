import InputPrimitive, { InputModes } from '../../../primitives/InputPrimitive';
import { inputPlaceholderFunction } from '../../../utils/inputPlaceholderFunction';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import React from 'react';
import { afterBgColors, bgColors } from '../../../themes/colors';

interface IProfileFormProps {
  settings: Array<{ descriptor: string; value: string }>;
  closeForm: () => void;
}

function ProfileForm({ settings, closeForm }: IProfileFormProps) {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50">
      <form
        className="h-11/12 w-1/3 flex-col content-center items-center bg-lightgold px-10"
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
          className={` ${bgColors.BLACK} ${afterBgColors.GOLD} button-primary relative overflow-hidden`}
        >
          <InputPrimitive
            type="submit"
            mode={InputModes.SUBMITPRIMARY}
            value="submit"
            onChange={inputPlaceholderFunction}
          />
        </div>
      </form>
    </div>
  );
}

export default React.memo(ProfileForm);
