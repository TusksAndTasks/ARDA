import React from 'react';
import LinkPrimitive from '../primitives/LinkPrimitive';
import TypographyPrimitive, { TypographyModes } from '../primitives/TypographyPrimitive';
import { textColors } from '../themes/colors';

function Footer() {
  return (
    <footer className="flex h-auto items-center justify-between bg-black px-20 md:h-[124px] lg:h-auto">
      <div className="flex w-full flex-col items-center justify-between text-center">
        <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} color={textColors.WHITE}>
          ARDA (с)
          <LinkPrimitive href="https://arda.digital/privacy-policy/">
            <TypographyPrimitive color={textColors.GOLD}>
              Политика конфиденциальности.
            </TypographyPrimitive>
          </LinkPrimitive>
          Информация на сайте не является публичной офертой
        </TypographyPrimitive>
        <div className="flex flex-col justify-between gap-2 sm:w-[460px] sm:flex-row sm:gap-0 md:w-[705px]">
          <div className="flex w-full flex-col items-center justify-start sm:items-start">
            <LinkPrimitive href="mailto:it@arda.digital">
              <TypographyPrimitive
                as="p"
                mode={TypographyModes.PRIMARYPLUS}
                color={textColors.GOLD}
              >
                it@arda.digital
              </TypographyPrimitive>
            </LinkPrimitive>
            <LinkPrimitive href="https://vc.ru/u/1119860-arda">
              <img src="/logos/vcru-logo.png" alt="vc.ru logo" className="filter-gold w-8" />
            </LinkPrimitive>
          </div>
          <img
            src="/logos/ITARDA-logo.png"
            alt="ARDA logo"
            className="filter-gold ml-3.5 w-32 sm:ml-0"
          />
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
