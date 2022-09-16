import SectionPrimitive, { SectionModes } from '../../primitives/SectionPrimitive';
import { bgColors, textColors } from '../../themes/colors';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { fontSizes, squareSizes } from '../../themes/sizes';
import IconPrimitive from '../../primitives/IconPrimitive';
import { Fonts } from '../../themes/fonts';
import React, { useState } from 'react';
import toggleItemDisplay from '../../utils/toggleItemDisplay';

interface IMissionProps {
  data: {
    title: string;
    content: Array<{ icon: string; text: string }>;
  };
}

function MissionSection({ data }: IMissionProps) {
  const { title, content } = data;
  const [cardsOpen, setCardsOpen] = useState<Array<string>>([]);
  const toggleCardsDisplay = toggleItemDisplay(cardsOpen, setCardsOpen);
  return (
    <SectionPrimitive
      bgColor={bgColors.BLACK}
      mode={SectionModes.WITHBACKGROUND}
      customHeight="h-[875px] xsm:h-[500px] sm:h-[330px]"
    >
      <TypographyPrimitive
        as="h2"
        mode={TypographyModes.TITULAR}
        fontSize={fontSizes.ULTRALARGE}
        color={textColors.GOLD}
      >
        {title}
      </TypographyPrimitive>
      <div className="flex flex-col flex-wrap items-center justify-between gap-5 sm:flex-row sm:flex-nowrap xsm:flex-row">
        {content.map((contentEntry) => (
          <div
            className={`flex cursor-pointer flex-col content-center items-center gap-2 overflow-hidden rounded-md border-2 border-gold pb-5 text-center transition-all
              ${
                cardsOpen.includes(contentEntry.text)
                  ? 'h-[160px] w-[160px] lg:h-[228px] lg:w-[228px]'
                  : 'h-[110px] w-[110px] lg:h-[168px] lg:w-[168px]'
              }`}
            key={contentEntry.text.slice(0, 5)}
            onClick={() => {
              toggleCardsDisplay(contentEntry.text);
            }}
          >
            <IconPrimitive
              spriteId={contentEntry.icon}
              size={squareSizes.BIGADAPTIVE}
              bgSize={squareSizes.BIGPLUS}
              color={textColors.GOLD}
              bgColor={bgColors.BLACK}
            />
            <TypographyPrimitive
              as="p"
              mode={TypographyModes.PRIMARY}
              color={textColors.GOLD}
              font={Fonts.GENERAL}
            >
              {contentEntry.text}
            </TypographyPrimitive>
          </div>
        ))}
      </div>
    </SectionPrimitive>
  );
}

export default React.memo(MissionSection);
