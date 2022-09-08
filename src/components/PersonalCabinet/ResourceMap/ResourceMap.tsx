import React, { useState } from 'react';
import useResources from '../../../hooks/useResources';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import LinkPrimitive from '../../../primitives/LinkPrimitive';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../../themes/colors';
import IconPrimitive from '../../../primitives/IconPrimitive';
import { ReactComponent as ResourcesSprite } from '../../../data/CabinetResourceMap/ResourcesSprite.svg';
import FiltersForm from './FiltersForm';
import ButtonPrimitive from '../../../primitives/ButtonPrimitive';
import { IResource } from '../../../redux/slices/ResourecesSlice';
import FullCompanyCard from './FullCompanyCard';

function ResourceMap() {
  const resourceList = useResources();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [fullCard, setFullCard] = useState<null | IResource>(null);

  console.log(resourceList);

  return (
    <div className={`relative flex transition-all ${isFilterOpen ? '' : '-translate-x-[200px]'}`}>
      <ResourcesSprite className="hidden" />
      <FiltersForm />
      <ButtonPrimitive
        color={textColors.LIGHTBRONZE}
        bgColor={bgColors.TRANSPARENT}
        borderColor={borderColors.LIGHTBRONZE}
        afterColor={afterBgColors.LIGHTBRONZE}
        hoverTextColor={hoverTextColors.GOLD}
        additionalClasses="relative"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        {isFilterOpen ? 'закрыть фильтр' : 'открыть фильтр'}
      </ButtonPrimitive>
      <div className="ml-3 overflow-y-auto">
        {resourceList.map((resource) => (
          <div
            key={resource.name}
            onClick={() => {
              setFullCard(resource);
            }}
          >
            <div className="flex items-center">
              {resource.link ? (
                <LinkPrimitive href={resource.link as string}>
                  <TypographyPrimitive
                    as="h3"
                    mode={TypographyModes.PRIMARYPLUS}
                    color={textColors.GOLD}
                  >
                    {resource.name}
                  </TypographyPrimitive>
                </LinkPrimitive>
              ) : (
                <TypographyPrimitive as="h3" mode={TypographyModes.PRIMARYPLUS}>
                  {resource.name}
                </TypographyPrimitive>
              )}
              {resource.membership && (
                <IconPrimitive spriteId="ARDAMember" color={textColors.GOLD} />
              )}
              {resource.isBroker && <IconPrimitive spriteId="broker" color={textColors.BLACK} />}
            </div>
            <div className="mb-3 flex gap-3">
              {resource.techStack.map((technology) => (
                <div key={technology} className="bg-bronze p-2">
                  <TypographyPrimitive as="p">{technology}</TypographyPrimitive>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {resource.city.map((city) => (
                <div key={city} className="bg-lightbronze p-2">
                  <TypographyPrimitive as="p">{city}</TypographyPrimitive>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <FullCompanyCard resource={fullCard} />
    </div>
  );
}

export default React.memo(ResourceMap);
