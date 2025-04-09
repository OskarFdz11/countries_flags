export type CountryCardProps = {
  name: string;
  code: string;
  emoji: string;
};

export type ID = string | number;

export type Continent = {
  name: string;
  code: ID;
  countries: Country;
};

export type Language = {
  code: ID;
  name: string;
  native: string;
  rtl: boolean;
};

export type State = {
  name: string;
  code: string;
  country: Country;
};

export type Subdivision = {
  name: string;
  code: ID;
  country: Country;
};

export type Country = {
  name?: string;
  capital?: string;
  currency?: string;
  phone?: string;
  native?: string;
  emoji?: string;
  emojiU?: string;
  continent?: Continent;
  languages?: Language[];
  states?: State[];
  subdivisions?: Subdivision[];
};
