export interface Event {
  day: number;
  month: string;
  time: string;
  title: string;
  faculty: string;
  imgHash: string;
  img: string;
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

export interface Schedule {
  faculty: string;
  day: number;
  month: string;
  time: string;
}
