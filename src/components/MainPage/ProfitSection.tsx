import SectionPrimitive, { SectionModes } from '../../primitives/SectionPrimitive';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { fontSizes, squareSizes } from '../../themes/sizes';
import IconPrimitive from '../../primitives/IconPrimitive';
import { bgColors, textColors } from '../../themes/colors';
import { Fonts } from '../../themes/fonts';
import React from 'react';

interface IProfitProps {
  data: {
    title: string;
    content: Array<{ icon: string; text: string }>;
  };
}

function ProfitSection({ data }: IProfitProps) {
  const { title, content } = data;
  return (
    <SectionPrimitive mode={SectionModes.ICONLIST}>
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
        {title}
      </TypographyPrimitive>
      {content.map((contentEntry) => (
        <div
          className="flex w-5/6 flex-col items-center gap-2 pb-5 text-start sm:flex-row"
          key={contentEntry.text.slice(0, 5)}
        >
          <IconPrimitive
            spriteId={contentEntry.icon}
            size={squareSizes.MEDIUM}
            bgSize="w-full h-16 sm:w-16"
            color={textColors.BLACK}
            bgColor={bgColors.GOLD}
          />
          <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE} font={Fonts.GENERAL}>
            {contentEntry.text}
          </TypographyPrimitive>
        </div>
      ))}
    </SectionPrimitive>
  );
}

export default React.memo(ProfitSection);
