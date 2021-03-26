export interface Event {
  description: string;
  day: number;
  date: string;
  month: string;
  time: string;
  title: string;
  faculty: string;
  imgHash: string;
  img: string;
  tags: Array<string>;
}
export interface Banner {
  title: string;
  description: string;
  tags: Array<string>;
  imgHash: string;
  img: string;
  date: string;
  time: string;
  location: string;
}

export interface Org {
  imgHash: string;
  img: string;
  shortName: string;
  fullName: string;
}

export interface District {
  DISTRICT_ID: number;
  DISTRICT_TH_NAME: string;
  DISTRICT_ENG_NAME: string;
  PROVINCE_ID: number;
  GEO_ID: number;
  ZIPCODE: string;
}

export interface Schedule {
  faculty: string;
  day: number;
  month: string;
  time: string;
}
