import { useDispatch, useSelector } from 'react-redux';
import { GlobalDispatch, GlobalState } from '../../../redux/store';
import FiltersData from '../../../data/CabinetResourceMap/Filters.json';
import InputPrimitive, { InputModes } from '../../../primitives/InputPrimitive';
import React from 'react';
import { inputPlaceholderFunction } from '../../../utils/inputPlaceholderFunction';
import { updateResourceFilters } from '../../../redux/slices/ResourecesSlice';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import { afterBgColors, bgColors } from '../../../themes/colors';

function FiltersForm() {
  const initialFilters = useSelector((state: GlobalState) => state.resources.resourceFilters);
  const dispatch = useDispatch() as GlobalDispatch;

  const resourceFilters = Object.assign({}, initialFilters);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(resourceFilters);
        dispatch(updateResourceFilters(resourceFilters));
      }}
      className="relative -z-10 flex h-full w-[200px] flex-col items-start justify-between bg-lightgold"
    >
      {Object.keys(FiltersData).map((filterKey) => {
        const filterName = FiltersData[filterKey as keyof typeof FiltersData];
        const resourceKey = filterKey as keyof typeof FiltersData;
        if (Array.isArray(filterName)) {
          return (
            <div key={filterKey} className="my-2 flex flex-col">
              {(filterName as Array<string>).map((option) => (
                <TypographyPrimitive as="label" mode={TypographyModes.PRIMARYPLUS} key={option}>
                  <InputPrimitive
                    type="checkbox"
                    mode={InputModes.RADIOPRIMARY}
                    value={
                      resourceFilters[resourceKey]
                        ? (resourceFilters[resourceKey] as Array<string>).includes(option)
                        : false
                    }
                    onChange={(e) => {
                      if (!resourceFilters[resourceKey]) {
                        (resourceFilters[resourceKey] as Array<string>) = [];
                      }
                      if (e.target.checked) {
                        (resourceFilters[resourceKey] as Array<string>) = [
                          ...(resourceFilters[resourceKey] as Array<string>),
                          option,
                        ];
                      } else {
                        (resourceFilters[resourceKey] as Array<string>) = (
                          resourceFilters[resourceKey] as Array<string>
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
              type="checkbox"
              mode={InputModes.CHECKBOXPRIMARY}
              value={!!resourceFilters[resourceKey]}
              onChange={(e) => {
                (resourceFilters[resourceKey] as boolean) = e.target.checked;
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
