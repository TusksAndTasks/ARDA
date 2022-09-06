import PartnersListData from '../../data/MainPage/PartnersListData.json';
import React, { useCallback, useState } from 'react';
import ButtonPrimitive from '../../primitives/ButtonPrimitive';
import MainPageData from '../../data/MainPage/MainPage.json';
import TypographyPrimitive, { TypographyModes } from '../../primitives/TypographyPrimitive';

function PartnersList() {
  const [isFullList, setIsFullList] = useState(false);

  const toggleListMode = useCallback(() => {
    setIsFullList(!isFullList);
  }, [isFullList]);

  return (
    <div
      className={`${
        isFullList ? 'max-h-full' : 'max-h-96'
      } relative flex flex-wrap items-end justify-center gap-3 overflow-hidden transition duration-500 ease-in-out after:absolute after:h-56 after:w-full after:bg-opacity-40 after:bg-gradient-to-b after:from-transparent after:via-light-gray after:to-light-black`}
    >
      {PartnersListData.partners.map((partnerLogo, index) => (
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
      <ButtonPrimitive additionalClasses="absolute bottom-0" onClick={toggleListMode}>
        <TypographyPrimitive mode={TypographyModes.PRIMARYPLUS}>
          {isFullList
            ? MainPageData.PartnersSection.content.buttonOpen
            : MainPageData.PartnersSection.content.buttonClose}
        </TypographyPrimitive>
      </ButtonPrimitive>
    </div>
  );
}

export default React.memo(PartnersList);
