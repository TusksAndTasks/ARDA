import SectionPrimitive, { SectionModes } from '../../primitives/SectionPrimitive';
import { bgColors } from '../../themes/colors';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { fontSizes } from '../../themes/sizes';
import { Fonts } from '../../themes/fonts';
import React from 'react';

interface IMainPointProps {
  data: {
    title: string;
    content: Array<string>;
  };
}

function MainPointSection({ data }: IMainPointProps) {
  const { title, content } = data;
  return (
    <SectionPrimitive
      mode={SectionModes.WITHPATTERN}
      bgColor={bgColors.GOLD}
      customHeight="h-[900px] sm:h-[450px] xsm:h-[640px] xl:h-[270px] md:h-[420px] "
    >
      <div className="flex flex-col items-center gap-3">
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
          {title}
        </TypographyPrimitive>
        {content.map((text) => (
          <div key={text.slice(0, 5)} className="w-5/6">
            <TypographyPrimitive
              as="p"
              mode={TypographyModes.PRIMARY}
              fontSize={fontSizes.DEFAULT}
              font={Fonts.GENERALBOLD}
            >
              {text}
            </TypographyPrimitive>
          </div>
        ))}
      </div>
    </SectionPrimitive>
  );
}

export default React.memo(MainPointSection);
