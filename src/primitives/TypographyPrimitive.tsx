import React from 'react';

interface ITypographyProps {
  as?: keyof HTMLElementTagNameMap;
  mode?: TypographyModes;
  children?: React.ReactNode;
}

enum TypographyModes {
  PRIMARY = 'PRIMARY',
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
  [TypographyModes.PRIMARY]: 'font-general text-base tracking-widest',
};
