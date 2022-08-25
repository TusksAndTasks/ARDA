import React from 'react';
import ButtonPrimitive from './primitives/ButtonPrimitive';
import TypographyPrimitive from './primitives/TypographyPrimitive';
import IconPrimitive from './primitives/IconPrimitive';
import { bgColors, textColors } from './themes/colors';
import { squareSizes } from './themes/sizes';

function App() {
  return (
    <div className="bg-amber-300 text-3xl font-bold">
      Upper Text
      <IconPrimitive
        color={textColors.GOLD}
        bgColor={bgColors.BLACK}
        size={squareSizes.MEDIUM}
        bgSize={squareSizes.MEDIUMPLUS}
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </IconPrimitive>
      <ButtonPrimitive>
        <TypographyPrimitive>ClickMe</TypographyPrimitive>
      </ButtonPrimitive>
    </div>
  );
}

export default App;
