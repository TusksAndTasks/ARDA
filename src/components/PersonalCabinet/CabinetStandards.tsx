import StandardsData from '../../data/CabinetStandards/CabinetStandards.json';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../redux/store';
import { rolesEnum } from '../../redux/slices/rolesSliceTypes';
import LinkPrimitive from '../../primitives/LinkPrimitive';
import { afterBgColors, borderColors, hoverTextColors, textColors } from '../../themes/colors';
import React, { useCallback, useState } from 'react';
import Warning from './Warning';
import PopupPrimitive from '../../primitives/PopupPrimitive';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';

function CabinetStandards() {
  const userRole = useSelector((state: GlobalState) => state.roles.role);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onClick = useCallback(() => setIsPopupOpen(true), []);
  const closePopup = useCallback(() => setIsPopupOpen(false), []);

  return (
    <div className="ml-2.5 flex w-full flex-col">
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
        {StandardsData.title}
      </TypographyPrimitive>
      {StandardsData.standards.map((standard) => {
        const isLink = userRole !== rolesEnum.COMMUNITYMEMBER && standard.link;
        const isWarning = userRole === rolesEnum.COMMUNITYMEMBER && standard.link;
        return (
          <div key={standard.title}>
            {isLink ? (
              <LinkPrimitive href={standard.link}>
                {
                  <TypographyPrimitive
                    mode={TypographyModes.PRIMARYPLUS}
                    color={textColors.LIGHTBRONZE}
                  >
                    {standard.title}
                  </TypographyPrimitive>
                }
              </LinkPrimitive>
            ) : (
              <TypographyPrimitive as="h2" mode={TypographyModes.PRIMARYPLUS}>
                {standard.title}
              </TypographyPrimitive>
            )}
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
              {standard.date}
            </TypographyPrimitive>
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
              {standard.description}
            </TypographyPrimitive>
            {isWarning && (
              <div className="flex justify-center">
                <Warning onClick={onClick} />
              </div>
            )}
          </div>
        );
      })}
      {isPopupOpen && (
        <PopupPrimitive>
          <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
            Вы хотите присоединиться?
          </TypographyPrimitive>
          <ButtonPrimitive
            color={textColors.BRONZE}
            borderColor={borderColors.BRONZE}
            afterColor={afterBgColors.GOLD}
            hoverTextColor={hoverTextColors.BRONZE}
            additionalClasses="relative"
            onClick={closePopup}
          >
            Продолжить
          </ButtonPrimitive>
        </PopupPrimitive>
      )}
    </div>
  );
}

export default React.memo(CabinetStandards);
