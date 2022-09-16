import SectionPrimitive from '../../primitives/SectionPrimitive';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { Fonts } from '../../themes/fonts';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../themes/colors';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';
import { fontSizes } from '../../themes/sizes';
import React from 'react';

interface IDonateProps {
  data: {
    content: {
      question: string;
      answer: string;
      button: string;
    };
  };
}

function DonateSection({ data }: IDonateProps) {
  const { content } = data;
  return (
    <SectionPrimitive>
      <div className="flex flex-col items-center justify-between py-8 sm:flex-row">
        <div className="flex-col justify-between text-center sm:text-start">
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS} font={Fonts.GENERAL}>
            {content.question}
          </TypographyPrimitive>
          <TypographyPrimitive
            as="p"
            mode={TypographyModes.PRIMARY}
            color={textColors.GOLD}
            font={Fonts.GENERAL}
          >
            {content.answer}
          </TypographyPrimitive>
        </div>
        <ButtonPrimitive
          color={textColors.GOLD}
          bgColor={bgColors.BLACK}
          borderColor={borderColors.BLACK}
          afterColor={afterBgColors.GOLD}
          hoverTextColor={hoverTextColors.BLACK}
          additionalClasses="relative"
        >
          <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS} fontSize={fontSizes.SMALL}>
            {content.button}
          </TypographyPrimitive>
        </ButtonPrimitive>
      </div>
    </SectionPrimitive>
  );
}

export default React.memo(DonateSection);
