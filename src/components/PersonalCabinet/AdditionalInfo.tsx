import React, { useCallback, useState } from 'react';
import AdditionalInfoData from '../../data/CadinetsAdditionalInfo/AdditionalIfo.json';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import toggleItemDisplay from '../../utils/toggleItemDisplay';

function AdditionalInfo() {
  const [answersOpen, setAnswersOpen] = useState<string[]>([]);

  const toggleAnswerDisplay = useCallback(toggleItemDisplay(answersOpen, setAnswersOpen), [
    answersOpen,
  ]);

  return (
    <div>
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
        {AdditionalInfoData.title}
      </TypographyPrimitive>
      {AdditionalInfoData.faq.map((faq, index) => (
        <div key={faq.question} onClick={() => toggleAnswerDisplay(index.toString())}>
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS}>
            {faq.question}
          </TypographyPrimitive>
          <div
            className={`overflow-hidden transition-all ${
              answersOpen.includes(index.toString()) ? 'max-h-auto' : 'max-h-0 '
            }`}
          >
            <TypographyPrimitive as="p">{faq.answer}</TypographyPrimitive>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(AdditionalInfo);
