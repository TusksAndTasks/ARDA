import StandardsData from '../../data/CabinetStandards/CabinetStandards.json';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { afterBgColors, borderColors, hoverTextColors, textColors } from '../../themes/colors';
import React, { useCallback } from 'react';
import PopupPrimitive from '../../primitives/PopupPrimitive';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';
import { usePopups } from '../../hooks/usePopups';
import { popupIds } from '../../redux/slices/PopupSlice';
import { fontSizes } from '../../themes/sizes';
import BoxLikeSection from './BoxLikeSection/BoxLikeSection';

function CabinetStandards() {
  const [closePopup, setActivePopup, activePopupId] = usePopups();
  const activatePopup = useCallback(() => setActivePopup(popupIds.STANDARDSJOIN), []);

  return (
    <div className="ml-2.5 flex w-full flex-col">
      <TypographyPrimitive
        as="h2"
        mode={TypographyModes.TITULAR}
        fontSize={fontSizes.ULTRALARGEADAPTIVE}
      >
        {StandardsData.title}
      </TypographyPrimitive>
      <BoxLikeSection data={StandardsData.standards} activatePopup={activatePopup} />
      {activePopupId === popupIds.STANDARDSJOIN && (
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

export default React.memo(CabinetStandards);
