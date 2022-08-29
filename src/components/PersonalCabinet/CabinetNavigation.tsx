import React from 'react';
import { Link } from 'react-router-dom';
import IconPrimitive from '../../primitives/IconPrimitive';
import CabinetNavigationData from '../../data/CabinetNavigation.json';
import { ReactComponent as CabinetNavigationSprite } from '../../data/CabinetNavigationSprite.svg';
import { squareSizes } from '../../themes/sizes';
import { bgColors, textColors } from '../../themes/colors';

function CabinetNavigation() {
  return (
    <div className="flex flex-col justify-between">
      <CabinetNavigationSprite className="hidden" />
      {CabinetNavigationData.navigation.map((navelem) => (
        <Link
          to={navelem.to}
          key={navelem.to}
          className={`relative block w-40 after:absolute after:top-0 after:left-full after:block after:hidden after:h-full after:w-[200%] after:bg-amber-300 after:text-black hover:after:block ${navelem.informationPopUp}`}
        >
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

export default React.memo(CabinetNavigation);
