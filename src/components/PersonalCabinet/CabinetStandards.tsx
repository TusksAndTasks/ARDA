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
import { usePopups } from '../../hooks/usePopups';
import { popupIds } from '../../redux/slices/PopupSlice';
import { fontSizes } from '../../themes/sizes';
import toggleItemDisplay from '../../utils/toggleItemDisplay';

function CabinetStandards() {
  const userRole = useSelector((state: GlobalState) => state.roles.role);
  const [closePopup, setActivePopup, activePopupId] = usePopups();
  const [activeStandardId, setActiveStandardId] = useState<string[]>([]);
  const toggleStandardDisplay = toggleItemDisplay(activeStandardId, setActiveStandardId);
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
      <div className="w-[90%] lg:w-1/2">
        {StandardsData.standards.map((standard, standardIndex) => {
          const isLink = userRole !== rolesEnum.COMMUNITYMEMBER && standard.link;
          const isWarning = userRole === rolesEnum.COMMUNITYMEMBER && standard.link;
          return (
            <div
              key={standard.title}
              className={` -mt-2.5 flex cursor-pointer flex-col gap-2 overflow-hidden rounded-t-lg border-2 border-b-0 border-lightgold bg-black px-2 transition-all duration-500  ${
                activeStandardId.includes(standard.title) ? 'z-10 max-h-[1000px]' : 'max-h-[36px]'
              }`}
              onClick={() => toggleStandardDisplay(standard.title)}
            >
              <div className="pb-5">
                {isLink ? (
                  <LinkPrimitive href={standard.link}>
                    {
                      <TypographyPrimitive
                        mode={TypographyModes.PRIMARYPLUS}
                        color={textColors.GOLD}
                      >
                        {standard.title}
                      </TypographyPrimitive>
                    }
                  </LinkPrimitive>
                ) : (
                  <TypographyPrimitive
                    as="h2"
                    mode={TypographyModes.PRIMARYPLUS}
                    color={textColors.LIGHTGOLD}
                  >
                    {standard.title}
                  </TypographyPrimitive>
                )}
                <TypographyPrimitive
                  as="p"
                  mode={TypographyModes.PRIMARY}
                  color={textColors.BRONZE}
                >
                  {standard.date}
                </TypographyPrimitive>
                <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} color={textColors.WHITE}>
                  {standard.description}
                </TypographyPrimitive>
              </div>
              {isWarning && (
                <div
                  className={`flex justify-center  ${
                    standardIndex === StandardsData.standards.length - 1 ? '' : '-mt-2.5 pb-2.5'
                  }`}
                >
                  <Warning
                    onClick={activatePopup}
                    warningText={StandardsData.warning.text}
                    prompt={StandardsData.warning.prompt}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="box-like relative mb-3 w-[90%] bg-bronze bg-cluster-pattern bg-partial-pattern-xsm  bg-pattern-pos-center bg-no-repeat pb-52 before:absolute before:-right-[10px] before:bottom-[209px] before:-z-10 before:block before:h-[6px] before:w-[10px] before:bg-black after:absolute after:-right-[10px] after:bottom-[3px] after:block after:h-full after:w-[10px] after:border-l-2 after:border-black after:bg-lightbronze lg:w-1/2"></div>
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
