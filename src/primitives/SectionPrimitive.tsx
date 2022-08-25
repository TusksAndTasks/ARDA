import React from 'react';

interface ISectionPrimitiveProps {
  mode?: SectionModes;
  children?: React.ReactNode;
}

enum SectionModes {
  GENERAL = 'GENERAL',
  ICONLIST = 'ICONLIST',
}

function SectionPrimitive({ mode = SectionModes.GENERAL, children }: ISectionPrimitiveProps) {
  return <section className={SectionStylesMap[mode]}>{children}</section>;
}

export default React.memo(SectionPrimitive);

const SectionStylesMap = {
  [SectionModes.GENERAL]: 'flex-col pt-10',
  [SectionModes.ICONLIST]: 'flex-col',
};
