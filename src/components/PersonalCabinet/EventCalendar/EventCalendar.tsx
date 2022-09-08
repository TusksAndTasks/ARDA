import React, { useState } from 'react';
import useEventYears from '../../../hooks/useEventYears';
import FiltersForm from './FiltersForm';
import ButtonPrimitive from '../../../primitives/ButtonPrimitive';
import {
  afterBgColors,
  bgColors,
  borderColors,
  hoverTextColors,
  textColors,
} from '../../../themes/colors';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import LinkPrimitive from '../../../primitives/LinkPrimitive';

function EventCalendar() {
  const eventYears = useEventYears();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className={`relative flex transition-all ${isFilterOpen ? '' : '-translate-x-[200px]'}`}>
      <FiltersForm />
      <ButtonPrimitive
        color={textColors.LIGHTBRONZE}
        bgColor={bgColors.TRANSPARENT}
        borderColor={borderColors.LIGHTBRONZE}
        afterColor={afterBgColors.LIGHTBRONZE}
        hoverTextColor={hoverTextColors.GOLD}
        additionalClasses="relative"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        {isFilterOpen ? 'закрыть фильтр' : 'открыть фильтр'}
      </ButtonPrimitive>
      <div className="ml-3 overflow-y-auto">
        {eventYears.map((eventYear) => (
          <div key={eventYear.year} className="bg-bronze">
            <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
              {eventYear.year}
            </TypographyPrimitive>
            {eventYear.months.map((month) => (
              <div key={month.title} className="bg-gold">
                <TypographyPrimitive as="h4" mode={TypographyModes.PRIMARYPLUS}>
                  {month.title}
                </TypographyPrimitive>
                {month.events.map((event) => (
                  <div key={event.name} className="my-5 bg-lightgold">
                    <TypographyPrimitive as="h4" mode={TypographyModes.PRIMARYPLUS}>
                      {event.name}
                    </TypographyPrimitive>
                    <TypographyPrimitive as="p">{event.type}</TypographyPrimitive>
                    <TypographyPrimitive as="p">{event.startDate}</TypographyPrimitive>
                    <TypographyPrimitive as="p">{event.endDate}</TypographyPrimitive>
                    {event.city &&
                      event.city.map((city) => (
                        <div key={city} className="bg-lightbronze p-2">
                          <TypographyPrimitive as="p">{city}</TypographyPrimitive>
                        </div>
                      ))}
                    {event.link && <LinkPrimitive href={event.link}>{event.link}</LinkPrimitive>}
                    {event.description && (
                      <TypographyPrimitive as="p">{event.description}</TypographyPrimitive>
                    )}
                    {event.transcript && (
                      <LinkPrimitive href={event.transcript}>{event.transcript}</LinkPrimitive>
                    )}
                    {event.auditory &&
                      event.auditory.map((group) => (
                        <div key={group} className="bg-lightbronze p-2">
                          <TypographyPrimitive as="p">{group}</TypographyPrimitive>
                        </div>
                      ))}
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
