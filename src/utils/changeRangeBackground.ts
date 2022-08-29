import { ChangeEvent } from 'react';

export function changeRangeBackground(e: ChangeEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;

  const min = +target.min;
  const max = +target.max;
  const val = +target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
}
