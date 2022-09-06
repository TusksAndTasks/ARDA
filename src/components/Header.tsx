import ButtonPrimitive, { ButtonModes } from '../primitives/ButtonPrimitive';
import TypographyPrimitive, { TypographyModes } from '../primitives/TypographyPrimitive';
import { bgColors, textColors } from '../themes/colors';
import IconPrimitive from '../primitives/IconPrimitive';
import { squareSizes } from '../themes/sizes';
import { ReactComponent as HeaderSprite } from '../data/Header/HeaderSprite.svg';
import LinkPrimitive from '../primitives/LinkPrimitive';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/store';
import { rolesEnum } from '../redux/slices/rolesSliceTypes';

function Header({
  setIsPopupOpen,
}: {
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const userRole = useSelector((state: GlobalState) => state.roles.role);

  return (
    <header className="flex items-center justify-between bg-black px-10">
      <HeaderSprite className="hidden" />
      <NavLink to={userRole === rolesEnum.NONAUTHORIZED ? '' : 'cabinet'}>
        <ButtonPrimitive
          mode={ButtonModes.SIMPLE}
          onClick={() => setIsPopupOpen(userRole === rolesEnum.NONAUTHORIZED)}
        >
          <div className="flex items-center">
            <IconPrimitive
              bgColor={bgColors.TRANSPARENT}
              size={squareSizes.SMALL}
              color={textColors.GOLD}
              spriteId={userRole === rolesEnum.NONAUTHORIZED ? 'LogIn' : 'ToCabinet'}
            ></IconPrimitive>
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS} color={textColors.GOLD}>
              {userRole === rolesEnum.NONAUTHORIZED ? 'Войти' : 'В личный кабинет'}
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
