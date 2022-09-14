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
import ButtonPrimitive, { ButtonModes } from '../../../primitives/ButtonPrimitive';
import { IResource } from '../../../redux/slices/ResourecesSlice';
import FullCompanyCard from './FullCompanyCard';
import { fontSizes } from '../../../themes/sizes';

function ResourceMap() {
  const resourceList = useResources();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [fullCard, setFullCard] = useState<null | IResource>(null);

  console.log(resourceList);

  return (
    <div
      className={`relative flex  w-full flex-col transition-all lg:flex-row  ${
        isFilterOpen ? '' : '-translate-y-[400px] lg:-translate-x-[200px] lg:-translate-y-0'
      }`}
    >
      <ResourcesSprite className="hidden" />
      <FiltersForm />
      <ButtonPrimitive
        mode={ButtonModes.PRIMARYVERTICAL}
        color={textColors.BRONZE}
        bgColor={bgColors.LIGHTGOLD}
        borderColor={borderColors.BRONZE}
        afterColor={afterBgColors.BRONZE}
        hoverTextColor={hoverTextColors.LIGHTGOLD}
        additionalClasses="relative"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <TypographyPrimitive
          mode={TypographyModes.PRTIMARYVERTICAL}
          fontSize={fontSizes.ULTRALARGEADAPTIVE}
        >
          {isFilterOpen ? 'закрыть фильтр' : 'открыть фильтр'}
        </TypographyPrimitive>
      </ButtonPrimitive>
      <div className="custom-scrollbar-item ml-[16px] flex max-w-[90%] flex-col gap-2 overflow-y-auto py-3 pr-5 sm:ml-[48px] lg:ml-3 lg:max-w-[210px] xl:w-auto xsm:ml-[32px]">
        {resourceList.map((resource) => (
          <div
            key={resource.name}
            onClick={() => {
              setFullCard(resource);
            }}
            className="cursor-pointer rounded-lg bg-bronze p-2 shadow-strict-bronze-shadow transition-all duration-500 hover:bg-lightbronze"
          >
            <div className="mb-2 flex items-center">
              {resource.link ? (
                <LinkPrimitive href={resource.link as string}>
                  <TypographyPrimitive
                    as="h3"
                    mode={TypographyModes.TITULARSHADOW}
                    color={textColors.GOLD}
                    fontSize={fontSizes.LARGEPLUS}
                  >
                    {resource.name}
                  </TypographyPrimitive>
                </LinkPrimitive>
              ) : (
                <TypographyPrimitive
                  as="h3"
                  mode={TypographyModes.TITULARSHADOW}
                  color={textColors.LIGHTGOLD}
                  fontSize={fontSizes.LARGEPLUS}
                >
                  {resource.name}
                </TypographyPrimitive>
              )}
              {resource.membership && (
                <IconPrimitive
                  spriteId="ARDAMember"
                  bgColor={bgColors.TRANSPARENT}
                  color={textColors.GOLD}
                />
              )}
              {resource.isBroker && (
                <IconPrimitive
                  spriteId="broker"
                  bgColor={bgColors.TRANSPARENT}
                  color={textColors.BLACK}
                />
              )}
            </div>
            <div className="mb-3 flex flex-wrap gap-3">
              {resource.techStack.map((technology) => (
                <div key={technology} className="rounded-lg bg-black p-2">
                  <TypographyPrimitive as="p" color={textColors.LIGHTGOLD}>
                    {technology}
                  </TypographyPrimitive>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {resource.city.map((city) => (
                <div key={city} className="rounded-lg bg-lightgold p-2">
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
