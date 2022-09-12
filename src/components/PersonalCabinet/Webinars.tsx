import React from 'react';
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

function Webinars() {
  const userRole = useSelector((state: GlobalState) => state.roles.role);
  const [closePopup, setActivePopup, activePopupId] = usePopups();

  return (
    <div className="ml-2.5 flex w-full flex-col">
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
        {WebinarsData.title}
      </TypographyPrimitive>
      {WebinarsData.standards.map((webinar) => {
        const isLink = userRole !== rolesEnum.COMMUNITYMEMBER && webinar.link;
        const isWarning = userRole === rolesEnum.COMMUNITYMEMBER && webinar.link;
        return (
          <div key={webinar.title}>
            {isLink ? (
              <LinkPrimitive href={webinar.link}>
                {
                  <TypographyPrimitive
                    mode={TypographyModes.PRIMARYPLUS}
                    color={textColors.LIGHTBRONZE}
                  >
                    {webinar.title}
                  </TypographyPrimitive>
                }
              </LinkPrimitive>
            ) : (
              <TypographyPrimitive as="h2" mode={TypographyModes.PRIMARYPLUS}>
                {webinar.title}
              </TypographyPrimitive>
            )}
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
              {webinar.duration}
            </TypographyPrimitive>
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
              {webinar.description}
            </TypographyPrimitive>
            {isWarning && (
              <div className="flex justify-center">
                <Warning
                  onClick={() => setActivePopup(popupIds.WEBINARSJOIN)}
                  warningText={WebinarsData.warning.text}
                  prompt={WebinarsData.warning.prompt}
                />
              </div>
            )}
          </div>
        );
      })}
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

export default React.memo(Webinars);
