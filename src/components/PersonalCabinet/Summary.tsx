import React from 'react';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import SummaryData from '../../data/CabinetSummary/CabinetSummary.json';
import { ReactComponent as SummarySprite } from '../../data/CabinetSummary/CabinetSummarySprite.svg';
import IconPrimitive from '../../primitives/IconPrimitive';
import { bgColors, textColors } from '../../themes/colors';
import LinkPrimitive from '../../primitives/LinkPrimitive';
import { fontSizes } from '../../themes/sizes';
import { Fonts } from '../../themes/fonts';

function Summary() {
  return (
    <div className="ml-5 flex flex-col">
      <SummarySprite className="hidden" />
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
        {SummaryData.title}
      </TypographyPrimitive>
      <TypographyPrimitive
        as="p"
        mode={TypographyModes.PRIMARY}
        fontSize={fontSizes.LARGE}
        font={Fonts.GENERALBOLD}
      >
        {SummaryData.description}
      </TypographyPrimitive>
      <div>
        <TypographyPrimitive as="h3" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
          {SummaryData.goalsSection.title}
        </TypographyPrimitive>
        {SummaryData.goalsSection.goals.map((goal) => (
          <div
            key={goal.text}
            className="mb-2.5 -ml-5 flex w-full max-w-[600px] flex-col items-center gap-2 rounded-r bg-bronze pl-5 sm:flex-row"
          >
            <IconPrimitive
              spriteId={goal.spriteId}
              bgColor={bgColors.BLACK}
              color={textColors.GOLD}
              bgSize="w-[90%] h-10 sm:w-10"
            />
            <TypographyPrimitive
              as="p"
              mode={TypographyModes.LISTLIKE}
              fontSize={fontSizes.LARGEADAPTIVE}
              color={textColors.LIGHTGOLD}
            >
              {goal.text}
            </TypographyPrimitive>
          </div>
        ))}
        <div className={`${bgColors.BLACK} -ml-5 py-2 pl-5`}>
          <TypographyPrimitive
            as="p"
            mode={TypographyModes.PRIMARY}
            color={textColors.WHITE}
            font={Fonts.GENERALMEDIUM}
          >
            {SummaryData.goalsSection.linkText}
            <LinkPrimitive href={SummaryData.goalsSection.link}>
              <TypographyPrimitive color={textColors.GOLD}>
                {SummaryData.goalsSection.link}
              </TypographyPrimitive>
            </LinkPrimitive>
          </TypographyPrimitive>
        </div>
      </div>
      <div>
        <TypographyPrimitive as="h3" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
          {SummaryData.achievementsSection.title}
        </TypographyPrimitive>
        <div className={`${bgColors.BRONZE} -ml-5 py-2 pl-5`}>
          {SummaryData.achievementsSection.achievements.map((achievement) => (
            <TypographyPrimitive
              as="p"
              mode={TypographyModes.LISTLIKE}
              font={Fonts.GENERALMEDIUM}
              color={textColors.LIGHTGOLD}
              key={achievement.text}
            >
              {achievement.text}
            </TypographyPrimitive>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Summary);
