import React, { useCallback, useState } from 'react';
import AdditionalInfoData from '../../data/CadinetsAdditionalInfo/AdditionalIfo.json';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import toggleItemDisplay from '../../utils/toggleItemDisplay';
import { Fonts } from '../../themes/fonts';
import { hoverTextColors, textColors } from '../../themes/colors';
import { fontSizes } from '../../themes/sizes';
import LinkPrimitive from '../../primitives/LinkPrimitive';

function CabinetAdditionalInfo() {
  const [answersOpen, setAnswersOpen] = useState<string[]>([]);

  const toggleAnswerDisplay = useCallback(toggleItemDisplay(answersOpen, setAnswersOpen), [
    answersOpen,
  ]);

  return (
    <div>
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
        {AdditionalInfoData.title}
      </TypographyPrimitive>
      {AdditionalInfoData.faq.map((faq, index) => (
        <div
          key={faq.question}
          className="my-2 cursor-pointer bg-black py-2 pl-1 sm:pl-2 xsm:pl-2"
          onClick={() => toggleAnswerDisplay(index.toString())}
        >
          <TypographyPrimitive
            as="p"
            mode={TypographyModes.PRIMARYPLUS}
            font={Fonts.GENERALBOLD}
            fontSize={fontSizes.DEFAULTADAPTIVE}
            color={textColors.LIGHTGOLD}
            hoverColor={hoverTextColors.GOLD}
          >
            {faq.question}
          </TypographyPrimitive>
          <div
            className={`overflow-hidden text-lightbronze transition-all duration-500 ${
              answersOpen.includes(index.toString()) ? 'max-h-[1000px]' : 'max-h-0 '
            }`}
          >
            {faq.answer.map((answerParagraph) =>
              answerParagraph.includes('https') ? (
                <LinkPrimitive href={answerParagraph}>
                  <TypographyPrimitive color={textColors.GOLD}>
                    {answerParagraph}
                  </TypographyPrimitive>
                </LinkPrimitive>
              ) : (
                <TypographyPrimitive
                  as={answerParagraph.match(/^[А-Я]/) ? 'p' : 'span'}
                  font={Fonts.GENERALMEDIUM}
                  key={answerParagraph.slice(0, 5)}
                >
                  {answerParagraph}
                </TypographyPrimitive>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(CabinetAdditionalInfo);
