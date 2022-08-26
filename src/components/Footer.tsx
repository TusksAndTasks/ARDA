import React from 'react';
import LinkPrimitive from '../primitives/LinkPrimitive';
import TypographyPrimitive, { TypographyModes } from '../primitives/TypographyPrimitive';
import { textColors } from '../themes/colors';

function Footer() {
  return (
    <footer className="flex items-center justify-between bg-black px-20">
      <div className="flex-col items-start justify-between">
        <LinkPrimitive href="mailto:it@arda.digital">
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS} color={textColors.GOLD}>
            it@arda.digital
          </TypographyPrimitive>
        </LinkPrimitive>
        <LinkPrimitive href="https://vc.ru/u/1119860-arda">
          <img src="/logos/vcru-logo.png" alt="vc.ru logo" className="filter-gold w-8" />
        </LinkPrimitive>
      </div>
      <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY} color={textColors.WHITE}>
        ARDA (с)
        <LinkPrimitive href="https://arda.digital/privacy-policy/">
          <TypographyPrimitive color={textColors.GOLD}>
            Политика конфиденциальности.
          </TypographyPrimitive>
        </LinkPrimitive>
        Информация на сайте не является публичной офертой
      </TypographyPrimitive>
      <img src="/logos/ITARDA-logo.png" alt="ARDA logo" className="filter-gold w-32" />
    </footer>
  );
}

export default React.memo(Footer);
