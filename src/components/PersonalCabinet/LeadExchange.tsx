import React from 'react';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';
import LeadExchangeData from '../../data/CabinetLeadExchange/LeadExchange.json';
import LinkPrimitive from '../../primitives/LinkPrimitive';

function LeadExchange() {
  return (
    <div className="ml-3">
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
        {LeadExchangeData.title}
      </TypographyPrimitive>
      <TypographyPrimitive as="p">{LeadExchangeData.communityRules}</TypographyPrimitive>
      <LinkPrimitive href={LeadExchangeData.chatLink}>{LeadExchangeData.chatLink}</LinkPrimitive>
      <div className="h-[200px] w-[200px] bg-black"></div>
      <div>
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
          {LeadExchangeData.linksSection.title}
        </TypographyPrimitive>
        {LeadExchangeData.linksSection.links.map((linksBlock) => (
          <div key={linksBlock.theme}>
            <TypographyPrimitive as="p">{linksBlock.theme}</TypographyPrimitive>
            {linksBlock.thematicLinks.map((link) => (
              <LinkPrimitive key={link} href={link}>
                {link}
              </LinkPrimitive>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(LeadExchange);
