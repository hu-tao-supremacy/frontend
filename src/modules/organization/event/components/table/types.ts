import { User, UserEvent } from "@/apollo/types";

export type DataProps = Pick<UserEvent, "status"> & {
  user: Pick<
    User,
    | "id"
    | "firstName"
    | "lastName"
    | "profilePictureUrl"
    | "email"
    | "phoneNumber"
  >;
};
