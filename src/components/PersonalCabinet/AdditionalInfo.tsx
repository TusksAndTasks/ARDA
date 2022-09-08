import React, { useState } from 'react';
import AdditionalInfoData from '../../data/CadinetsAdditionalInfo/AdditionalIfo.json';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';

function AdditionalInfo() {
  const [answersOpen, setAnswersOpen] = useState<number[]>([]);

  return (
    <div>
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
        {AdditionalInfoData.title}
      </TypographyPrimitive>
      {AdditionalInfoData.faq.map((faq, index) => (
        <div
          key={faq.question}
          onClick={() => {
            answersOpen.includes(index)
              ? setAnswersOpen(answersOpen.filter((answerId) => answerId !== index))
              : setAnswersOpen([...answersOpen, index]);
          }}
        >
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS}>
            {faq.question}
          </TypographyPrimitive>
          <div
            className={`overflow-hidden transition-all ${
              answersOpen.includes(index) ? 'max-h-auto' : 'max-h-0 '
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
