import ButtonPrimitive, { ButtonModes } from '../primitives/ButtonPrimitive';
import TypographyPrimitive, { TypographyModes } from '../primitives/TypographyPrimitive';
import { bgColors, textColors } from '../themes/colors';
import IconPrimitive from '../primitives/IconPrimitive';
import { squareSizes } from '../themes/sizes';
import { ReactComponent as HeaderSprite } from '../data/HeaderSprite.svg';
import LinkPrimitive from '../primitives/LinkPrimitive';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({
  setIsPopupOpen,
}: {
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isAuthMock] = useState(true);

  return (
    <header className="flex items-center justify-between bg-black px-10">
      <HeaderSprite className="hidden" />
      <NavLink to={isAuthMock ? 'cabinet' : ''}>
        <ButtonPrimitive mode={ButtonModes.SIMPLE} onClick={() => setIsPopupOpen(true)}>
          <div className="flex items-center">
            <IconPrimitive
              bgColor={bgColors.TRANSPARENT}
              size={squareSizes.SMALL}
              color={textColors.GOLD}
              spriteId={isAuthMock ? 'ToCabinet' : 'LogIn'}
            ></IconPrimitive>
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS} color={textColors.GOLD}>
              {isAuthMock ? 'В личный кабинет' : 'Войти'}
            </TypographyPrimitive>
          </div>
        </ButtonPrimitive>
      </NavLink>
      <img src="/logos/ITARDA-logo.png" alt="ARDA logo" className="filter-gold w-32" />
      <LinkPrimitive href="mailto:it@arda.digital">
        <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS} color={textColors.GOLD}>
          it@arda.digital
        </TypographyPrimitive>
      </LinkPrimitive>
    </header>
  );
}

export default React.memo(Header);
