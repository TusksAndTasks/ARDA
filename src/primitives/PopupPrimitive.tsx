import React from 'react';

interface IPopupPrimitiveProps {
  children?: React.ReactNode;
}

function PopupPrimitive({ children }: IPopupPrimitiveProps) {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black/50">
      <div className="h-auto w-1/4 bg-white py-3">{children}</div>
    </div>
  );
}

export default React.memo(PopupPrimitive);
