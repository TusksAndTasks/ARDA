import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';
import { afterBgColors, borderColors, hoverTextColors, textColors } from '../../themes/colors';
import React from 'react';

function Warning({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex w-1/3 flex-col items-center justify-between bg-lightgold">
      <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
        Ссылка на данный контент бужет доступна после вступления в ARDA
      </TypographyPrimitive>
      <ButtonPrimitive
        color={textColors.BRONZE}
        borderColor={borderColors.BRONZE}
        afterColor={afterBgColors.GOLD}
        hoverTextColor={hoverTextColors.BRONZE}
        additionalClasses="relative"
        onClick={onClick}
      >
        Вступить
      </ButtonPrimitive>
    </div>
  );
}

export default React.memo(Warning);
