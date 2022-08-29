import TypographyPrimitive, { TypographyModes } from '../primitives/TypographyPrimitive';
import JoinFormData from '../data/JoinForm.json';
import InputPrimitive, { InputModes } from '../primitives/InputPrimitive';
import { inputPlaceholderFunction } from '../utils/inputPlaceholderFunction';
import React from 'react';
import { changeRangeBackground } from '../utils/changeRangeBackground';
import { afterBgColors, bgColors } from '../themes/colors';

function JoinForm() {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50">
      <form className="h-11/12 w-1/3 flex-col content-center items-center bg-lightgold px-10">
        <TypographyPrimitive as="h2" mode={TypographyModes.TITULAR}>
          {JoinFormData.title}
        </TypographyPrimitive>
        <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
          {JoinFormData.additionalText}
        </TypographyPrimitive>
        {JoinFormData.textInputs.map((input) => (
          <InputPrimitive
            type="text"
            mode={InputModes.TEXTPRIMARY}
            textParams={{ placeholder: input.placeholder }}
            key={input.placeholder}
            value=""
            onChange={inputPlaceholderFunction}
          />
        ))}
        {JoinFormData.radioInputs.map((input) => (
          <div key={input.name}>
            <TypographyPrimitive as="h3" mode={TypographyModes.PRIMARYPLUS}>
              {input.label}
            </TypographyPrimitive>
            {input.buttons.map((radio) => (
              <div className="flex-col items-center" key={radio.value}>
                <TypographyPrimitive as="label" mode={TypographyModes.PRIMARY}>
                  <InputPrimitive
                    type="radio"
                    mode={InputModes.RADIOPRIMARY}
                    radioParams={{ name: input.name }}
                    value={radio.value}
                    onChange={inputPlaceholderFunction}
                  />
                  {radio.label}
                </TypographyPrimitive>
              </div>
            ))}
          </div>
        ))}
        {JoinFormData.rangeInputs.map((input) => (
          <div key={input.label}>
            <TypographyPrimitive as="label" mode={TypographyModes.PRIMARYPLUS}>
              {input.label}
              <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
                {input.additionalLabel}
              </TypographyPrimitive>
              <InputPrimitive
                type="range"
                mode={InputModes.RANGEPRIMARY}
                value="5"
                rangeParams={{ max: +input.rangeProps.max, min: +input.rangeProps.min }}
                onChange={changeRangeBackground}
              />
              <div>
                <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
                  {input.rangeProps.min}
                </TypographyPrimitive>
                <TypographyPrimitive as="p" mode={TypographyModes.PRIMARY}>
                  {input.rangeProps.max}
                </TypographyPrimitive>
              </div>
            </TypographyPrimitive>
          </div>
        ))}
        {JoinFormData.checkboxes.map((checkbox) => (
          <TypographyPrimitive as="label" mode={TypographyModes.PRIMARY} key={checkbox.label}>
            <InputPrimitive
              type="checkbox"
              mode={InputModes.CHECKBOXPRIMARY}
              value={false}
              onChange={inputPlaceholderFunction}
            />
            {checkbox.label}
          </TypographyPrimitive>
        ))}
        <div
          className={` ${bgColors.BLACK} ${afterBgColors.GOLD} button-primary relative overflow-hidden`}
        >
          <InputPrimitive
            type="submit"
            mode={InputModes.SUBMITPRIMARY}
            value="Подтвердить"
            onChange={inputPlaceholderFunction}
          />
        </div>
      </form>
    </div>
  );
}

export default React.memo(JoinForm);
