import { Gender } from "@/apollo/types";

export const CLOSE_MODAL = "close-modal";

export const UPDATE_MODEL_VALUE = "update:modelValue";

export const USER_INPUT = "user-input";

export const SELECT_NAVBAR_OPTION = "select-navbar-option";

export const SELECT_MEMBER = "select-member";

export const LOGOUT = "logout";

export const SEARCH = "search";

export const SUBMIT_FORM = "submit-form";

export const REMOVE = "remove";

export const TICKET = "ticket";

export enum TicketStatus {
  ONGOING = "ongoing",
  PENDING = "pending",
  HISTORY = "history"
}

export const GENDER = {
  Male: Gender.M,
  Female: Gender.F,
  "Not Specified": Gender.Ns
};

export const GENDER_MAPPER = {
  [Gender.M]: "Male",
  [Gender.F]: "Female",
  [Gender.Ns]: "Not Specified"
};

export enum OrgEventNavbarSelection {
  DASHBOARD = "dashboard",
  MANAGE_ATTENDEE = "manageAttendee",
  MANAGE_FEEDBACK = "manageFeedback",
  NONE = ""
}

export enum EventDateTimeFormOption {
  SPECIFY = "specify date and time",
  START_END = "start and end duration",
  LATER = "announce later"
}

export enum EventLocationFormOption {
  SPECIFY = "specify location",
  LATER = "announce later",
  ONLINE = "online event"
}
