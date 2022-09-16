import React, { useCallback, useState } from 'react';
import ButtonPrimitive from '../../../primitives/ButtonPrimitive';
import TypographyPrimitive, { TypographyModes } from '../../../primitives/TypographyPrimitive';

interface IPartnersListProps {
  partners: Array<string>;
  content: {
    buttonClose: string;
    buttonOpen: string;
  };
}

function PartnersList({ partners, content }: IPartnersListProps) {
  const [isFullList, setIsFullList] = useState(false);

  const toggleListMode = useCallback(() => {
    setIsFullList(!isFullList);
  }, [isFullList]);

  return (
    <div
      className={`${
        isFullList
          ? 'full-content max-h-[9000px] lg:max-h-[3000px]'
          : 'preview-content max-h-[500px]'
      } horizontal-container relative flex flex-wrap items-end justify-center gap-3 overflow-hidden after:absolute after:h-56 after:w-full after:bg-opacity-40 after:bg-gradient-to-b after:from-transparent after:via-light-gray after:to-light-black`}
    >
      <div className="mb-10 flex flex-wrap items-end justify-center gap-3 overflow-hidden px-8">
        {partners.map((partnerLogo, index) => (
          <img
            src={partnerLogo}
            alt="logo"
            key={index.toString() + partnerLogo.slice(0, 2)}
            width="100px"
            height="auto"
            loading="lazy"
            className="odd:pb-24"
          />
        ))}
      </div>
      <ButtonPrimitive additionalClasses="absolute bottom-8" onClick={toggleListMode}>
        <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS}>
          {isFullList ? content.buttonOpen : content.buttonClose}
        </TypographyPrimitive>
      </ButtonPrimitive>
    </div>
  );
}

export default React.memo(PartnersList);
