import React from 'react';

interface ILinkPrimitiveProps {
  mode?: linkModes;
  href: string;
  children?: React.ReactNode;
}

enum linkModes {
  'PRIMARY' = 'PRIMARY',
}

function LinkPrimitive({ mode = linkModes.PRIMARY, href, children }: ILinkPrimitiveProps) {
  return (
    <a className={linkStylesMap[mode]} href={href}>
      {children}
    </a>
  );
}

export default React.memo(LinkPrimitive);

const linkStylesMap = {
  [linkModes.PRIMARY]: 'appearance-none no-underline mx-1',
};
