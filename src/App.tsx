import React from 'react';
import ButtonPrimitive from './primitives/ButtonPrimitive';

function App() {
  return (
    <div className="bg-amber-300 text-3xl font-bold">
      Hello cringe
      <ButtonPrimitive
        onClick={() => {
          console.log('жмяк');
        }}
      >
        ЖМяКНУТЬ
      </ButtonPrimitive>
    </div>
  );
}

export default App;
