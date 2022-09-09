import React from 'react';
import { textColors } from '../themes/colors';
import { fontSizes } from '../themes/sizes';
import { Fonts } from '../themes/fonts';

interface ITypographyProps {
  as?: keyof HTMLElementTagNameMap;
  mode?: TypographyModes;
  children?: React.ReactNode;
  fontSize?: fontSizes;
  font?: Fonts;
  color?: textColors;
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
  fontSize,
  font,
  children,
}: ITypographyProps) {
  return React.createElement(
    as,
    { className: `${TypographyStyleMap[mode]} ${color} ${fontSize} ${font}` },
    children
  );
}

export default React.memo(TypographyPrimitive);

const TypographyStyleMap = {
  [TypographyModes.PRIMARY]: 'tracking-normal normal-case',
  [TypographyModes.LISTLIKE]: 'font-general text-lg tracking-normal text-start',
  [TypographyModes.TITULAR]: 'font-titular text-5xl tracking-wide pt-3 pb-7',
  [TypographyModes.PRIMARYPLUS]: 'font-general text-lg tracking-wide uppercase',
  [TypographyModes.CARDPOINT]: 'font-titular text-9xl tracking-wide drop-shadow-point-shadow',
};
