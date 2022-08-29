import React from 'react';
import { textColors } from '../themes/colors';

interface ITypographyProps {
  as?: keyof HTMLElementTagNameMap;
  mode?: TypographyModes;
  children?: React.ReactNode;
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
  children,
}: ITypographyProps) {
  return React.createElement(as, { className: `${TypographyStyleMap[mode]} ${color}` }, children);
}

export default React.memo(TypographyPrimitive);

const TypographyStyleMap = {
  [TypographyModes.PRIMARY]: 'font-general text-base tracking-normal normal-case',
  [TypographyModes.LISTLIKE]: 'font-general text-lg tracking-normal text-start',
  [TypographyModes.TITULAR]: 'font-titular text-5xl tracking-wide pb-10',
  [TypographyModes.PRIMARYPLUS]: 'font-general text-lg tracking-wide uppercase',
  [TypographyModes.CARDPOINT]: 'font-titular text-9xl tracking-wide drop-shadow-point-shadow',
};
