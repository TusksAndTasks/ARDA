import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import StandardsData from '../../../data/CabinetStandards/CabinetStandards.json';
import { rolesEnum } from '../../../redux/slices/rolesSliceTypes';
import LinkPrimitive from '../../../primitives/LinkPrimitive';
import { textColors } from '../../../themes/colors';
import Warning from './Warning';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../../redux/store';
import toggleItemDisplay from '../../../utils/toggleItemDisplay';

interface IWebinar {
  title: string;
  link: string;
  duration?: string;
  description: string;
  sort: number;
  isActive: boolean;
}

interface IStandard {
  title: string;
  link: string;
  date?: string;
  description: string;
  sort: number;
  isActive: boolean;
}

function BoxLikeSection({
  data,
  activatePopup,
}: {
  data: IStandard[] | IWebinar[];
  activatePopup: () => void;
}) {
  const userRole = useSelector((state: GlobalState) => state.roles.role);
  const [activeEntryId, setActiveEntryId] = useState<string[]>([]);
  const toggleEntryDisplay = toggleItemDisplay(activeEntryId, setActiveEntryId);

  return (
    <>
      <div className="w-[90%] lg:w-1/2">
        {data.map((entry, entryIndex) => {
          const isLink = userRole !== rolesEnum.COMMUNITYMEMBER && entry.link;
          const isWarning = userRole === rolesEnum.COMMUNITYMEMBER && entry.link;
          return (
            <div
              key={entry.title}
              className={` -mt-2.5 flex cursor-pointer flex-col gap-2 overflow-hidden rounded-t-lg border-2 border-b-0 border-lightgold bg-black px-2 transition-all duration-500  ${
                activeEntryId.includes(entry.title) ? 'z-10 max-h-[1000px]' : 'max-h-[36px]'
              }`}
              onClick={() => toggleEntryDisplay(entry.title)}
            >
              <div className="pb-5">
                {isLink ? (
                  <LinkPrimitive href={entry.link}>
                    {
                      <TypographyPrimitive
                        mode={TypographyModes.PRIMARYPLUS}
                        color={textColors.GOLD}
                      >
                        {entry.title}
                      </TypographyPrimitive>
                    }
                  </LinkPrimitive>
                ) : (
                  <TypographyPrimitive
                    as="h2"
                    mode={TypographyModes.PRIMARYPLUS}
                    color={textColors.LIGHTGOLD}
                  >
                    {entry.title}
                  </TypographyPrimitive>
                )}
                {(entry as IStandard).date && (
                  <TypographyPrimitive
                    as="p"
                    mode={TypographyModes.PRIMARY}
                    color={textColors.BRONZE}
                  >
                    {(entry as IStandard).date}
                  </TypographyPrimitive>
                )}
                {(entry as IWebinar).duration && (
                  <TypographyPrimitive
                    as="p"
                    mode={TypographyModes.PRIMARY}
                    color={textColors.BRONZE}
                  >
                    {(entry as IWebinar).duration}
                  </TypographyPrimitive>
                )}
                <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} color={textColors.WHITE}>
                  {entry.description}
                </TypographyPrimitive>
              </div>
              {isWarning && (
                <div
                  className={`flex justify-center  ${
                    entryIndex === StandardsData.standards.length - 1 ? '' : '-mt-2.5 pb-2.5'
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
    </>
  );
}

export default React.memo(BoxLikeSection);
