import React, { useCallback } from 'react';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import WebinarsData from '../../data/CabinetWebinars/CabinetWebinars.json';
import { afterBgColors, borderColors, hoverTextColors, textColors } from '../../themes/colors';
import PopupPrimitive from '../../primitives/PopupPrimitive';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';
import { usePopups } from '../../hooks/usePopups';
import { popupIds } from '../../redux/slices/PopupSlice';
import { fontSizes } from '../../themes/sizes';
import BoxLikeSection from './BoxLikeSection/BoxLikeSection';

function CabinetWebinars() {
  const [closePopup, setActivePopup, activePopupId] = usePopups();
  const activatePopup = useCallback(() => setActivePopup(popupIds.WEBINARSJOIN), []);

  return (
    <div className="ml-2.5 flex w-full flex-col">
      <TypographyPrimitive
        as="h2"
        mode={TypographyModes.TITULAR}
        fontSize={fontSizes.ULTRALARGEADAPTIVE}
      >
        {WebinarsData.title}
      </TypographyPrimitive>
      <BoxLikeSection data={WebinarsData.webinars} activatePopup={activatePopup} />
      {activePopupId === popupIds.WEBINARSJOIN && (
        <PopupPrimitive closePopup={closePopup}>
          <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
            Вы хотите присоединиться?
          </TypographyPrimitive>
          <ButtonPrimitive
            color={textColors.BRONZE}
            borderColor={borderColors.BRONZE}
            afterColor={afterBgColors.GOLD}
            hoverTextColor={hoverTextColors.BRONZE}
            additionalClasses="relative"
          >
            Продолжить
          </ButtonPrimitive>
        </PopupPrimitive>
      )}
    </div>
  );
}

export default React.memo(CabinetWebinars);
