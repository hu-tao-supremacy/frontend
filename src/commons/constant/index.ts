import { Gender } from "@/apollo/types";

export const CLOSE_MODAL = "close-modal";

export const UPDATE_MODEL_VALUE = "update:modelValue";

export const USER_INPUT = "user-input";

export const SELECT_NAVBAR_OPTION = "select-navbar-option";

export const SELECT_MEMBER = "select-member";

export const LOGOUT = "logout";

export const SEARCH = "search";

export const SUBMIT_FORM = "submit-form";

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
