import React from 'react';
import ButtonPrimitive from './primitives/ButtonPrimitive';
import TypographyPrimitive from './primitives/TypographyPrimitive';

function App() {
  return (
    <div className="bg-amber-300 text-3xl font-bold">
      Upper Text
      <ButtonPrimitive>
        <TypographyPrimitive>ClickMe</TypographyPrimitive>
      </ButtonPrimitive>
    </div>
  );
}

export default App;
