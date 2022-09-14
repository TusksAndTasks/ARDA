import React from 'react';
import { Link } from 'react-router-dom';
import IconPrimitive from '../../primitives/IconPrimitive';
import CabinetNavigationData from '../../data/CabinetNavigation/CabinetNavigation.json';
import { ReactComponent as CabinetNavigationSprite } from '../../data/CabinetNavigation/CabinetNavigationSprite.svg';
import { squareSizes } from '../../themes/sizes';
import { bgColors, textColors } from '../../themes/colors';

function CabinetNavigation() {
  return (
    <div className=" sticky top-0 bottom-0 z-10 flex flex-col justify-between bg-gold">
      <CabinetNavigationSprite className="hidden" />
      {CabinetNavigationData.navigation.map((navelem) => (
        <Link to={navelem.to} key={navelem.to} className={`nav relative block`}>
          <IconPrimitive
            spriteId={navelem.spriteId}
            size={squareSizes.MEDIUM}
            bgSize={squareSizes.MEDIUMPLUS}
            color={textColors.BLACK}
            bgColor={bgColors.GOLD}
          ></IconPrimitive>
        </Link>
      ))}
    </div>
  );
}

export default CabinetNavigation;
