import { useDispatch, useSelector } from 'react-redux';
import { GlobalDispatch, GlobalState } from '../../../redux/store';
import FiltersData from '../../../data/CabinetEventCalendar/Filters.json';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import InputPrimitive, { InputModes } from '../../../primitives/InputPrimitive';
import { afterBgColors, bgColors } from '../../../themes/colors';
import { inputPlaceholderFunction } from '../../../utils/inputPlaceholderFunction';
import React from 'react';
import { updateEventFilters } from '../../../redux/slices/CalendarSlice';

function FiltersForm() {
  const initialFilters = useSelector((state: GlobalState) => state.eventYears.eventFilters);
  const dispatch = useDispatch() as GlobalDispatch;

  const eventFilters = Object.assign({}, initialFilters);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(updateEventFilters(eventFilters));
      }}
      className="relative z-10 flex h-full w-[200px] flex-col items-start justify-between bg-lightgold"
    >
      {Object.keys(FiltersData).map((filterKey) => {
        const filterName = FiltersData[filterKey as keyof typeof FiltersData];
        const eventKey = filterKey as keyof typeof FiltersData;
        if (Array.isArray(filterName)) {
          return (
            <div key={filterKey} className="my-2 flex flex-col">
              {(filterName as Array<string>).map((option) => (
                <TypographyPrimitive as="label" mode={TypographyModes.PRIMARYPLUS} key={option}>
                  <InputPrimitive
                    type="checkbox"
                    mode={InputModes.RADIOPRIMARY}
                    value={
                      eventFilters[eventKey]
                        ? (eventFilters[eventKey] as Array<string>).includes(option)
                        : false
                    }
                    onChange={(e) => {
                      if (!eventFilters[eventKey]) {
                        (eventFilters[eventKey] as Array<string>) = [];
                      }
                      if (e.target.checked) {
                        (eventFilters[eventKey] as Array<string>) = [
                          ...(eventFilters[eventKey] as Array<string>),
                          option,
                        ];
                      } else {
                        (eventFilters[eventKey] as Array<string>) = (
                          eventFilters[eventKey] as Array<string>
                        ).filter((addedOption) => addedOption !== option);
                      }
                    }}
                  />
                  {option}
                </TypographyPrimitive>
              ))}
            </div>
          );
        }
        return (
          <TypographyPrimitive as="label" mode={TypographyModes.PRIMARYPLUS} key={filterName}>
            <InputPrimitive
              type="date"
              value={
                eventFilters[eventKey]
                  ? (eventFilters[eventKey] as string).split('.').reverse().join('-')
                  : ''
              }
              onChange={(e) => {
                console.log(e.target.value);
                (eventFilters[eventKey] as string) = e.target.value.split('-').reverse().join('.');
              }}
            />
            {filterName}
          </TypographyPrimitive>
        );
      })}
      <div
        className={` ${bgColors.BLACK} ${afterBgColors.GOLD} button-primary relative overflow-hidden`}
      >
        <InputPrimitive
          type="submit"
          mode={InputModes.SUBMITPRIMARY}
          value="submit"
          onChange={inputPlaceholderFunction}
        />
      </div>
    </form>
  );
}

export default React.memo(FiltersForm);
