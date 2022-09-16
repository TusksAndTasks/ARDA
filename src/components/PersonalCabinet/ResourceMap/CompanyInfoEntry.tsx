import { bgColors, hoverTextColors, textColors } from '../../../themes/colors';
import TypographyPrimitive from '../../../primitives/TypographyPrimitive';
import { Fonts } from '../../../themes/fonts';
import { fontSizes } from '../../../themes/sizes';
import LinkPrimitive from '../../../primitives/LinkPrimitive';
import React from 'react';

export enum LineMode {
  LINKS = 'LINKS',
  POINTS = 'POINTS',
  TEXT = 'TEXT',
}

interface IEntryProps {
  entryData: string;
  mode: LineMode;
  bgColor?: bgColors;
  textColor?: textColors;
}

function CompanyInfoEntry({ entryData, mode, textColor, bgColor }: IEntryProps) {
  return mode === LineMode.LINKS ? (
    <LinkPrimitive href={entryData}>
      <TypographyPrimitive
        color={textColors.GOLD}
        font={Fonts.GENERALMEDIUM}
        fontSize={fontSizes.LARGEPLUSADAPTIVE}
        hoverColor={hoverTextColors.BRONZE}
      >
        {entryData}
      </TypographyPrimitive>
    </LinkPrimitive>
  ) : (
    <div key={entryData} className={`rounded-lg ${bgColor} p-2`}>
      <TypographyPrimitive as="p" font={Fonts.GENERALMEDIUM} color={textColor}>
        {entryData}
      </TypographyPrimitive>
    </div>
  );
}

export default React.memo(CompanyInfoEntry);
