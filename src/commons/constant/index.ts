import { Gender } from "@/apollo/types";

export const CLOSE_MODAL = "close-modal";

export const UPDATE_MODEL_VALUE = "update:modelValue";

export const USER_INPUT = "user-input";

export const SELECT_NAVBAR_OPTION = "select-navbar-option";

export const LOGOUT = "logout";

export const SEARCH = "search";

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

export enum OrgEventNavbarSelection {
  DASHBOARD = "dashboard",
  EVENT_INFO = "eventInfo",
  MANAGE_ATTENDEE = "manageAttendee",
  MANAGE_FEEDBACK = "manageFeedback",
  NONE = ""
}
