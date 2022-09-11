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
      'absolute w-full left-0 -z-10 bg-no-repeat bg-triangle-pattern bg-partial-pattern-xsm bg-pattern-pos after:absolute after:top-0 after:h-full after:w-full after:bg-no-repeat after:rotate-180 after:bg-triangle-pattern after:bg-partial-pattern-xsm after:bg-pattern-pos xsm:bg-partial-pos-xsm xsm:after:bg-partial-pos-xsm sm:pattern-pos-sm sm:after:pattern-pos-sm  md:bg-pattern-pos-md md:bg-partial-pattern-md md:after:bg-pattern-pos-md md:after:bg-partial-pattern-md lg:bg-partial-pattern-lg lg:bg-pattern-pos-lg lg:after:bg-pattern-pos-lg lg:after:bg-partial-pattern-lg  xl:bg-partial-pattern-xl xl:bg-pattern-pos-xl xl:after:bg-partial-pattern-xl xl:after:bg-pattern-pos-xl',
  },
};

// absolute left-0 -z-10 w-full bg-no-repeat bg-partial-pattern bg-pattern-pos xsm:bg-partial-pattern-xsm xsm:bg-partial-pos-xsm xl:bg-partial-pattern-xl bg-triangle-pattern xl:bg-pattern-pos-xl md:bg-pattern-pos-md after:absolute after:top-0 after:h-full after:w-full xl:after:bg-partial-pattern-xl xsm:after:bg-triangle-pattern after:bg-no-repeat xl:after:bg-pattern-pos-xl md:after:bg-pattern-pos-md xsm:after:bg-partial-pattern-xsm xsm:after:bg-partial-pos-xsm after:rotate-180 md:bg-partial-pattern-md md:after:bg-partial-pattern-md
// xl:h-[270px] md:h-[420px] lg:h-[320px] xsm:h-[640px] h-[1230px] sm:h-[450px]
// absolute w-full left-0 -z-10 bg-no-repeat xl:bg-partial-pattern-xl bg-triangle-pattern xl:bg-pattern-pos-xl after:absolute after:top-0 after:h-full after:w-full xl:after:bg-partial-pattern-xl after:bg-no-repeat xl:after:bg-pattern-pos-xl after:bg-triangle-pattern after:rotate-180'
