import InputPrimitive, { InputModes } from '../../../primitives/InputPrimitive';
import { inputPlaceholderFunction } from '../../../utils/inputPlaceholderFunction';
import React from 'react';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../../themes/colors';
import { Fonts } from '../../../themes/fonts';

function PasswordForm({ password, closeForm }: { password: string; closeForm: () => void }) {
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
          if ((e.target as unknown as Array<HTMLInputElement>)[0].value === password) {
            console.log('PasswordChanged');
            closeForm();
          }
        }}
      >
        <InputPrimitive
          type="password"
          value=""
          textParams={{ placeholder: 'Старый пароль' }}
          onChange={inputPlaceholderFunction}
        />
        <InputPrimitive
          type="password"
          value=""
          textParams={{ placeholder: 'Новый пароль' }}
          onChange={inputPlaceholderFunction}
        />
        <InputPrimitive
          type="password"
          value=""
          textParams={{ placeholder: 'Повторите новый пароль' }}
          onChange={inputPlaceholderFunction}
        />
        <div
          className={`${bgColors.TRANSPARENT} ${afterBgColors.BRONZE} ${borderColors.BRONZE} ${hoverTextColors.LIGHTGOLD} ${textColors.BRONZE} ${Fonts.GENERALMEDIUM} button-primary relative self-center overflow-hidden border-2`}
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

export default React.memo(PasswordForm);
