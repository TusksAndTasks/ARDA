import InputPrimitive, { InputModes } from '../../../primitives/InputPrimitive';
import { inputPlaceholderFunction } from '../../../utils/inputPlaceholderFunction';
import React from 'react';
import { afterBgColors, bgColors } from '../../../themes/colors';

function PasswordForm({ password, closeForm }: { password: string; closeForm: () => void }) {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50">
      <form
        className="h-11/12 w-1/3 flex-col content-center items-center bg-lightgold px-10"
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

export default React.memo(PasswordForm);
