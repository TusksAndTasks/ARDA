import React from 'react';
import { hoverTextColors, textColors } from '../themes/colors';
import { fontSizes } from '../themes/sizes';
import { Fonts } from '../themes/fonts';

interface ITypographyProps {
  as?: keyof HTMLElementTagNameMap;
  mode?: TypographyModes;
  children?: React.ReactNode;
  fontSize?: fontSizes;
  font?: Fonts;
  color?: textColors;
  hoverColor?: hoverTextColors;
}

export enum TypographyModes {
  PRIMARY = 'PRIMARY',
  PRIMARYPLUS = 'PRIMARYPLUS',
  TITULAR = 'TITULAR',
  LISTLIKE = 'LISTLIKE',
  CARDPOINT = 'CARDPOINT',
}

function TypographyPrimitive({
  as = 'span',
  mode = TypographyModes.PRIMARY,
  color,
  hoverColor,
  fontSize,
  font,
  children,
}: ITypographyProps) {
  return React.createElement(
    as,
    { className: `${TypographyStyleMap[mode]} ${color} ${fontSize} ${font} ${hoverColor}` },
    children
  );
}

export default React.memo(TypographyPrimitive);

const TypographyStyleMap = {
  [TypographyModes.PRIMARY]: 'tracking-normal normal-case',
  [TypographyModes.LISTLIKE]: 'font-general text-lg tracking-normal text-start',
  [TypographyModes.TITULAR]: 'font-titular tracking-wide pt-3 pb-7',
  [TypographyModes.PRIMARYPLUS]: 'font-general text-lg tracking-wide uppercase',
  [TypographyModes.CARDPOINT]:
    'font-titular text-6xl sm:text-9xl tracking-wide drop-shadow-point-shadow',
};
