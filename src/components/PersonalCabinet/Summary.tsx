import React from 'react';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import SummaryData from '../../data/PersonalCabinetSummary.json';
import { ReactComponent as SummarySprite } from '../../data/PersonalCabinetSummarySprite.svg';
import IconPrimitive from '../../primitives/IconPrimitive';
import { bgColors, textColors } from '../../themes/colors';
import LinkPrimitive from '../../primitives/LinkPrimitive';

function Summary() {
  return (
    <div className="ml-2.5 flex flex-col">
      <SummarySprite className="hidden" />
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
        {SummaryData.title}
      </TypographyPrimitive>
      <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
        {SummaryData.description}
      </TypographyPrimitive>
      <div>
        <TypographyPrimitive as="h3" mode={TypographyModes.TITULAR}>
          {SummaryData.goalsSection.title}
        </TypographyPrimitive>
        {SummaryData.goalsSection.goals.map((goal) => (
          <div key={goal.text} className="mb-2.5 flex items-center gap-2">
            <IconPrimitive
              spriteId={goal.spriteId}
              bgColor={bgColors.BLACK}
              color={textColors.GOLD}
            />
            <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE}>
              {goal.text}
            </TypographyPrimitive>
          </div>
        ))}
        <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
          {SummaryData.goalsSection.linkText}
          <LinkPrimitive href={SummaryData.goalsSection.link}>
            {SummaryData.goalsSection.link}
          </LinkPrimitive>
        </TypographyPrimitive>
      </div>
      <div>
        <TypographyPrimitive as="h3" mode={TypographyModes.TITULAR}>
          {SummaryData.achievementsSection.title}
        </TypographyPrimitive>
        {SummaryData.achievementsSection.achievements.map((achievement) => (
          <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE} key={achievement.text}>
            {achievement.text}
          </TypographyPrimitive>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Summary);
