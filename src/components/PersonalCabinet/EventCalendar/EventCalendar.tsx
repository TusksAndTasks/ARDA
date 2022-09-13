import React, { useState } from 'react';
import useEventYears from '../../../hooks/useEventYears';
import FiltersForm from './FiltersForm';
import ButtonPrimitive, { ButtonModes } from '../../../primitives/ButtonPrimitive';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../../themes/colors';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import LinkPrimitive from '../../../primitives/LinkPrimitive';
import { fontSizes } from '../../../themes/sizes';
import { Fonts } from '../../../themes/fonts';

function EventCalendar() {
  const eventYears = useEventYears();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div
      className={`relative flex w-[80%] flex-col transition-all sm:w-full lg:flex-row  ${
        isFilterOpen ? '' : '-translate-y-[400px] lg:-translate-x-[170px] lg:-translate-y-0'
      }`}
    >
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
      <div className="custom-scrollbar-item mt-3 flex max-w-[80%] flex-col gap-5 overflow-x-auto overflow-y-auto px-3  md:flex-row lg:mt-0 lg:max-w-full">
        {eventYears.map((eventYear) => (
          <div
            key={eventYear.year}
            className="mb-2 h-fit min-w-[180px] rounded-b-xl bg-bronze p-1 sm:w-[500px] sm:min-w-[280px] sm:p-4 sm:shadow-strict-bronze-shadow xsm:min-w-[280px] xsm:p-4 xsm:shadow-strict-bronze-shadow"
          >
            <TypographyPrimitive
              as="h2"
              mode={TypographyModes.TITULAR}
              fontSize={fontSizes.ULTRALARGEADAPTIVE}
            >
              {eventYear.year}
            </TypographyPrimitive>
            {eventYear.months.map((month) => (
              <div
                key={month.title}
                className="mb-4 rounded-b-lg bg-gold p-1 sm:p-4 sm:shadow-strict-bronze-shadow xsm:p-4 xsm:shadow-strict-bronze-shadow"
              >
                <TypographyPrimitive
                  as="h4"
                  fontSize={fontSizes.LARGEPLUSADAPTIVE}
                  font={Fonts.GENERALBOLD}
                >
                  {month.title}
                </TypographyPrimitive>
                {month.events.map((event) => (
                  <div
                    key={event.name}
                    className="mb-4 mt-2 rounded-b-lg bg-lightgold p-1 sm:p-4 sm:shadow-strict-bronze-shadow xsm:p-4 xsm:shadow-strict-bronze-shadow"
                  >
                    <TypographyPrimitive
                      as="h4"
                      fontSize={fontSizes.LARGEPLUSADAPTIVE}
                      font={Fonts.GENERALMEDIUM}
                    >
                      {event.name}
                    </TypographyPrimitive>
                    <div className="w-fit rounded-lg bg-black px-2 py-1 text-center">
                      <TypographyPrimitive
                        as="p"
                        fontSize={fontSizes.DEFAULTADAPTIVE}
                        color={textColors.LIGHTGOLD}
                      >
                        {event.type}
                      </TypographyPrimitive>
                    </div>
                    <div className="flex gap-2">
                      <TypographyPrimitive
                        as="p"
                        font={Fonts.GENERALMEDIUM}
                        fontSize={fontSizes.DEFAULTADAPTIVE}
                      >
                        Начало:
                      </TypographyPrimitive>
                      <TypographyPrimitive
                        as="p"
                        font={Fonts.GENERALMEDIUM}
                        fontSize={fontSizes.DEFAULTADAPTIVE}
                      >
                        {event.startDate}
                      </TypographyPrimitive>
                    </div>
                    <div className="flex gap-2">
                      <TypographyPrimitive
                        as="p"
                        font={Fonts.GENERALMEDIUM}
                        fontSize={fontSizes.DEFAULTADAPTIVE}
                      >
                        Окончание:
                      </TypographyPrimitive>
                      <TypographyPrimitive
                        as="p"
                        font={Fonts.GENERALMEDIUM}
                        fontSize={fontSizes.DEFAULTADAPTIVE}
                      >
                        {event.endDate}
                      </TypographyPrimitive>
                    </div>
                    <div className="flex flex-wrap">
                      {event.city &&
                        event.city.map((city) => (
                          <div
                            key={city}
                            className="w-fit  rounded-lg bg-lightbronze p-2 px-2 py-1 text-center"
                          >
                            <TypographyPrimitive as="p">{city}</TypographyPrimitive>
                          </div>
                        ))}
                    </div>
                    {event.link && (
                      <LinkPrimitive href={event.link}>
                        <TypographyPrimitive
                          fontSize={fontSizes.LARGEPLUSADAPTIVE}
                          font={Fonts.GENERALMEDIUM}
                          color={textColors.LIGHTBRONZE}
                          hoverColor={hoverTextColors.BRONZE}
                        >
                          {event.link}
                        </TypographyPrimitive>
                      </LinkPrimitive>
                    )}
                    {event.description && (
                      <TypographyPrimitive
                        as="p"
                        fontSize={fontSizes.DEFAULTADAPTIVE}
                        font={Fonts.GENERALMEDIUM}
                      >
                        {event.description}
                      </TypographyPrimitive>
                    )}
                    {event.transcript && (
                      <LinkPrimitive href={event.transcript}>
                        <TypographyPrimitive
                          fontSize={fontSizes.LARGEADAPTIVE}
                          font={Fonts.GENERALMEDIUM}
                          color={textColors.LIGHTBRONZE}
                          hoverColor={hoverTextColors.BRONZE}
                        >
                          {event.transcript}
                        </TypographyPrimitive>
                      </LinkPrimitive>
                    )}
                    <div className="flex flex-wrap items-center gap-2">
                      <TypographyPrimitive
                        fontSize={fontSizes.LARGEADAPTIVE}
                        font={Fonts.GENERALMEDIUM}
                      >
                        Мероприятие для:
                      </TypographyPrimitive>
                      {event.auditory &&
                        event.auditory.map((group) => (
                          <div
                            key={group}
                            className="w-fit rounded-lg bg-black px-2 py-1 text-center"
                          >
                            <TypographyPrimitive as="p" color={textColors.LIGHTGOLD}>
                              {group}
                            </TypographyPrimitive>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(EventCalendar);
