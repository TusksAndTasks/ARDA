import { IResource } from '../../../redux/slices/ResourecesSlice';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import React from 'react';
import LinkPrimitive from '../../../primitives/LinkPrimitive';

function FullCompanyCard({ resource }: { resource: null | IResource }) {
  return resource ? (
    <div className="ml-14 flex flex-col gap-3">
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
        {resource.name}
      </TypographyPrimitive>
      <TypographyPrimitive>
        Ссылка на компанию:
        {resource.link ? (
          <LinkPrimitive href={resource.link!}>
            <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS}>
              {resource.link}
            </TypographyPrimitive>
          </LinkPrimitive>
        ) : (
          <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS}>
            Отсутсвует
          </TypographyPrimitive>
        )}
      </TypographyPrimitive>
      {resource.membership && <TypographyPrimitive>Член ARDA</TypographyPrimitive>}
      {resource.isBroker && <TypographyPrimitive>Брокер</TypographyPrimitive>}
      {resource.accredited && <TypographyPrimitive>Компания аккредитована</TypographyPrimitive>}
      {resource.RusProfile && (
        <TypographyPrimitive as="p">
          Профиль на RusProfile:
          <LinkPrimitive href={resource.RusProfile}>
            <TypographyPrimitive>{resource.RusProfile}</TypographyPrimitive>
          </LinkPrimitive>
        </TypographyPrimitive>
      )}
      <div className="flex gap-2">
        {resource.city.map((city) => (
          <div key={city} className="bg-lightbronze p-2">
            <TypographyPrimitive>{city}</TypographyPrimitive>
          </div>
        ))}
      </div>
      {resource.contacts?.split(' ').map((link) => (
        <LinkPrimitive href={link.search(/@/) === -1 ? `tel:${link}` : `mailto:${link}`} key={link}>
          {link}
        </LinkPrimitive>
      ))}
      <div className="flex gap-2">
        {resource.partnershipFormat.map((format) => (
          <div key={format} className="bg-bronze p-2">
            <TypographyPrimitive as="p">{format}</TypographyPrimitive>
          </div>
        ))}
      </div>
      <TypographyPrimitive as="p" mode={TypographyModes.PRIMARYPLUS}>
        Количество сотрудников: {resource.employeeAmount}
      </TypographyPrimitive>
      <div className="flex gap-2">
        {resource.techStack.map((technology) => (
          <div key={technology} className="bg-bronze p-2">
            <TypographyPrimitive as="p">{technology}</TypographyPrimitive>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {resource.services.map((service) => (
          <div key={service} className="bg-bronze p-2">
            <TypographyPrimitive as="p">{service}</TypographyPrimitive>
          </div>
        ))}
      </div>
      <div className="h-6 w-[500px] cursor-pointer overflow-y-hidden border border-amber-900 hover:h-auto hover:border-amber-500">
        <TypographyPrimitive>{resource.servicesCommentary}</TypographyPrimitive>
      </div>
      <div className="flex gap-2">
        {resource.expertise.map((expertise) => (
          <div key={expertise} className="bg-bronze p-2">
            <TypographyPrimitive as="p">{expertise}</TypographyPrimitive>
          </div>
        ))}
      </div>
      <div className="h-6 w-[500px] cursor-pointer overflow-y-hidden border border-amber-900 hover:h-auto hover:border-amber-500">
        <TypographyPrimitive>{resource.expertiseCommentary}</TypographyPrimitive>
      </div>
      <div className="flex gap-2">
        {resource.markets.map((market) => (
          <div key={market} className="bg-bronze p-2">
            <TypographyPrimitive as="p">{market}</TypographyPrimitive>
          </div>
        ))}
      </div>
      <div className="h-6 w-[500px] cursor-pointer overflow-y-hidden border border-amber-900 hover:h-auto hover:border-amber-500">
        <TypographyPrimitive>{resource.marketsCommentary}</TypographyPrimitive>
      </div>
      <div>
        <TypographyPrimitive as="p">{resource.requestShowcase}</TypographyPrimitive>
        <div className="h-6 w-[500px] cursor-pointer overflow-y-hidden border border-amber-900 hover:h-auto hover:border-amber-500">
          <TypographyPrimitive>{resource.showcaseCommentary}</TypographyPrimitive>
        </div>
      </div>
      <div>
        <TypographyPrimitive as="p">{resource.benchMap}</TypographyPrimitive>
        <div className="h-6 w-[500px] cursor-pointer overflow-y-hidden border border-amber-900 hover:h-auto hover:border-amber-500">
          <TypographyPrimitive>{resource.benchMapCommentary}</TypographyPrimitive>
        </div>
      </div>
      <TypographyPrimitive as="p">{resource.content}</TypographyPrimitive>
      <TypographyPrimitive as="p">{resource.groundwork}</TypographyPrimitive>
    </div>
  ) : (
    <div>
      <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
        Выберете интересующую Вас компанию.
      </TypographyPrimitive>
    </div>
  );
}

export default React.memo(FullCompanyCard);
