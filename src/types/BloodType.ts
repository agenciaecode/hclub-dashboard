export const BloodTypes = [
  'a+',
  'a-',
  'b+',
  'b-',
  'ab+',
  'ab-',
  'o+',
  'o-',
] as const;

export type BloodType = typeof BloodTypes[number];
