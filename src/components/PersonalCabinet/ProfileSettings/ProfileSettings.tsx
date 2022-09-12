import React from 'react';
import SettingsData from '../../../data/CabinetSettings/CabinetSettings.json';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import ButtonPrimitive from '../../../primitives/ButtonPrimitive';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../../themes/colors';
import ProfileForm from './ProfileForm';
import PasswordForm from './PasswordForm';
import { fontSizes } from '../../../themes/sizes';
import { Fonts } from '../../../themes/fonts';
import { usePopups } from '../../../hooks/usePopups';
import { popupIds } from '../../../redux/slices/PopupSlice';

const formIdMaps = {
  profile: popupIds.PROFILEFORM,
  password: popupIds.PASSWORDFORM,
};

function ProfileSettings() {
  const [closePopup, setActivePopup, activePopupId] = usePopups();

  return (
    <div className="ml-2.5 mt-2.5 flex flex-col">
      <div className="flex flex-wrap justify-center gap-5">
        {SettingsData.settings.map((setting) => (
          <div
            key={setting.descriptor}
            className={`mb-2 flex h-[200px] w-[200px] flex-col items-center  gap-2 text-center ${bgColors.BRONZE} justify-center rounded shadow-2xl`}
          >
            <TypographyPrimitive
              as="p"
              mode={TypographyModes.PRIMARY}
              fontSize={fontSizes.LARGEPLUS}
              font={Fonts.GENERALBOLD}
            >
              {setting.value}
            </TypographyPrimitive>
            <TypographyPrimitive
              as="p"
              mode={TypographyModes.PRIMARY}
              fontSize={fontSizes.SMALL}
              font={Fonts.GENERALMEDIUM}
              color={textColors.LIGHTGOLD}
            >
              {setting.descriptor}
            </TypographyPrimitive>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-5 pb-5">
        {SettingsData.buttons.map((button) => (
          <ButtonPrimitive
            color={textColors.BRONZE}
            borderColor={borderColors.BRONZE}
            afterColor={afterBgColors.BRONZE}
            hoverTextColor={hoverTextColors.LIGHTGOLD}
            additionalClasses="relative"
            key={button.id}
            onClick={() => setActivePopup(formIdMaps[button.id as keyof typeof formIdMaps])}
          >
            {button.text}
          </ButtonPrimitive>
        ))}
      </div>
      {activePopupId === popupIds.PROFILEFORM && (
        <ProfileForm settings={SettingsData.settings} closeForm={closePopup} />
      )}
      {activePopupId === popupIds.PASSWORDFORM && (
        <PasswordForm password={SettingsData.password} closeForm={closePopup} />
      )}
    </div>
  );
}

export default React.memo(ProfileSettings);
