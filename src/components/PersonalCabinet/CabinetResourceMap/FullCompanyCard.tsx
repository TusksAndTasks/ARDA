import { IResource } from '../../../redux/slices/ResourecesSlice';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import React, { useState } from 'react';
import { fontSizes, squareSizes } from '../../../themes/sizes';
import { bgColors, textColors } from '../../../themes/colors';
import { Fonts } from '../../../themes/fonts';
import IconPrimitive from '../../../primitives/IconPrimitive';
import { ReactComponent as ResourcesSprite } from '../../../data/CabinetResourceMap/ResourcesSprite.svg';
import toggleItemDisplay from '../../../utils/toggleItemDisplay';
import RedactForm from '../../../data/CabinetResourceMap/RedactForm';
import CompanyInfoLine from './CompanyInfoLine';
import { LineMode } from './CompanyInfoEntry';

function FullCompanyCard({ resource }: { resource: null | IResource }) {
  const [openCommentary, setOpenCommentary] = useState<string[]>([]);
  const toggleCommentaryDisplay = toggleItemDisplay(openCommentary, setOpenCommentary);

  return resource ? (
    <div className=" border-1 custom-scrollbar-item my-8 ml-[16px] ml-2 box-border flex w-[87%] flex-col gap-3 overflow-y-auto rounded-xl border-lightgold bg-black p-2 outline outline-4 outline-offset-2 outline-black sm:ml-[48px] sm:ml-4 sm:p-4 lg:w-full lg:w-[46%] xl:ml-12 xl:w-[58%] xsm:ml-[32px]">
      <ResourcesSprite className="hidden" />
      <TypographyPrimitive
        as="h2"
        mode={TypographyModes.TITULARSHADOW}
        fontSize={fontSizes.ULTRALARGE}
        color={textColors.GOLD}
      >
        {resource.name}
      </TypographyPrimitive>
      {resource.link && (
        <CompanyInfoLine text="Ссылка на компанию:" data={resource.link} mode={LineMode.LINKS} />
      )}
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
        <CompanyInfoLine
          text="Профиль на RusProfile"
          data={resource.RusProfile}
          mode={LineMode.LINKS}
        />
      )}
      <CompanyInfoLine
        text="Города"
        data={resource.city}
        mode={LineMode.POINTS}
        bgColor={bgColors.LIGHTGOLD}
      />
      {resource.contacts && (
        <CompanyInfoLine text="Контакты:" data={resource.contacts} mode={LineMode.LINKS} />
      )}
      <CompanyInfoLine
        text="Формат сотрудничества:"
        data={resource.partnershipFormat}
        mode={LineMode.POINTS}
        bgColor={bgColors.LIGHTBRONZE}
        textColor={textColors.LIGHTGOLD}
      />
      <CompanyInfoLine
        text="Количество сотрудников:"
        data={resource.employeeAmount.toString()}
        mode={LineMode.POINTS}
        bgColor={bgColors.GOLD}
      />
      <CompanyInfoLine
        text="Стек технологий"
        data={resource.techStack}
        mode={LineMode.POINTS}
        bgColor={bgColors.BRONZE}
        textColor={textColors.LIGHTGOLD}
      />
      <CompanyInfoLine
        text="Список услуг:"
        data={resource.services}
        mode={LineMode.POINTS}
        commentary={resource.servicesCommentary}
        commentaryName={resource?.name + 'services'}
        openCommentary={openCommentary}
        toggleCommentaryDisplay={toggleCommentaryDisplay}
        bgColor={bgColors.LIGHTGOLD}
      />
      <CompanyInfoLine
        text="Доменные экспертизы:"
        data={resource.expertise}
        mode={LineMode.LINKS}
        commentary={resource.expertiseCommentary}
        commentaryName={resource?.name + 'expertise'}
        openCommentary={openCommentary}
        toggleCommentaryDisplay={toggleCommentaryDisplay}
        bgColor={bgColors.LIGHTBRONZE}
        textColor={textColors.LIGHTGOLD}
      />
      <CompanyInfoLine
        text="Рынки:"
        data={resource.markets}
        mode={LineMode.POINTS}
        commentary={resource.marketsCommentary}
        commentaryName={resource?.name + 'markets'}
        openCommentary={openCommentary}
        toggleCommentaryDisplay={toggleCommentaryDisplay}
        bgColor={bgColors.BRONZE}
        textColor={textColors.LIGHTGOLD}
      />
      {resource.requestShowcase && (
        <CompanyInfoLine
          text="Витрина запросов:"
          data={resource.requestShowcase}
          mode={LineMode.LINKS}
          commentary={resource.showcaseCommentary}
          commentaryName={resource?.name + 'showcase'}
          openCommentary={openCommentary}
          toggleCommentaryDisplay={toggleCommentaryDisplay}
          bgColor={bgColors.LIGHTGOLD}
        />
      )}
      {resource.benchMap && (
        <CompanyInfoLine
          text="Бенч-карта:"
          data={resource.benchMap}
          mode={LineMode.LINKS}
          commentary={resource.benchMapCommentary}
          openCommentary={openCommentary}
          toggleCommentaryDisplay={toggleCommentaryDisplay}
          textColor={textColors.LIGHTGOLD}
          bgColor={bgColors.LIGHTBRONZE}
        />
      )}
      <TypographyPrimitive
        as="p"
        color={textColors.LIGHTGOLD}
        font={Fonts.GENERALMEDIUM}
        fontSize={fontSizes.LARGEPLUSADAPTIVE}
      >
        {resource.content}
      </TypographyPrimitive>
      {resource.groundwork && (
        <CompanyInfoLine
          text="Индустриальные наработки:"
          data={resource.groundwork}
          mode={LineMode.LINKS}
        />
      )}
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
