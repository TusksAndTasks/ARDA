import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import React from 'react';
import MainPageData from '../../data/MainPage/MainPage.json';
import { fontSizes } from '../../themes/sizes';
import { afterBgColors, bgColors, hoverTextColors, textColors } from '../../themes/colors';
import { ReactComponent as MainPageSprite } from '../../data/MainPage/MainPageSprite.svg';
import ButtonPrimitive, { ButtonModes } from '../../primitives/ButtonPrimitive';
import JoinForm from './JoinForm';
import PopupPrimitive from '../../primitives/PopupPrimitive';
import InputPrimitive, { InputModes } from '../../primitives/InputPrimitive';
import { inputPlaceholderFunction } from '../../utils/inputPlaceholderFunction';
import LinkPrimitive from '../../primitives/LinkPrimitive';
import { usePopups } from '../../hooks/usePopups';
import { popupIds } from '../../redux/slices/PopupSlice';
import TitularSection from './TitularSection';
import MainPointSection from './MainPointSection';
import ProblemsSection from './ProblemsSection';
import MissionSection from './MissionSection';
import ProfitSection from './ProfitSection';
import ConditionSection from './ConditionSection';
import PartnershipSection from './PartnersSection/PartnersSection';
import ExplanationSection from './ExplanationSection';
import DonateSection from './DonateSection';

function MainPage() {
  const [closePopup, setActivePopup, activePopupId] = usePopups();

  return (
    <div className="container px-10">
      <MainPageSprite className="hidden" />
      <TitularSection data={MainPageData.TitularSection} />
      <MainPointSection data={MainPageData.MainPointSection} />
      <ProblemsSection data={MainPageData.ProblemsSection} />
      <MissionSection data={MainPageData.MissionSection} />
      <ProfitSection data={MainPageData.ProfitSection} />
      <ConditionSection data={MainPageData.ConditionsSection} setActivePopup={setActivePopup} />
      <PartnershipSection data={MainPageData.PartnersSection} />
      <ExplanationSection data={MainPageData.ExplanationSection} />
      <DonateSection data={MainPageData.DonateSection} />
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
