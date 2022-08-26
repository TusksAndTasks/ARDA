import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import React from 'react';
import SectionPrimitive from '../../primitives/SectionPrimitive';
import MainPageData from '../../data/MainPage.json';
import IconPrimitive from '../../primitives/IconPrimitive';
import { squareSizes } from '../../themes/sizes';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../themes/colors';
import { ReactComponent as MainPageSprite } from '../../data/MainPageSprite.svg';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';
import PartnersList from './PartnersList';

function MainPage() {
  return (
    <div className="container px-10">
      <MainPageSprite className="hidden" />
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
              spriteId={content.icon}
              size={squareSizes.MEDIUM}
              bgSize={squareSizes.MEDIUMPLUS}
              color={textColors.BRONZE}
              bgColor={bgColors.LIGHTGOLD}
            />
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
              spriteId={content.icon}
              size={squareSizes.MEDIUM}
              bgSize={squareSizes.MEDIUMPLUS}
              color={textColors.BRONZE}
              bgColor={bgColors.LIGHTGOLD}
            />
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
              spriteId={content.icon}
              size={squareSizes.MEDIUM}
              bgSize={squareSizes.MEDIUMPLUS}
              color={textColors.BRONZE}
              bgColor={bgColors.LIGHTGOLD}
            />
            <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE}>
              {content.text}
            </TypographyPrimitive>
          </div>
        ))}
      </SectionPrimitive>
      <SectionPrimitive>
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
          {MainPageData.ConditionsSection.title}
        </TypographyPrimitive>
        {MainPageData.ConditionsSection.content.map((content) => (
          <div key={content.text.slice(0, 5)} className="flex-col items-start justify-start">
            <div className="flex w-5/6 content-center items-center gap-2 text-start">
              <IconPrimitive
                spriteId={content.icon}
                size={squareSizes.MEDIUM}
                bgSize={squareSizes.MEDIUMPLUS}
                color={textColors.BRONZE}
                bgColor={bgColors.LIGHTGOLD}
              />
              <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE}>
                {content.text}
              </TypographyPrimitive>
            </div>
            <IconPrimitive
              spriteId="ArrowDown"
              size={squareSizes.MEDIUM}
              bgSize={squareSizes.MEDIUMPLUS}
            ></IconPrimitive>
          </div>
        ))}
        <div className="flex items-center justify-start gap-4">
          <ButtonPrimitive
            color={textColors.LIGHTBRONZE}
            bgColor={bgColors.TRANSPARENT}
            borderColor={borderColors.LIGHTBRONZE}
            afterColor={afterBgColors.LIGHTBRONZE}
            hoverTextColor={hoverTextColors.GOLD}
            additionalClasses="relative"
          >
            <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS}>
              {MainPageData.ConditionsSection.closerInfo.button}
            </TypographyPrimitive>
          </ButtonPrimitive>
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
            {MainPageData.ConditionsSection.closerInfo.text}
          </TypographyPrimitive>
        </div>
      </SectionPrimitive>
      <SectionPrimitive>
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
          {MainPageData.PartnersSection.title}
        </TypographyPrimitive>
        <PartnersList />
      </SectionPrimitive>
      <SectionPrimitive>
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
          {MainPageData.ExplanationSection.title}
        </TypographyPrimitive>
        <div className="flex justify-between">
          {MainPageData.ExplanationSection.content.cards.map((card) => (
            <div key={card.point} className="flex-col items-center justify-center">
              <TypographyPrimitive as="h3" mode={TypographyModes.CARDPOINT} color={textColors.GOLD}>
                {card.point}
              </TypographyPrimitive>
              <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS}>
                {card.text}
              </TypographyPrimitive>
            </div>
          ))}
        </div>
        <ButtonPrimitive
          color={textColors.BRONZE}
          borderColor={borderColors.BRONZE}
          afterColor={afterBgColors.GOLD}
          hoverTextColor={hoverTextColors.BRONZE}
          additionalClasses="relative"
        >
          <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS}>
            {MainPageData.ExplanationSection.content.button}
          </TypographyPrimitive>
        </ButtonPrimitive>
      </SectionPrimitive>
      <SectionPrimitive>
        <div className="flex items-center justify-between">
          <div className="flex-col items-start justify-between">
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS}>
              {MainPageData.DonateSection.content.question}
            </TypographyPrimitive>
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} color={textColors.GOLD}>
              {MainPageData.DonateSection.content.answer}
            </TypographyPrimitive>
          </div>
          <ButtonPrimitive
            color={textColors.LIGHTGOLD}
            bgColor={bgColors.BLACK}
            borderColor={borderColors.BLACK}
            afterColor={afterBgColors.LIGHTGOLD}
            hoverTextColor={hoverTextColors.GOLD}
            additionalClasses="relative"
          >
            {MainPageData.DonateSection.content.button}
          </ButtonPrimitive>
        </div>
      </SectionPrimitive>
    </div>
  );
}

export default React.memo(MainPage);
