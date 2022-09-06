import StandardsData from '../../data/CabinetStandards/CabinetStandards.json';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../redux/store';
import { rolesEnum } from '../../redux/slices/rolesSliceTypes';
import LinkPrimitive from '../../primitives/LinkPrimitive';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';
import { afterBgColors, borderColors, hoverTextColors, textColors } from '../../themes/colors';
import React from 'react';

function CabinetStandards() {
  const userRole = useSelector((state: GlobalState) => state.roles.role);

  return (
    <div className="ml-2.5 flex flex-col">
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
        {StandardsData.title}
      </TypographyPrimitive>
      {StandardsData.standards.map((standard) => {
        const isLink = userRole !== rolesEnum.COMMUNITYMEMBER && standard.link;
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
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
              Ссылка на данный вебинар бужет доступна после вступления в ADRA
            </TypographyPrimitive>
            <ButtonPrimitive
              color={textColors.BRONZE}
              borderColor={borderColors.BRONZE}
              afterColor={afterBgColors.GOLD}
              hoverTextColor={hoverTextColors.BRONZE}
              additionalClasses="relative"
            >
              Вступить
            </ButtonPrimitive>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(CabinetStandards);
