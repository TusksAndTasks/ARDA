import SectionPrimitive, { SectionModes } from '../../primitives/SectionPrimitive';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../themes/colors';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import { fontSizes, squareSizes } from '../../themes/sizes';
import { Fonts } from '../../themes/fonts';
import IconPrimitive from '../../primitives/IconPrimitive';
import ButtonPrimitive, { ButtonModes } from '../../primitives/ButtonPrimitive';
import { popupIds } from '../../redux/slices/PopupSlice';
import React from 'react';

interface IConditionProps {
  data: {
    title: string;
    content: Array<{ icon: string; text: string }>;
    closerInfo: {
      button: string;
      text: string;
    };
  };
  setActivePopup: (id: popupIds) => void;
}

function ConditionSection({ data, setActivePopup }: IConditionProps) {
  const { title, content, closerInfo } = data;
  return (
    <SectionPrimitive
      mode={SectionModes.WITHBACKGROUND}
      bgColor={bgColors.GOLD}
      customHeight=" h-[2940px] xsm:h-[1950px] sm:h-[1420px]"
    >
      <TypographyPrimitive
        as="h2"
        mode={TypographyModes.TITULAR}
        fontSize={fontSizes.ULTRALARGE}
        font={Fonts.GENERAL}
      >
        {title}
      </TypographyPrimitive>
      <div className="pl-5">
        {content.map((contentEntry) => (
          <div
            key={contentEntry.text.slice(0, 5)}
            className="flex w-full flex-col items-center gap-2 text-start sm:flex-row sm:items-start xsm:flex-row xsm:items-start"
          >
            <div className="flex flex-col items-center">
              <div className="rounded-md bg-black">
                <IconPrimitive
                  spriteId={contentEntry.icon}
                  size={squareSizes.LARGE}
                  bgSize={squareSizes.LARGEPLUS}
                  color={textColors.GOLD}
                  bgColor={bgColors.TRANSPARENT}
                />
              </div>
              <IconPrimitive
                spriteId="ArrowDown"
                size="w-40 h-40 sm:w-24 sm:h-24"
                bgSize="w-40 h-40 sm:w-24 sm:h-24"
                bgColor={bgColors.TRANSPARENT}
              ></IconPrimitive>
            </div>
            <div className="order-first h-full w-full rounded-md bg-black px-3 py-10 sm:order-last sm:py-7 sm:pl-5 lg:mt-5 lg:py-5 xsm:order-last">
              <TypographyPrimitive
                as="p"
                mode={TypographyModes.LISTLIKE}
                color={textColors.GOLD}
                font={Fonts.GENERAL}
                fontSize={fontSizes.DEFAULTADAPTIVE}
              >
                {contentEntry.text}
              </TypographyPrimitive>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
        <ButtonPrimitive
          mode={ButtonModes.PRIMARYFULL}
          color={textColors.BLACK}
          bgColor={bgColors.TRANSPARENT}
          borderColor={borderColors.BLACK}
          afterColor={afterBgColors.BLACK}
          hoverTextColor={hoverTextColors.GOLD}
          additionalClasses="relative"
          onClick={() => {
            setActivePopup(popupIds.JOINFORM);
          }}
        >
          <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS} font={Fonts.GENERAL}>
            {closerInfo.button}
          </TypographyPrimitive>
        </ButtonPrimitive>
        <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} font={Fonts.GENERALBOLD}>
          {closerInfo.text}
        </TypographyPrimitive>
      </div>
    </SectionPrimitive>
  );
}

export default React.memo(ConditionSection);
