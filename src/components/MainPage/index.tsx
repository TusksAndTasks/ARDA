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

  return (
    <div className="container px-10">
      <MainPageSprite className="hidden" />
      <SectionPrimitive>
        <TypographyPrimitive
          as="h1"
          mode={TypographyModes.TITULAR}
          fontSize={fontSizes.ULTRALARGEADAPTIVE}
        >
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
        customHeight="h-[900px] sm:h-[450px] xsm:h-[640px] xl:h-[270px] md:h-[420px] "
      >
        <div className="flex flex-col items-center gap-3">
          <TypographyPrimitive
            as="h2"
            mode={TypographyModes.TITULAR}
            fontSize={fontSizes.ULTRALARGE}
          >
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
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
          {MainPageData.ProblemsSection.title}
        </TypographyPrimitive>
        {MainPageData.ProblemsSection.content.map((content) => (
          <div
            className="flex flex-col md:w-5/6 md:flex-row md:content-center md:items-center md:gap-2 md:pb-5 md:text-start"
            key={content.text.slice(0, 5)}
          >
            <IconPrimitive
              spriteId={content.icon}
              size={squareSizes.MEDIUM}
              bgSize="w-full h-16 md:w-16"
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
        customHeight="h-[875px] xsm:h-[500px] sm:h-[330px]"
      >
        <TypographyPrimitive
          as="h2"
          mode={TypographyModes.TITULAR}
          fontSize={fontSizes.ULTRALARGE}
          color={textColors.GOLD}
        >
          {MainPageData.MissionSection.title}
        </TypographyPrimitive>
        <div className="flex flex-col flex-wrap items-center justify-between gap-5 sm:flex-row sm:flex-nowrap xsm:flex-row">
          {MainPageData.MissionSection.content.map((content) => (
            <div
              className={`flex cursor-pointer flex-col content-center items-center gap-2 overflow-hidden rounded-md border-2 border-gold pb-5 text-center transition-all
              ${
                cardsOpen.includes(content.text)
                  ? 'h-[160px] w-[160px] lg:h-[228px] lg:w-[228px]'
                  : 'h-[110px] w-[110px] lg:h-[168px] lg:w-[168px]'
              }`}
              key={content.text.slice(0, 5)}
              onClick={() => {
                toggleCardsDisplay(content.text);
              }}
            >
              <IconPrimitive
                spriteId={content.icon}
                size={squareSizes.BIGADAPTIVE}
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
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
          {MainPageData.ProfitSection.title}
        </TypographyPrimitive>
        {MainPageData.ProfitSection.content.map((content) => (
          <div
            className="flex w-5/6 flex-col items-center gap-2 pb-5 text-start sm:flex-row"
            key={content.text.slice(0, 5)}
          >
            <IconPrimitive
              spriteId={content.icon}
              size={squareSizes.MEDIUM}
              bgSize="w-full h-16 sm:w-16"
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
        customHeight=" h-[2940px] xsm:h-[1950px] sm:h-[1420px]"
      >
        <TypographyPrimitive
          as="h2"
          mode={TypographyModes.TITULAR}
          fontSize={fontSizes.ULTRALARGE}
          font={Fonts.GENERAL}
        >
          {MainPageData.ConditionsSection.title}
        </TypographyPrimitive>
        <div className="pl-5">
          {MainPageData.ConditionsSection.content.map((content) => (
            <div
              key={content.text.slice(0, 5)}
              className="flex w-full flex-col items-center gap-2 text-start sm:flex-row sm:items-start xsm:flex-row xsm:items-start"
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
                  size="w-40 h-40 sm:w-24 sm:h-24"
                  bgSize="w-40 h-40 sm:w-24 sm:h-24"
                  bgColor={bgColors.TRANSPARENT}
                ></IconPrimitive>
              </div>
              <div className="order-first h-full w-full rounded-md bg-black px-3 py-10 sm:order-last sm:py-7 sm:pl-5 lg:mt-5 lg:py-5 xsm:order-last">
                <TypographyPrimitive
                  as="p"
                  mode={TypographyModes.LISTLIKE}
                  color={textColors.GOLD}
                  font={Fonts.GENERAL}
                  fontSize={fontSizes.DEFAULTADAPTIVE}
                >
                  {content.text}
                </TypographyPrimitive>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
          <ButtonPrimitive
            mode={ButtonModes.PRIMARYFULL}
            color={textColors.BLACK}
            bgColor={bgColors.TRANSPARENT}
            borderColor={borderColors.BLACK}
            afterColor={afterBgColors.BLACK}
            hoverTextColor={hoverTextColors.GOLD}
            additionalClasses="relative"
            onClick={() => {
              setActivePopup(popupIds.JOINFORM);
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
        <TypographyPrimitive as="h2" fontSize={fontSizes.ULTRALARGE} mode={TypographyModes.TITULAR}>
          {MainPageData.PartnersSection.title}
        </TypographyPrimitive>
        <PartnersList />
      </SectionPrimitive>
      <SectionPrimitive>
        <TypographyPrimitive as="h2" fontSize={fontSizes.ULTRALARGE} mode={TypographyModes.TITULAR}>
          {MainPageData.ExplanationSection.title}
        </TypographyPrimitive>
        <div className="mb-5 flex flex-col items-start justify-between sm:items-center lg:flex-row">
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
        <div className="flex flex-col items-center justify-between py-8 sm:flex-row">
          <div className="flex-col justify-between text-center sm:text-start">
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
      {activePopupId === popupIds.JOINFORM && <JoinForm closePopup={closePopup} />}
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
          <TypographyPrimitive
            as="h2"
            fontSize={fontSizes.ULTRALARGE}
            mode={TypographyModes.TITULAR}
          >
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
