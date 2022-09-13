import TypographyPrimitive from '../../primitives/TypographyPrimitive';
import InputPrimitive, { InputModes } from '../../primitives/InputPrimitive';
import { afterBgColors, bgColors, textColors } from '../../themes/colors';
import { Fonts } from '../../themes/fonts';
import { fontSizes } from '../../themes/sizes';
import { inputPlaceholderFunction } from '../../utils/inputPlaceholderFunction';
import React from 'react';

function RedactForm() {
  return (
    <form className="flex w-full flex-col items-center gap-2 border-t-2 border-lightgold">
      <TypographyPrimitive
        as="h3"
        color={textColors.LIGHTGOLD}
        font={Fonts.GENERALMEDIUM}
        fontSize={fontSizes.LARGEPLUS}
      >
        Изменить данные
      </TypographyPrimitive>
      <textarea
        placeholder="Укажите, какие сведения о Вашей компании требуют изменений"
        className="custom-scrollbar-item w-[90%] rounded-lg bg-lightgold font-general-medium text-lg placeholder:font-general-medium placeholder:text-lg"
      ></textarea>
      <div
        className={` ${bgColors.LIGHTBRONZE} ${afterBgColors.GOLD} button-primary relative min-h-[40px] cursor-pointer self-center overflow-hidden rounded-lg`}
      >
        <InputPrimitive
          type="submit"
          mode={InputModes.SUBMITPRIMARY}
          value="Подтвердить"
          onChange={inputPlaceholderFunction}
        />
      </div>
    </form>
  );
}

export default React.memo(RedactForm);
