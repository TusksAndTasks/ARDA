import { bgColors, hoverTextColors, textColors } from '../../../themes/colors';
import TypographyPrimitive from '../../../primitives/TypographyPrimitive';
import { fontSizes } from '../../../themes/sizes';
import { Fonts } from '../../../themes/fonts';
import React from 'react';
import CompanyInfoEntry, { LineMode } from './CompanyInfoEntry';
import CompanyInfoCommentary from './CompanyInfoCommentary';

interface IInfoProps {
  text: string;
  data?: string | Array<string>;
  mode: LineMode;
  textColor?: textColors;
  bgColor?: bgColors;
  hoverColor?: hoverTextColors;
  commentary?: string;
  commentaryName?: string;
  openCommentary?: Array<string>;
  toggleCommentaryDisplay?: (id: string) => void;
}

function CompanyInfoLine({
  text,
  data = '',
  mode,
  textColor = textColors.BLACK,
  bgColor = bgColors.WHITE,
  commentary,
  commentaryName = 'default',
  openCommentary,
  toggleCommentaryDisplay,
}: IInfoProps) {
  const standardizedData = Array.isArray(data) ? data : data.split(' ');

  return (
    <div className="flex flex-wrap items-center gap-2">
      <TypographyPrimitive
        as="h3"
        color={textColors.LIGHTGOLD}
        fontSize={fontSizes.LARGEPLUSADAPTIVE}
        font={Fonts.GENERALMEDIUM}
      >
        {text}
      </TypographyPrimitive>
      {standardizedData.map((entryData) => (
        <CompanyInfoEntry
          key={entryData}
          entryData={entryData}
          textColor={textColor}
          bgColor={bgColor}
          mode={mode}
        />
      ))}
      {commentary && (
        <CompanyInfoCommentary
          commentary={commentary}
          commentaryName={commentaryName}
          openCommentary={openCommentary!}
          toggleCommentaryDisplay={toggleCommentaryDisplay!}
          bgColor={bgColor}
          textColor={textColor}
        />
      )}
    </div>
  );
}

export default React.memo(CompanyInfoLine);
