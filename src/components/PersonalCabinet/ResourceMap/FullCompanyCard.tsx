import { IResource } from '../../../redux/slices/ResourecesSlice';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import React, { useState } from 'react';
import LinkPrimitive from '../../../primitives/LinkPrimitive';
import { fontSizes, squareSizes } from '../../../themes/sizes';
import { bgColors, hoverTextColors, textColors } from '../../../themes/colors';
import { Fonts } from '../../../themes/fonts';
import IconPrimitive from '../../../primitives/IconPrimitive';
import { ReactComponent as ResourcesSprite } from '../../../data/CabinetResourceMap/ResourcesSprite.svg';
import toggleItemDisplay from '../../../utils/toggleItemDisplay';
import RedactForm from '../../../data/CabinetResourceMap/RedactForm';

function FullCompanyCard({ resource }: { resource: null | IResource }) {
  const [openCommentary, setOpenCommentary] = useState<string[]>([]);
  const toggleCommentaryDisplay = toggleItemDisplay(openCommentary, setOpenCommentary);

  return resource ? (
    <div className=" border-1 custom-scrollbar-item my-8 ml-[16px] ml-2 box-border flex w-[87%] flex-col gap-3 overflow-y-auto rounded-xl border-lightgold bg-black p-2 outline outline-4 outline-offset-2 outline-black sm:ml-[48px] sm:ml-4 sm:p-4 lg:w-full lg:w-[46%] xl:ml-14 xl:w-[59%] xsm:ml-[32px]">
      <ResourcesSprite className="hidden" />
      <TypographyPrimitive
        as="h2"
        mode={TypographyModes.TITULARSHADOW}
        fontSize={fontSizes.ULTRALARGE}
        color={textColors.GOLD}
      >
        {resource.name}
      </TypographyPrimitive>
      <TypographyPrimitive
        color={textColors.LIGHTGOLD}
        fontSize={fontSizes.LARGEPLUSADAPTIVE}
        font={Fonts.GENERALMEDIUM}
      >
        Ссылка на компанию:
        {resource.link ? (
          <LinkPrimitive href={resource.link}>
            <TypographyPrimitive
              mode={TypographyModes.PRIMARYPLUS}
              fontSize={fontSizes.LARGEPLUSADAPTIVE}
              font={Fonts.GENERALBOLD}
              color={textColors.GOLD}
              hoverColor={hoverTextColors.LIGHTBRONZE}
            >
              {resource.link}
            </TypographyPrimitive>
          </LinkPrimitive>
        ) : (
          <TypographyPrimitive
            mode={TypographyModes.PRIMARYPLUS}
            fontSize={fontSizes.LARGEPLUSADAPTIVE}
            font={Fonts.GENERALBOLD}
            color={textColors.LIGHTBRONZE}
          >
            Отсутсвует
          </TypographyPrimitive>
        )}
      </TypographyPrimitive>
      {resource.membership && (
        <div className="flex flex-wrap items-center gap-2">
          <IconPrimitive
            spriteId="ARDAMember"
            bgColor={bgColors.TRANSPARENT}
            color={textColors.GOLD}
            size={squareSizes.MEDIUM}
            bgSize={squareSizes.MEDIUM}
          />
          <TypographyPrimitive
            color={textColors.LIGHTGOLD}
            fontSize={fontSizes.LARGEPLUSADAPTIVE}
            font={Fonts.GENERALMEDIUM}
          >
            Член ARDA
          </TypographyPrimitive>
        </div>
      )}
      {resource.isBroker && (
        <div className="flex flex-wrap items-center gap-2">
          <IconPrimitive
            spriteId="broker"
            bgColor={bgColors.TRANSPARENT}
            color={textColors.LIGHTBRONZE}
            size={squareSizes.MEDIUM}
            bgSize={squareSizes.MEDIUM}
          />
          <TypographyPrimitive
            color={textColors.BRONZE}
            fontSize={fontSizes.LARGEPLUSADAPTIVE}
            font={Fonts.GENERALMEDIUM}
          >
            Брокер
          </TypographyPrimitive>
        </div>
      )}
      {resource.accredited && (
        <TypographyPrimitive
          color={textColors.GOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Компания аккредитована
        </TypographyPrimitive>
      )}
      {resource.RusProfile && (
        <TypographyPrimitive
          as="p"
          color={textColors.LIGHTGOLD}
          font={Fonts.GENERALMEDIUM}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
        >
          Профиль на RusProfile:
          <LinkPrimitive href={resource.RusProfile}>
            <TypographyPrimitive
              color={textColors.GOLD}
              font={Fonts.GENERALMEDIUM}
              fontSize={fontSizes.LARGEPLUSADAPTIVE}
              hoverColor={hoverTextColors.LIGHTBRONZE}
            >
              {resource.RusProfile}
            </TypographyPrimitive>
          </LinkPrimitive>
        </TypographyPrimitive>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Города:
        </TypographyPrimitive>
        {resource.city.map((city) => (
          <div key={city} className="rounded-lg bg-lightgold p-2">
            <TypographyPrimitive color={textColors.BLACK} font={Fonts.GENERALMEDIUM}>
              {city}
            </TypographyPrimitive>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Контакты:
        </TypographyPrimitive>
        {resource.contacts?.split(' ').map((link) => (
          <LinkPrimitive
            href={link.search(/@/) === -1 ? `tel:${link}` : `mailto:${link}`}
            key={link}
          >
            <TypographyPrimitive
              color={textColors.GOLD}
              fontSize={fontSizes.LARGEPLUSADAPTIVE}
              font={Fonts.GENERALMEDIUM}
              hoverColor={hoverTextColors.LIGHTBRONZE}
            >
              {link}
            </TypographyPrimitive>
          </LinkPrimitive>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Формат сотрудничества:
        </TypographyPrimitive>
        {resource.partnershipFormat.map((format) => (
          <div key={format} className="rounded-lg bg-lightbronze p-2">
            <TypographyPrimitive as="p" color={textColors.LIGHTGOLD} font={Fonts.GENERALMEDIUM}>
              {format}
            </TypographyPrimitive>
          </div>
        ))}
      </div>
      <TypographyPrimitive
        as="p"
        color={textColors.LIGHTGOLD}
        font={Fonts.GENERALMEDIUM}
        fontSize={fontSizes.LARGEPLUSADAPTIVE}
      >
        Количество сотрудников:
        <TypographyPrimitive
          color={textColors.GOLD}
          font={Fonts.GENERALMEDIUM}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
        >
          {resource.employeeAmount}
        </TypographyPrimitive>
      </TypographyPrimitive>
      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Стек технологий:
        </TypographyPrimitive>
        {resource.techStack.map((technology) => (
          <div key={technology} className="rounded-lg bg-bronze p-2">
            <TypographyPrimitive as="p" color={textColors.LIGHTGOLD} font={Fonts.GENERALMEDIUM}>
              {technology}
            </TypographyPrimitive>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Список услуг:
        </TypographyPrimitive>
        {resource.services.map((service) => (
          <div key={service} className="rounded-lg bg-lightgold p-2">
            <TypographyPrimitive as="p" font={Fonts.GENERALMEDIUM}>
              {service}
            </TypographyPrimitive>
          </div>
        ))}
        {resource.servicesCommentary && (
          <div
            className={`cursor-pointer overflow-y-hidden rounded-lg bg-lightgold p-1 transition-all duration-500 hover:h-auto xl:w-[500px] ${
              openCommentary.includes(resource?.name + 'services') ? 'max-h-[1000px]' : 'max-h-8'
            }`}
            onClick={() => toggleCommentaryDisplay(resource?.name + 'services')}
          >
            <TypographyPrimitive font={Fonts.GENERALMEDIUM}>
              {resource.servicesCommentary}
            </TypographyPrimitive>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Доменные экспертизы:
        </TypographyPrimitive>
        {resource.expertise.map((expertise) => (
          <div key={expertise} className="rounded-lg bg-lightbronze p-2">
            <TypographyPrimitive font={Fonts.GENERALMEDIUM} color={textColors.WHITE}>
              {expertise}
            </TypographyPrimitive>
          </div>
        ))}
        {resource.expertiseCommentary && (
          <div
            className={`cursor-pointer overflow-y-hidden rounded-lg bg-lightbronze p-1 transition-all duration-500 hover:h-auto xl:w-[500px] ${
              openCommentary.includes(resource?.name + 'expertise') ? 'max-h-[1000px]' : 'max-h-8'
            }`}
            onClick={() => toggleCommentaryDisplay(resource?.name + 'expertise')}
          >
            <TypographyPrimitive font={Fonts.GENERALMEDIUM} color={textColors.WHITE}>
              {resource.expertiseCommentary}
            </TypographyPrimitive>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Рынки:
        </TypographyPrimitive>
        {resource.markets.map((market) => (
          <div key={market} className="rounded-lg bg-bronze p-2">
            <TypographyPrimitive as="p" font={Fonts.GENERALMEDIUM} color={textColors.WHITE}>
              {market}
            </TypographyPrimitive>
          </div>
        ))}
        {resource.marketsCommentary && (
          <div
            className={`cursor-pointer overflow-y-hidden rounded-lg bg-bronze p-1 transition-all duration-500 hover:h-auto xl:w-[500px] ${
              openCommentary.includes(resource?.name + 'markets') ? 'max-h-[1000px]' : 'max-h-8'
            }`}
            onClick={() => toggleCommentaryDisplay(resource?.name + 'markets')}
          >
            <TypographyPrimitive font={Fonts.GENERALMEDIUM} color={textColors.WHITE}>
              {resource.marketsCommentary}
            </TypographyPrimitive>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Витрина запросов:
        </TypographyPrimitive>
        {resource.requestShowcase && (
          <LinkPrimitive href={resource.requestShowcase}>
            <TypographyPrimitive
              color={textColors.GOLD}
              font={Fonts.GENERALMEDIUM}
              fontSize={fontSizes.LARGEPLUSADAPTIVE}
              hoverColor={hoverTextColors.LIGHTBRONZE}
            >
              {resource.requestShowcase}
            </TypographyPrimitive>
          </LinkPrimitive>
        )}
        {resource.showcaseCommentary && (
          <div
            className={`cursor-pointer overflow-y-hidden rounded-lg bg-lightgold p-1 transition-all duration-500 hover:h-auto xl:w-[500px] ${
              openCommentary.includes(resource?.name + 'showcase') ? 'max-h-[1000px]' : 'max-h-8'
            }`}
            onClick={() => toggleCommentaryDisplay(resource?.name + 'showcase')}
          >
            <TypographyPrimitive font={Fonts.GENERALMEDIUM}>
              {resource.showcaseCommentary}
            </TypographyPrimitive>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
          font={Fonts.GENERALMEDIUM}
        >
          Бенч-карта:
        </TypographyPrimitive>
        {resource.benchMap && (
          <LinkPrimitive href={resource.benchMap}>
            <TypographyPrimitive
              color={textColors.GOLD}
              font={Fonts.GENERALMEDIUM}
              fontSize={fontSizes.LARGEPLUSADAPTIVE}
              hoverColor={hoverTextColors.LIGHTBRONZE}
            >
              {resource.benchMap}
            </TypographyPrimitive>
          </LinkPrimitive>
        )}
        {resource.benchMapCommentary && (
          <div
            className={`cursor-pointer overflow-y-hidden rounded-lg bg-lightgold p-1 transition-all duration-500 hover:h-auto xl:w-[500px] ${
              openCommentary.includes(resource?.name + 'bench') ? 'max-h-[1000px]' : 'max-h-8'
            }`}
            onClick={() => toggleCommentaryDisplay(resource?.name + 'bench')}
          >
            <TypographyPrimitive font={Fonts.GENERALMEDIUM}>
              {resource.benchMapCommentary}
            </TypographyPrimitive>
          </div>
        )}
      </div>
      <TypographyPrimitive
        as="p"
        color={textColors.LIGHTGOLD}
        font={Fonts.GENERALMEDIUM}
        fontSize={fontSizes.LARGEPLUSADAPTIVE}
      >
        {resource.content}
      </TypographyPrimitive>
      <div className="flex flex-wrap items-center gap-2">
        <TypographyPrimitive
          as="h3"
          color={textColors.LIGHTGOLD}
          font={Fonts.GENERALMEDIUM}
          fontSize={fontSizes.LARGEPLUSADAPTIVE}
        >
          Индустриальные наработки:
        </TypographyPrimitive>
        {resource.groundwork &&
          resource.groundwork.split(' ').map((link) => (
            <LinkPrimitive key={link} href={link}>
              <TypographyPrimitive
                color={textColors.GOLD}
                font={Fonts.GENERALMEDIUM}
                fontSize={fontSizes.LARGEPLUSADAPTIVE}
                hoverColor={hoverTextColors.LIGHTBRONZE}
              >
                {link}
              </TypographyPrimitive>
            </LinkPrimitive>
          ))}
      </div>
      <RedactForm />
    </div>
  ) : (
    <div className="ml-4 w-full lg:w-[46%] xl:ml-14 xl:w-[59%]">
      <TypographyPrimitive
        as="h2"
        mode={TypographyModes.TITULAR}
        fontSize={fontSizes.ULTRALARGEADAPTIVE}
      >
        Выберете интересующую Вас компанию.
      </TypographyPrimitive>
    </div>
  );
}

export default React.memo(FullCompanyCard);
