export interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  faculty: string;
  imgHash: string;
  img: string;
  tags: Array<string>;
}

export interface Org {
  imgHash: string;
  img: string;
  shortName: string;
  fullName: string;
  description: string;
}

export interface District {
  DISTRICT_ID: number;
  DISTRICT_TH_NAME: string;
  DISTRICT_ENG_NAME: string;
  PROVINCE_ID: number;
  GEO_ID: number;
  ZIPCODE: string;
}
