import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import React from 'react';
import SectionPrimitive from '../../primitives/SectionPrimitive';
import MainPageData from '../../data/MainPage.json';
import IconPrimitive from '../../primitives/IconPrimitive';
import { squareSizes } from '../../themes/sizes';
import { bgColors, textColors } from '../../themes/colors';
import { MainPageIcons } from '../../data/MainPageIcons';

function MainPage() {
  return (
    <div className="container px-10">
      <SectionPrimitive>
        <TypographyPrimitive as="h1" mode={TypographyModes.TITULAR}>
          {MainPageData.TitularSection.title}
        </TypographyPrimitive>
        <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
          {MainPageData.TitularSection.content}
        </TypographyPrimitive>
      </SectionPrimitive>
      <SectionPrimitive>
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
          {MainPageData.MainPointSection.title}
        </TypographyPrimitive>
        {MainPageData.MainPointSection.content.map((text) => (
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} key={text.slice(0, 5)}>
            {text}
          </TypographyPrimitive>
        ))}
      </SectionPrimitive>
      <SectionPrimitive>
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
          {MainPageData.ProblemsSection.title}
        </TypographyPrimitive>
        {MainPageData.ProblemsSection.content.map((content) => (
          <div
            className="flex w-5/6 content-center items-center gap-2 pb-5 text-start"
            key={content.text.slice(0, 5)}
          >
            <IconPrimitive
              size={squareSizes.MEDIUM}
              bgSize={squareSizes.MEDIUMPLUS}
              color={textColors.BRONZE}
              bgColor={bgColors.LIGHTGOLD}
            >
              {MainPageIcons[content.icon as keyof typeof MainPageIcons]}
            </IconPrimitive>
            <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE}>
              {content.text}
            </TypographyPrimitive>
          </div>
        ))}
      </SectionPrimitive>
      <SectionPrimitive>
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
          {MainPageData.MissionSection.title}
        </TypographyPrimitive>
        {MainPageData.MissionSection.content.map((content) => (
          <div
            className="flex w-5/6 content-center items-center gap-2 pb-5 text-start"
            key={content.text.slice(0, 5)}
          >
            <IconPrimitive
              size={squareSizes.MEDIUM}
              bgSize={squareSizes.MEDIUMPLUS}
              color={textColors.BRONZE}
              bgColor={bgColors.LIGHTGOLD}
            >
              {MainPageIcons[content.icon as keyof typeof MainPageIcons]}
            </IconPrimitive>
            <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE}>
              {content.text}
            </TypographyPrimitive>
          </div>
        ))}
      </SectionPrimitive>
      <SectionPrimitive>
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
          {MainPageData.ProfitSection.title}
        </TypographyPrimitive>
        {MainPageData.ProfitSection.content.map((content) => (
          <div
            className="flex w-5/6 content-center items-center gap-2 pb-5 text-start"
            key={content.text.slice(0, 5)}
          >
            <IconPrimitive
              size={squareSizes.MEDIUM}
              bgSize={squareSizes.MEDIUMPLUS}
              color={textColors.BRONZE}
              bgColor={bgColors.LIGHTGOLD}
            >
              {MainPageIcons[content.icon as keyof typeof MainPageIcons]}
            </IconPrimitive>
            <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE}>
              {content.text}
            </TypographyPrimitive>
          </div>
        ))}
      </SectionPrimitive>
    </div>
  );
}

export default React.memo(MainPage);

// <div className="bg-amber-300 text-3xl font-bold">
//   Upper Text
//   <IconPrimitive
//     color={textColors.GOLD}
//     bgColor={bgColors.BLACK}
//     size={squareSizes.MEDIUM}
//     bgSize={squareSizes.MEDIUMPLUS}
//   >
//     <path stroke="none" d="M0 0h24v24H0z" />
//     <polyline points="3 17 9 11 13 15 21 7" />
//     <polyline points="14 7 21 7 21 14" />
//   </IconPrimitive>
//   <ButtonPrimitive>
//     <TypographyPrimitive>ClickMe</TypographyPrimitive>
//   </ButtonPrimitive>
// </div>
