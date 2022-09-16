import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../redux/store';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import WebinarsData from '../../data/CabinetWebinars/CabinetWebinars.json';
import { rolesEnum } from '../../redux/slices/rolesSliceTypes';
import LinkPrimitive from '../../primitives/LinkPrimitive';
import { afterBgColors, borderColors, hoverTextColors, textColors } from '../../themes/colors';
import Warning from './Warning';
import PopupPrimitive from '../../primitives/PopupPrimitive';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';
import { usePopups } from '../../hooks/usePopups';
import { popupIds } from '../../redux/slices/PopupSlice';
import toggleItemDisplay from '../../utils/toggleItemDisplay';
import { fontSizes } from '../../themes/sizes';

function CabinetWebinars() {
  const userRole = useSelector((state: GlobalState) => state.roles.role);
  const [closePopup, setActivePopup, activePopupId] = usePopups();
  const [activeWebinarId, setActiveWebinarId] = useState<string[]>([]);
  const toggleWebinarDisplay = toggleItemDisplay(activeWebinarId, setActiveWebinarId);
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
      <div className="w-[90%] lg:w-1/2">
        {WebinarsData.webinars.map((webinar, webinarIndex) => {
          const isLink = userRole !== rolesEnum.COMMUNITYMEMBER && webinar.link;
          const isWarning = userRole === rolesEnum.COMMUNITYMEMBER && webinar.link;
          return (
            <div
              key={webinar.title}
              className={`-mt-2.5 flex cursor-pointer flex-col gap-2 overflow-hidden rounded-t-lg border-2 border-b-0 border-lightgold bg-black px-2 transition-all duration-500  ${
                activeWebinarId.includes(webinar.title) ? 'z-10 max-h-[1000px]' : 'max-h-[36px]'
              }`}
              onClick={() => toggleWebinarDisplay(webinar.title)}
            >
              {isLink ? (
                <LinkPrimitive href={webinar.link}>
                  {
                    <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS} color={textColors.GOLD}>
                      {webinar.title}
                    </TypographyPrimitive>
                  }
                </LinkPrimitive>
              ) : (
                <TypographyPrimitive
                  as="h2"
                  mode={TypographyModes.PRIMARYPLUS}
                  color={textColors.LIGHTGOLD}
                >
                  {webinar.title}
                </TypographyPrimitive>
              )}
              <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} color={textColors.BRONZE}>
                {webinar.duration}
              </TypographyPrimitive>
              <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} color={textColors.WHITE}>
                {webinar.description}
              </TypographyPrimitive>
              {isWarning && (
                <div
                  className={`flex justify-center  ${
                    webinarIndex === WebinarsData.webinars.length - 1 ? '' : '-mt-2.5 pb-2.5'
                  }`}
                >
                  <Warning
                    onClick={activatePopup}
                    warningText={WebinarsData.warning.text}
                    prompt={WebinarsData.warning.prompt}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="box-like relative mb-3 w-[90%] bg-bronze bg-cluster-pattern bg-partial-pattern-xsm  bg-pattern-pos-center bg-no-repeat pb-52 before:absolute before:-right-[10px] before:bottom-[209px] before:-z-10 before:block before:h-[6px] before:w-[10px] before:bg-black after:absolute after:-right-[10px] after:bottom-[3px] after:block after:h-full after:w-[10px] after:border-l-2 after:border-black after:bg-lightbronze lg:w-1/2"></div>

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
