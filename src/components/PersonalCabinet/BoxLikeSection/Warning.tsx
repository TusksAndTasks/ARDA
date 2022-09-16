import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import ButtonPrimitive, { ButtonModes } from '../../../primitives/ButtonPrimitive';
import { afterBgColors, borderColors, hoverTextColors, textColors } from '../../../themes/colors';
import React from 'react';
import { Fonts } from '../../../themes/fonts';

function Warning({
  onClick,
  warningText,
  prompt,
}: {
  onClick: () => void;
  warningText: string;
  prompt: string;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-between rounded-t-lg bg-lightbronze text-center sm:w-2/3 lg:w-1/3">
      <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} font={Fonts.GENERALMEDIUM}>
        {warningText}
      </TypographyPrimitive>
      <ButtonPrimitive
        mode={ButtonModes.PRIMARYROUNDED}
        color={textColors.BLACK}
        borderColor={borderColors.BLACK}
        afterColor={afterBgColors.BLACK}
        hoverTextColor={hoverTextColors.BRONZE}
        additionalClasses="relative"
        onClick={onClick}
      >
        <TypographyPrimitive font={Fonts.GENERALBOLD}>{prompt}</TypographyPrimitive>
      </ButtonPrimitive>
    </div>
  );
}

export default React.memo(Warning);
