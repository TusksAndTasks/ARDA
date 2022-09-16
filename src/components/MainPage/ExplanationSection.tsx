import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { fontSizes } from '../../themes/sizes';
import { afterBgColors, borderColors, hoverTextColors, textColors } from '../../themes/colors';
import { Fonts } from '../../themes/fonts';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';
import SectionPrimitive from '../../primitives/SectionPrimitive';
import React, { useCallback } from 'react';

interface IExplanationProps {
  data: {
    title: string;
    content: {
      cards: Array<{ point: string; text: string }>;
      button: string;
    };
  };
}

function ExplanationSection({ data }: IExplanationProps) {
  const { title, content } = data;
  const goToMainSite = useCallback(() => {
    location.href = 'https://arda.digital/';
  }, []);
  return (
    <SectionPrimitive>
      <TypographyPrimitive as="h2" fontSize={fontSizes.ULTRALARGE} mode={TypographyModes.TITULAR}>
        {title}
      </TypographyPrimitive>
      <div className="mb-5 flex flex-col items-start justify-between sm:items-center lg:flex-row">
        {content.cards.map((card) => (
          <div key={card.point} className="flex-col items-center justify-center">
            <TypographyPrimitive as="h3" mode={TypographyModes.CARDPOINT} color={textColors.GOLD}>
              {card.point}
            </TypographyPrimitive>
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS} font={Fonts.GENERAL}>
              {card.text}
            </TypographyPrimitive>
          </div>
        ))}
      </div>
      <ButtonPrimitive
        color={textColors.BLACK}
        borderColor={borderColors.BLACK}
        afterColor={afterBgColors.BLACK}
        hoverTextColor={hoverTextColors.GOLD}
        additionalClasses="relative"
        onClick={goToMainSite}
      >
        <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS} font={Fonts.GENERAL}>
          {content.button}
        </TypographyPrimitive>
      </ButtonPrimitive>
    </SectionPrimitive>
  );
}

export default React.memo(ExplanationSection);
