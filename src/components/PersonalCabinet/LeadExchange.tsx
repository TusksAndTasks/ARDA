import React from 'react';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import LeadExchangeData from '../../data/CabinetLeadExchange/LeadExchange.json';
import LinkPrimitive from '../../primitives/LinkPrimitive';
import { fontSizes } from '../../themes/sizes';
import { textColors } from '../../themes/colors';
import { Fonts } from '../../themes/fonts';

function LeadExchange() {
  return (
    <div className="ml-3">
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
        {LeadExchangeData.title}
      </TypographyPrimitive>
      <div className="mr-2 flex max-w-[500px] flex-col items-center rounded-b-xl bg-bronze p-2 pb-0 text-center shadow-smooth-gray-shadow">
        <TypographyPrimitive as="p" fontSize={fontSizes.LARGEPLUS} font={Fonts.GENERALMEDIUM}>
          {LeadExchangeData.communityRules.titleText}
        </TypographyPrimitive>
        {LeadExchangeData.communityRules.rules.map((rule) => (
          <TypographyPrimitive
            key={rule}
            as="p"
            font={Fonts.GENERALMEDIUM}
            fontSize={fontSizes.DEFAULT}
          >
            {rule}
          </TypographyPrimitive>
        ))}
        <LinkPrimitive href={LeadExchangeData.chatLink}>
          <TypographyPrimitive color={textColors.LIGHTGOLD} font={Fonts.GENERALBOLD}>
            {LeadExchangeData.chatLink}
          </TypographyPrimitive>
        </LinkPrimitive>
        <div className="h-[200px] w-[200px] bg-black"></div>
      </div>
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR} fontSize={fontSizes.ULTRALARGE}>
        {LeadExchangeData.linksSection.title}
      </TypographyPrimitive>
      <div className="mr-2 mb-2 flex max-w-[700px] flex-wrap justify-center gap-5 rounded-b-lg bg-bronze px-2 pb-5 shadow-smooth-gray-shadow">
        {LeadExchangeData.linksSection.links.map((linksBlock) => (
          <div
            key={linksBlock.theme}
            className="h-[200px] w-[200px] rounded-b-lg bg-lightgold py-3 text-center shadow-smooth-black-shadow"
          >
            <TypographyPrimitive as="p" fontSize={fontSizes.LARGEPLUS} font={Fonts.GENERALMEDIUM}>
              {linksBlock.theme}
            </TypographyPrimitive>
            {linksBlock.thematicLinks.map((link) => (
              <div
                key={link}
                className="m-1 rounded-b-lg bg-black pb-3 shadow-smooth-black-shadow  transition-all hover:pb-6"
              >
                <LinkPrimitive href={link}>
                  <TypographyPrimitive color={textColors.GOLD} font={Fonts.GENERALMEDIUM}>
                    {link}
                  </TypographyPrimitive>
                </LinkPrimitive>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(LeadExchange);
