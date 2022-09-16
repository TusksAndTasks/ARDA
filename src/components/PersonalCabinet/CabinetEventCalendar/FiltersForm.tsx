import { useDispatch, useSelector } from 'react-redux';
import { GlobalDispatch, GlobalState } from '../../../redux/store';
import FiltersData from '../../../data/CabinetEventCalendar/Filters.json';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import InputPrimitive, { InputModes } from '../../../primitives/InputPrimitive';
import { afterBgColors, bgColors } from '../../../themes/colors';
import { inputPlaceholderFunction } from '../../../utils/inputPlaceholderFunction';
import React from 'react';
import { updateEventFilters } from '../../../redux/slices/CalendarSlice';
import { fontSizes } from '../../../themes/sizes';

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
      className="custom-scrollbar-item relative z-10 flex h-[400px] w-[95%] flex-col items-start justify-between overflow-y-auto overflow-x-hidden bg-white py-2 pl-3 lg:h-full lg:w-[200px]"
    >
      {Object.keys(FiltersData).map((filterKey) => {
        const filterName = FiltersData[filterKey as keyof typeof FiltersData];
        const eventKey = filterKey as keyof typeof FiltersData;
        if (Array.isArray(filterName)) {
          return (
            <div key={filterKey} className="my-2 flex flex-col">
              {(filterName as Array<string>).map((option) => (
                <TypographyPrimitive
                  as="label"
                  mode={TypographyModes.PRIMARYPLUS}
                  fontSize={fontSizes.DEFAULTADAPTIVE}
                  key={option}
                >
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
          <TypographyPrimitive
            as="label"
            mode={TypographyModes.PRIMARYPLUS}
            fontSize={fontSizes.DEFAULTADAPTIVE}
            key={filterName}
          >
            <InputPrimitive
              type="date"
              value={
                eventFilters[eventKey]
                  ? (eventFilters[eventKey] as string).split('.').reverse().join('-')
                  : ''
              }
              onChange={(e) => {
                (eventFilters[eventKey] as string) = e.target.value.split('-').reverse().join('.');
              }}
            />
            {filterName}
          </TypographyPrimitive>
        );
      })}
      <div
        className={` ${bgColors.BLACK} ${afterBgColors.GOLD} button-primary relative -ml-3 min-h-[40px] self-center overflow-hidden`}
      >
        <InputPrimitive
          type="submit"
          mode={InputModes.SUBMITPRIMARY}
          value="Применить"
          onChange={inputPlaceholderFunction}
        />
      </div>
    </form>
  );
}

export default React.memo(FiltersForm);
