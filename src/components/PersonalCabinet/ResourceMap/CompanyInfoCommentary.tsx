import { bgColors, textColors } from '../../../themes/colors';
import TypographyPrimitive from '../../../primitives/TypographyPrimitive';
import { Fonts } from '../../../themes/fonts';
import React from 'react';

interface ICommentaryProps {
  commentary: string;
  commentaryName: string;
  openCommentary: Array<string>;
  toggleCommentaryDisplay: (id: string) => void;
  textColor: textColors;
  bgColor: bgColors;
}

function CompanyInfoCommentary({
  commentary,
  commentaryName,
  openCommentary,
  toggleCommentaryDisplay,
  textColor,
  bgColor,
}: ICommentaryProps) {
  return (
    <div
      className={`cursor-pointer overflow-y-hidden rounded-lg ${bgColor} p-1 transition-all duration-500 hover:h-auto xl:w-[500px] ${
        openCommentary && openCommentary.includes(commentaryName) ? 'max-h-[1000px]' : 'max-h-8'
      }`}
      onClick={() => toggleCommentaryDisplay && toggleCommentaryDisplay(commentaryName)}
    >
      <TypographyPrimitive font={Fonts.GENERALMEDIUM} color={textColor}>
        {commentary}
      </TypographyPrimitive>
    </div>
  );
}

export default React.memo(CompanyInfoCommentary);
