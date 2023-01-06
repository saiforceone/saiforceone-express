import { getRandomValues } from 'crypto';
export const keyGen = (prefix: string) => {
  return (
    `${prefix}-` +
    ([1e4] + -8e4 + -1e4).replace(/[018]/g, (c) =>
      (c ^ (getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(
        16
      )
    )
  );
};
