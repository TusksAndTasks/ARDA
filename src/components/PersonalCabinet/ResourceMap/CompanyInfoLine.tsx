import { bgColors, hoverTextColors, textColors } from '../../../themes/colors';
import TypographyPrimitive from '../../../primitives/TypographyPrimitive';
import { fontSizes } from '../../../themes/sizes';
import { Fonts } from '../../../themes/fonts';
import LinkPrimitive from '../../../primitives/LinkPrimitive';
import React from 'react';

interface IInfoProps {
  text: string;
  data: string | Array<string>;
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
  data,
  textColor = textColors.BLACK,
  bgColor = bgColors.WHITE,
  hoverColor = hoverTextColors.NONE,
  commentary,
  commentaryName = 'default',
  openCommentary,
  toggleCommentaryDisplay,
}: IInfoProps) {
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
      {Array.isArray(data) ? (
        data.map((dataEntry) => (
          <div key={dataEntry} className={`rounded-lg ${bgColor} p-2`}>
            <TypographyPrimitive as="p" font={Fonts.GENERALMEDIUM} color={textColor}>
              {dataEntry}
            </TypographyPrimitive>
          </div>
        ))
      ) : (
        <LinkPrimitive href={data}>
          <TypographyPrimitive
            color={textColor}
            font={Fonts.GENERALMEDIUM}
            fontSize={fontSizes.LARGEPLUSADAPTIVE}
            hoverColor={hoverColor}
          >
            {data}
          </TypographyPrimitive>
        </LinkPrimitive>
      )}
      {commentary && (
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
      )}
    </div>
  );
}

export default React.memo(CompanyInfoLine);
