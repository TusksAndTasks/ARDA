import SectionPrimitive from '../../primitives/SectionPrimitive';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { fontSizes } from '../../themes/sizes';
import { Fonts } from '../../themes/fonts';
import React from 'react';

interface ITitularSectionProps {
  data: {
    title: string;
    content: string;
  };
}

function titularSection({ data }: ITitularSectionProps) {
  const { title, content } = data;

  return (
    <SectionPrimitive>
      <TypographyPrimitive
        as="h1"
        mode={TypographyModes.TITULAR}
        fontSize={fontSizes.ULTRALARGEADAPTIVE}
      >
        {title}
      </TypographyPrimitive>
      <TypographyPrimitive
        as="p"
        mode={TypographyModes.PRIMARY}
        fontSize={fontSizes.DEFAULT}
        font={Fonts.GENERALMEDIUM}
      >
        {content}
      </TypographyPrimitive>
    </SectionPrimitive>
  );
}

export default React.memo(titularSection);
