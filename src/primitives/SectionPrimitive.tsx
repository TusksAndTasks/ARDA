import React from 'react';
import { bgColors } from '../themes/colors';

interface ISectionPrimitiveProps {
  mode?: SectionModes;
  children?: React.ReactNode;
  bgColor?: bgColors;
  customHeight?: string;
}

export enum SectionModes {
  GENERAL = 'GENERAL',
  ICONLIST = 'ICONLIST',
  WITHBACKGROUND = 'WITHBACKGROUND',
  WITHPATTERN = 'WITHPATTERN',
}

function SectionPrimitive({
  mode = SectionModes.GENERAL,
  bgColor = bgColors.TRANSPARENT,
  customHeight = 'h-fit',
  children,
}: ISectionPrimitiveProps) {
  return (
    <section className={`${SectionStylesMap[mode].section} ${customHeight}`}>
      <div className={`${SectionStylesMap[mode].background} ${bgColor} ${customHeight}`}></div>
      {children}
    </section>
  );
}

export default React.memo(SectionPrimitive);

const SectionStylesMap = {
  [SectionModes.GENERAL]: { section: 'pt-10', background: '' },
  [SectionModes.ICONLIST]: { section: 'pt-10 flex flex-col items-center', background: '' },
  [SectionModes.WITHBACKGROUND]: {
    section: 'py-10',
    background: 'absolute left-0 -z-10 w-full',
  },
  [SectionModes.WITHPATTERN]: {
    section: 'py-10',
    background:
      'absolute left-0 -z-10 w-full bg-no-repeat bg-partial-pattern bg-triangle-pattern bg-left-side after:absolute after:top-0 after:h-full after:w-full after:bg-partial-pattern after:bg-triangle-pattern after:bg-no-repeat after:bg-left-side after:rotate-180',
  },
};
