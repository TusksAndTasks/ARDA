import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import { fontSizes } from '../../../themes/sizes';
import PartnersList from './PartnersList';
import SectionPrimitive from '../../../primitives/SectionPrimitive';
import React from 'react';

interface IPartnershipProps {
  data: {
    title: string;
    partners: Array<string>;
    content: {
      buttonClose: string;
      buttonOpen: string;
    };
  };
}

function PartnersSection({ data }: IPartnershipProps) {
  const { title, partners, content } = data;
  return (
    <SectionPrimitive>
      <TypographyPrimitive as="h2" fontSize={fontSizes.ULTRALARGE} mode={TypographyModes.TITULAR}>
        {title}
      </TypographyPrimitive>
      <PartnersList partners={partners} content={content} />
    </SectionPrimitive>
  );
}

export default React.memo(PartnersSection);
