import {
  SetEventDurationsDurationInput,
  SetEventTagsTagInput
} from "@/apollo/types";

export interface Event {
  description: string;
  day: number;
  date: string;
  month: string;
  time: string;
  title: string;
  faculty: string;
  location: string;
  imgHash: string;
  img: string;
  tags: Array<string>;
  attendeeLimit: number;
  currentAttendee: number;
}

export interface Banner {
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

export interface Ticket {
  event: Event;
  organization: Org;
  ticketID: string;
  bgColor: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  img: string;
  imgHash: string;
  email: string;
  like: number;
  ticket: number;
  following: number;
}

export interface Interest {
  id: number;
  name: string;
  posterImageUrl: string;
}

export interface Duration {
  start: string;
  finish: string;
}

export interface District {
  DISTRICT_ID: number;
  DISTRICT_TH_NAME: string;
  DISTRICT_ENG_NAME: string;
  PROVINCE_ID: number;
  GEO_ID: number;
  ZIPCODE: string;
}

export interface TextAreaRef {
  style: { height: string };
  scrollHeight: number;
}

export interface EventInfoForm {
  name: string;
  contact: string;
  tags: SetEventTagsTagInput[];
  description: string;
  attendeeLimit: number;
  registrationDueDate: string;
  posterImg: string;
  coverImg: string;
  isValid: boolean;
}

export interface EventLocationForm {
  name: string;
  googleMapUrl: string;
  description: string;
  isOnline: boolean;
  isValid: boolean;
}

export interface EventDurationsForm {
  durations: SetEventDurationsDurationInput[];
  isValid: boolean;
}
