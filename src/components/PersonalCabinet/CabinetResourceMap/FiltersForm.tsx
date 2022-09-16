import { useDispatch, useSelector } from 'react-redux';
import { GlobalDispatch, GlobalState } from '../../../redux/store';
import FiltersData from '../../../data/CabinetResourceMap/Filters.json';
import InputPrimitive, { InputModes } from '../../../primitives/InputPrimitive';
import React from 'react';
import { inputPlaceholderFunction } from '../../../utils/inputPlaceholderFunction';
import { updateResourceFilters } from '../../../redux/slices/ResourecesSlice';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';
import { afterBgColors, bgColors } from '../../../themes/colors';
import { fontSizes } from '../../../themes/sizes';

function FiltersForm() {
  const initialFilters = useSelector((state: GlobalState) => state.resources.resourceFilters);
  const dispatch = useDispatch() as GlobalDispatch;

  const resourceFilters = Object.assign({}, initialFilters);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(updateResourceFilters(resourceFilters));
      }}
      className="custom-scrollbar-item relative z-10 flex h-[400px] w-[95%] flex-col items-start justify-between overflow-y-auto overflow-x-hidden bg-white py-2 pl-3 lg:h-full lg:w-[200px]"
    >
      {Object.keys(FiltersData).map((filterKey) => {
        const filterName = FiltersData[filterKey as keyof typeof FiltersData];
        const resourceKey = filterKey as keyof typeof FiltersData;
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
                    mode={InputModes.CHECKBOXRADIOLIKE}
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
          <TypographyPrimitive
            as="label"
            mode={TypographyModes.PRIMARYPLUS}
            fontSize={fontSizes.DEFAULTADAPTIVE}
            key={filterName}
          >
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
