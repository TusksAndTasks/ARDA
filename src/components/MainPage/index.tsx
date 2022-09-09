import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import React, { useCallback, useState } from 'react';
import SectionPrimitive, { SectionModes } from '../../primitives/SectionPrimitive';
import MainPageData from '../../data/MainPage/MainPage.json';
import IconPrimitive from '../../primitives/IconPrimitive';
import { fontSizes, squareSizes } from '../../themes/sizes';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../themes/colors';
import { ReactComponent as MainPageSprite } from '../../data/MainPage/MainPageSprite.svg';
import ButtonPrimitive, { ButtonModes } from '../../primitives/ButtonPrimitive';
import PartnersList from './PartnersList';
import JoinForm from '../JoinForm';
import PopupPrimitive from '../../primitives/PopupPrimitive';
import InputPrimitive, { InputModes } from '../../primitives/InputPrimitive';
import { inputPlaceholderFunction } from '../../utils/inputPlaceholderFunction';
import LinkPrimitive from '../../primitives/LinkPrimitive';
import toggleItemDisplay from '../../utils/toggleItemDisplay';
import { Fonts } from '../../themes/fonts';
import { usePopups } from '../../hooks/usePopups';
import { popupIds } from '../../redux/slices/PopupSlice';

function MainPage() {
  const [closePopup, setActivePopup, activePopupId] = usePopups();

  const goToMainSite = useCallback(() => {
    location.href = 'https://arda.digital/';
  }, []);

  const [cardsOpen, setCardsOpen] = useState<Array<string>>([]);
  const toggleCardsDisplay = toggleItemDisplay(cardsOpen, setCardsOpen);

  //TODO: вот это точно объединить в один стейт с массивом строк
  const [isModalOpen, setIsModelOpen] = useState(false);

  return (
    <div className="container px-10">
      <MainPageSprite className="hidden" />
      <SectionPrimitive>
        <TypographyPrimitive as="h1" mode={TypographyModes.TITULAR}>
          {MainPageData.TitularSection.title}
        </TypographyPrimitive>
        <TypographyPrimitive
          as="p"
          mode={TypographyModes.PRIMARY}
          fontSize={fontSizes.DEFAULT}
          font={Fonts.GENERALMEDIUM}
        >
          {MainPageData.TitularSection.content}
        </TypographyPrimitive>
      </SectionPrimitive>
      <SectionPrimitive
        mode={SectionModes.WITHPATTERN}
        bgColor={bgColors.GOLD}
        customHeight="xl:h-[270px] md:h-[420px] lg:h-[320px] xsm:h-[640px] h-[1230px]"
      >
        <div className="flex flex-col items-center gap-3">
          <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
            {MainPageData.MainPointSection.title}
          </TypographyPrimitive>
          {MainPageData.MainPointSection.content.map((text) => (
            <div key={text.slice(0, 5)} className="w-5/6">
              <TypographyPrimitive
                as="p"
                mode={TypographyModes.PRIMARY}
                fontSize={fontSizes.DEFAULT}
                font={Fonts.GENERALBOLD}
              >
                {text}
              </TypographyPrimitive>
            </div>
          ))}
        </div>
      </SectionPrimitive>
      <SectionPrimitive mode={SectionModes.ICONLIST}>
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
              color={textColors.BLACK}
              bgColor={bgColors.GOLD}
            />
            <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE} font={Fonts.GENERAL}>
              {content.text}
            </TypographyPrimitive>
          </div>
        ))}
      </SectionPrimitive>
      <SectionPrimitive
        bgColor={bgColors.BLACK}
        mode={SectionModes.WITHBACKGROUND}
        customHeight="h-[330px]"
      >
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} color={textColors.GOLD}>
          {MainPageData.MissionSection.title}
        </TypographyPrimitive>
        <div className="flex items-center justify-between">
          {MainPageData.MissionSection.content.map((content) => (
            <div
              className={`flex cursor-pointer flex-col content-center items-center gap-2 overflow-hidden rounded-md border-2 border-gold pb-5 text-center transition-all
              ${cardsOpen.includes(content.text) ? 'h-[228px] w-[360px]' : 'h-[168px] w-[168px]'}`}
              key={content.text.slice(0, 5)}
              onClick={() => {
                toggleCardsDisplay(content.text);
              }}
            >
              <IconPrimitive
                spriteId={content.icon}
                size={squareSizes.BIG}
                bgSize={squareSizes.BIGPLUS}
                color={textColors.GOLD}
                bgColor={bgColors.BLACK}
              />
              <TypographyPrimitive
                as="p"
                mode={TypographyModes.PRIMARY}
                color={textColors.GOLD}
                font={Fonts.GENERAL}
              >
                {content.text}
              </TypographyPrimitive>
            </div>
          ))}
        </div>
      </SectionPrimitive>
      <SectionPrimitive mode={SectionModes.ICONLIST}>
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
              color={textColors.BLACK}
              bgColor={bgColors.GOLD}
            />
            <TypographyPrimitive as="p" mode={TypographyModes.LISTLIKE} font={Fonts.GENERAL}>
              {content.text}
            </TypographyPrimitive>
          </div>
        ))}
      </SectionPrimitive>
      <SectionPrimitive
        mode={SectionModes.WITHBACKGROUND}
        bgColor={bgColors.GOLD}
        customHeight="h-[1420px]"
      >
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} font={Fonts.GENERAL}>
          {MainPageData.ConditionsSection.title}
        </TypographyPrimitive>
        <div className="pl-5">
          {MainPageData.ConditionsSection.content.map((content) => (
            <div
              key={content.text.slice(0, 5)}
              className="flex w-full items-start gap-2 text-start"
            >
              <div className="flex flex-col items-center">
                <div className="rounded-md bg-black">
                  <IconPrimitive
                    spriteId={content.icon}
                    size={squareSizes.LARGE}
                    bgSize={squareSizes.LARGEPLUS}
                    color={textColors.GOLD}
                    bgColor={bgColors.TRANSPARENT}
                  />
                </div>
                <IconPrimitive
                  spriteId="ArrowDown"
                  size={squareSizes.LARGE}
                  bgSize={squareSizes.LARGE}
                  bgColor={bgColors.TRANSPARENT}
                ></IconPrimitive>
              </div>
              <div className="mt-5 h-full w-full rounded-md bg-black py-5 pl-5">
                <TypographyPrimitive
                  as="p"
                  mode={TypographyModes.LISTLIKE}
                  color={textColors.GOLD}
                  font={Fonts.GENERAL}
                >
                  {content.text}
                </TypographyPrimitive>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-start gap-4">
          <ButtonPrimitive
            color={textColors.BLACK}
            bgColor={bgColors.TRANSPARENT}
            borderColor={borderColors.BLACK}
            afterColor={afterBgColors.BLACK}
            hoverTextColor={hoverTextColors.GOLD}
            additionalClasses="relative"
            onClick={() => {
              setIsModelOpen(!isModalOpen);
            }}
          >
            <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS} font={Fonts.GENERAL}>
              {MainPageData.ConditionsSection.closerInfo.button}
            </TypographyPrimitive>
          </ButtonPrimitive>
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} font={Fonts.GENERALBOLD}>
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
        <div className="mb-5 flex justify-between">
          {MainPageData.ExplanationSection.content.cards.map((card) => (
            <div key={card.point} className="flex-col items-center justify-center">
              <TypographyPrimitive as="h3" mode={TypographyModes.CARDPOINT} color={textColors.GOLD}>
                {card.point}
              </TypographyPrimitive>
              <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS} font={Fonts.GENERAL}>
                {card.text}
              </TypographyPrimitive>
            </div>
          ))}
        </div>
        <ButtonPrimitive
          color={textColors.BLACK}
          borderColor={borderColors.BLACK}
          afterColor={afterBgColors.BLACK}
          hoverTextColor={hoverTextColors.GOLD}
          additionalClasses="relative"
          onClick={goToMainSite}
        >
          <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS} font={Fonts.GENERAL}>
            {MainPageData.ExplanationSection.content.button}
          </TypographyPrimitive>
        </ButtonPrimitive>
      </SectionPrimitive>
      <SectionPrimitive>
        <div className="flex items-center justify-between py-8">
          <div className="flex-col items-start justify-between">
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS} font={Fonts.GENERAL}>
              {MainPageData.DonateSection.content.question}
            </TypographyPrimitive>
            <TypographyPrimitive
              as="p"
              mode={TypographyModes.PRIMARY}
              color={textColors.GOLD}
              font={Fonts.GENERAL}
            >
              {MainPageData.DonateSection.content.answer}
            </TypographyPrimitive>
          </div>
          <ButtonPrimitive
            color={textColors.GOLD}
            bgColor={bgColors.BLACK}
            borderColor={borderColors.BLACK}
            afterColor={afterBgColors.GOLD}
            hoverTextColor={hoverTextColors.BLACK}
            additionalClasses="relative"
          >
            <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS} fontSize={fontSizes.SMALL}>
              {MainPageData.DonateSection.content.button}
            </TypographyPrimitive>
          </ButtonPrimitive>
        </div>
      </SectionPrimitive>
      {isModalOpen && <JoinForm />}
      {activePopupId === popupIds.AUTH && (
        <PopupPrimitive closePopup={closePopup}>
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS}>
            Авторизация
          </TypographyPrimitive>
          <InputPrimitive
            type="text"
            mode={InputModes.TEXTPRIMARY}
            textParams={{ placeholder: 'Логин' }}
            value=""
            onChange={inputPlaceholderFunction}
          />
          <InputPrimitive
            type="text"
            mode={InputModes.TEXTPRIMARY}
            textParams={{ placeholder: 'Пароль' }}
            value=""
            onChange={inputPlaceholderFunction}
          />
          <ButtonPrimitive
            mode={ButtonModes.SIMPLE}
            onClick={() => {
              setActivePopup(popupIds.PASSWORD);
            }}
            color={textColors.BLACK}
          >
            Забыли пароль?
          </ButtonPrimitive>
          <ButtonPrimitive
            mode={ButtonModes.PRIMARY}
            additionalClasses="relative"
            color={textColors.BLACK}
            bgColor={bgColors.GOLD}
            afterColor={afterBgColors.BLACK}
            hoverTextColor={hoverTextColors.GOLD}
          >
            <TypographyPrimitive>Войти</TypographyPrimitive>
          </ButtonPrimitive>
        </PopupPrimitive>
      )}
      {activePopupId === popupIds.PASSWORD && (
        <PopupPrimitive closePopup={closePopup}>
          <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
            Забыли пароль?
          </TypographyPrimitive>
          <TypographyPrimitive as="p">
            Напишите нам на почту -
            <LinkPrimitive href="mailto:it@arda.digital">it@arda.digital</LinkPrimitive>
          </TypographyPrimitive>
        </PopupPrimitive>
      )}
    </div>
  );
}

export default React.memo(MainPage);
