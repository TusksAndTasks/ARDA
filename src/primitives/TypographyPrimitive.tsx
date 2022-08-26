import React from 'react';

interface ITypographyProps {
  as?: keyof HTMLElementTagNameMap;
  mode?: TypographyModes;
  children?: React.ReactNode;
}

export enum TypographyModes {
  PRIMARY = 'PRIMARY',
  PRIMARYPLUS = 'PRIMARYXL',
  TITULAR = 'TITULAR',
  LISTLIKE = 'LISTLIKE',
}

function TypographyPrimitive({
  as = 'span',
  mode = TypographyModes.PRIMARY,
  children,
}: ITypographyProps) {
  return React.createElement(as, { className: TypographyStyleMap[mode] }, children);
}

export default React.memo(TypographyPrimitive);

const TypographyStyleMap = {
  [TypographyModes.PRIMARY]: 'font-general text-base tracking-normal',
  [TypographyModes.LISTLIKE]: 'font-general text-lg tracking-normal text-start',
  [TypographyModes.TITULAR]: 'font-titular text-5xl tracking-wide pb-10',
  [TypographyModes.PRIMARYPLUS]: 'font-general text-lg tracking-wide uppercase',
};
