import React, { useState } from 'react';
import SettingsData from '../../../data/PersonalCabinetSettings.json';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import ButtonPrimitive from '../../../primitives/ButtonPrimitive';
import { afterBgColors, borderColors, hoverTextColors, textColors } from '../../../themes/colors';
import ProfileForm from './ProfileForm';
import PasswordForm from './PasswordForm';

function ProfileSettings() {
  const [openFormId, setOpenFormId] = useState('none');

  const toggleForm = (id: string) => () => {
    setOpenFormId(id);
  };

  return (
    <div className="ml-2.5 flex flex-col">
      {SettingsData.settings.map((setting) => (
        <div key={setting.descriptor} className="mb-2 flex items-center gap-2">
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS}>
            {setting.descriptor}
          </TypographyPrimitive>
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
            {setting.value}
          </TypographyPrimitive>
        </div>
      ))}
      {SettingsData.buttons.map((button) => (
        <ButtonPrimitive
          color={textColors.BRONZE}
          borderColor={borderColors.BRONZE}
          afterColor={afterBgColors.GOLD}
          hoverTextColor={hoverTextColors.BRONZE}
          additionalClasses="relative"
          key={button.id}
          onClick={toggleForm(button.id)}
        >
          {button.text}
        </ButtonPrimitive>
      ))}
      {openFormId === 'profile' && (
        <ProfileForm settings={SettingsData.settings} closeForm={toggleForm('none')} />
      )}
      {openFormId === 'password' && (
        <PasswordForm password={SettingsData.password} closeForm={toggleForm('none')} />
      )}
    </div>
  );
}

export default React.memo(ProfileSettings);
