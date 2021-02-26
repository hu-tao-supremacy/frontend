export interface Event {
  day: number;
  month: string;
  time: string;
  title: string;
  faculty: string;
  img: string;
}
export interface Banner {
  title: string;
  description: string;
  tags: Array<string>;
  img: string;
  date: string;
  time: string;
  location: string;
}

export interface Org {
  img: string;
  shortName: string;
  fullName: string;
}
