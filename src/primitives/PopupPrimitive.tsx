import React from 'react';

interface IPopupPrimitiveProps {
  closePopup: () => void;
  children?: React.ReactNode;
}

function PopupPrimitive({ closePopup, children }: IPopupPrimitiveProps) {
  return (
    <div
      className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50"
      onClick={closePopup}
    >
      <div
        className="flex h-auto w-1/4 flex-col items-center gap-2 bg-white p-5"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default React.memo(PopupPrimitive);
