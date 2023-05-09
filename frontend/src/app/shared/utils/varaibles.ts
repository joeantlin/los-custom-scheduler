const PRICE_TYPE = {
  SET: 'Set',
  HOUR: 'Hour',
  UNIT: 'Unit',
} as const;

export type PriceType = keyof typeof PRICE_TYPE;
