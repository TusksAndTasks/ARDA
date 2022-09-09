import React from 'react';

export default function toggleItemDisplay(
  displayState: Array<string>,
  setDisplayState: React.Dispatch<React.SetStateAction<string[]>>
) {
  return (id: string) => {
    displayState.includes(id)
      ? setDisplayState(displayState.filter((answerId) => answerId !== id))
      : setDisplayState([...displayState, id]);
  };
}
