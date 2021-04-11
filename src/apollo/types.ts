export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Answer = {
  __typename?: "Answer";
  id: Scalars["Int"];
  userEventId: Scalars["Int"];
  questionId: Scalars["Int"];
  value: Scalars["String"];
};

export type AnswerInput = {
  id: Scalars["Int"];
  userEventId: Scalars["Int"];
  questionId: Scalars["Int"];
  value: Scalars["String"];
};

export enum AnswerType {
  Scale = "SCALE",
  Text = "TEXT"
}

export type Attendance = {
  __typename?: "Attendance";
  id: Scalars["Int"];
  userId: Scalars["Int"];
  user: User;
  eventId: Scalars["Int"];
  event: Event;
  rating?: Maybe<Scalars["Int"]>;
  ticket?: Maybe<Scalars["String"]>;
  status: UserEventStatus;
};

export type AttendanceInput = {
  id: Scalars["Int"];
  userId: Scalars["Int"];
  user: UserInput;
  eventId: Scalars["Int"];
  event: EventInput;
  rating?: Maybe<Scalars["Int"]>;
  ticket?: Maybe<Scalars["String"]>;
  status: UserEventStatus;
};

export type AuthenticateInput = {
  providerAccessToken: Scalars["String"];
};

export type AuthenticateOutput = {
  __typename?: "AuthenticateOutput";
  accessToken: Scalars["String"];
};

export type CreateJoinRequestAnswerInput = {
  questionId: Scalars["Int"];
  value: Scalars["String"];
};

export type CreateJoinRequestInput = {
  eventId: Scalars["Int"];
  answers: Array<CreateJoinRequestAnswerInput>;
};

export type CreateOrganizationInput = {
  name: Scalars["String"];
  abbreviation?: Maybe<Scalars["String"]>;
  advisor?: Maybe<Scalars["String"]>;
  associatedFaculty?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  facebookPage?: Maybe<Scalars["String"]>;
  instagram?: Maybe<Scalars["String"]>;
  lineOfficialAccount?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  contactFullName?: Maybe<Scalars["String"]>;
  contactEmail?: Maybe<Scalars["String"]>;
  contactPhoneNumber?: Maybe<Scalars["String"]>;
  contactLineId?: Maybe<Scalars["String"]>;
  profilePicture?: Maybe<Scalars["Upload"]>;
};

export type DeleteJoinRequestInput = {
  eventId: Scalars["Int"];
};

export type Event = {
  __typename?: "Event";
  id: Scalars["Int"];
  organizationId: Scalars["Int"];
  organization: Organization;
  locationId?: Maybe<Scalars["Int"]>;
  location?: Maybe<Location>;
  description: Scalars["String"];
  name: Scalars["String"];
  coverImageUrl?: Maybe<Scalars["String"]>;
  coverImageHash?: Maybe<Scalars["String"]>;
  posterImageUrl?: Maybe<Scalars["String"]>;
  posterImageHash?: Maybe<Scalars["String"]>;
  profileImageUrl?: Maybe<Scalars["String"]>;
  profileImageHash?: Maybe<Scalars["String"]>;
  attendeeLimit: Scalars["Int"];
  contact?: Maybe<Scalars["String"]>;
  questionGroups: Array<QuestionGroup>;
  durations: Array<EventDuration>;
  tags: Array<Tag>;
  attendance?: Maybe<Attendance>;
};

export type EventQuestionGroupsArgs = {
  type: QuestionGroupType;
};

export type EventDuration = {
  __typename?: "EventDuration";
  id: Scalars["Int"];
  eventId: Scalars["Int"];
  start: Scalars["String"];
  finish: Scalars["String"];
  event: Event;
};

export type EventDurationInput = {
  id: Scalars["Int"];
  eventId: Scalars["Int"];
  start: Scalars["String"];
  finish: Scalars["String"];
  event: EventInput;
};

export type EventInput = {
  id: Scalars["Int"];
  organizationId: Scalars["Int"];
  organization: OrganizationInput;
  locationId?: Maybe<Scalars["Int"]>;
  location?: Maybe<LocationInput>;
  description: Scalars["String"];
  name: Scalars["String"];
  coverImageUrl?: Maybe<Scalars["String"]>;
  coverImageHash?: Maybe<Scalars["String"]>;
  posterImageUrl?: Maybe<Scalars["String"]>;
  posterImageHash?: Maybe<Scalars["String"]>;
  profileImageUrl?: Maybe<Scalars["String"]>;
  profileImageHash?: Maybe<Scalars["String"]>;
  attendeeLimit: Scalars["Int"];
  contact?: Maybe<Scalars["String"]>;
  questionGroups: Array<QuestionGroupInput>;
  durations: Array<EventDurationInput>;
  tags: Array<TagInput>;
  attendance?: Maybe<AttendanceInput>;
};

export type Facility = {
  __typename?: "Facility";
  id: Scalars["Int"];
  organizationId: Scalars["Int"];
  organization: Organization;
  name: Scalars["String"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  operatingHours: Scalars["String"];
  description: Scalars["String"];
};

export type FacilityInput = {
  id: Scalars["Int"];
  organizationId: Scalars["Int"];
  organization: OrganizationInput;
  name: Scalars["String"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  operatingHours: Scalars["String"];
  description: Scalars["String"];
};

export type FileUploadInput = {
  file: Scalars["Upload"];
};

export enum Gender {
  M = "M",
  F = "F",
  Ns = "NS"
}

export type Location = {
  __typename?: "Location";
  id: Scalars["Int"];
  name: Scalars["String"];
  googleMapUrl: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  travelInformationImageUrl?: Maybe<Scalars["String"]>;
  travelInformationImageHash?: Maybe<Scalars["String"]>;
};

export type LocationInput = {
  id: Scalars["Int"];
  name: Scalars["String"];
  googleMapUrl: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  travelInformationImageUrl?: Maybe<Scalars["String"]>;
  travelInformationImageHash?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  authenticate: AuthenticateOutput;
  signInWithServiceAccount: AuthenticateOutput;
  upload: Scalars["Boolean"];
  createOrganization: Organization;
  updateOrganization: Organization;
  addMembersToOrganization: Organization;
  removeMembersFromOrganization: Organization;
  updateUser: User;
  setUserInterests: Scalars["Boolean"];
  createJoinRequest: Scalars["Boolean"];
  deleteJoinRequest: Scalars["Boolean"];
};

export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};

export type MutationSignInWithServiceAccountArgs = {
  serviceAccount: Scalars["String"];
};

export type MutationUploadArgs = {
  input: FileUploadInput;
};

export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};

export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};

export type MutationAddMembersToOrganizationArgs = {
  input: UpdateMembersInOrganizationInput;
};

export type MutationRemoveMembersFromOrganizationArgs = {
  input: UpdateMembersInOrganizationInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationSetUserInterestsArgs = {
  input: SetUserInterestsInput;
};

export type MutationCreateJoinRequestArgs = {
  input: CreateJoinRequestInput;
};

export type MutationDeleteJoinRequestArgs = {
  input: DeleteJoinRequestInput;
};

export type Organization = {
  __typename?: "Organization";
  id: Scalars["Int"];
  name: Scalars["String"];
  isVerified: Scalars["Boolean"];
  abbreviation?: Maybe<Scalars["String"]>;
  advisor?: Maybe<Scalars["String"]>;
  associatedFaculty?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  facebookPage?: Maybe<Scalars["String"]>;
  instagram?: Maybe<Scalars["String"]>;
  lineOfficialAccount?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  contactFullName?: Maybe<Scalars["String"]>;
  contactEmail?: Maybe<Scalars["String"]>;
  contactPhoneNumber?: Maybe<Scalars["String"]>;
  contactLineId?: Maybe<Scalars["String"]>;
  profilePictureUrl?: Maybe<Scalars["String"]>;
  profilePictureHash?: Maybe<Scalars["String"]>;
  events: Array<Event>;
};

export type OrganizationInput = {
  id: Scalars["Int"];
  name: Scalars["String"];
  isVerified: Scalars["Boolean"];
  abbreviation?: Maybe<Scalars["String"]>;
  advisor?: Maybe<Scalars["String"]>;
  associatedFaculty?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  facebookPage?: Maybe<Scalars["String"]>;
  instagram?: Maybe<Scalars["String"]>;
  lineOfficialAccount?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  contactFullName?: Maybe<Scalars["String"]>;
  contactEmail?: Maybe<Scalars["String"]>;
  contactPhoneNumber?: Maybe<Scalars["String"]>;
  contactLineId?: Maybe<Scalars["String"]>;
  profilePictureUrl?: Maybe<Scalars["String"]>;
  profilePictureHash?: Maybe<Scalars["String"]>;
  events: Array<EventInput>;
};

export type Query = {
  __typename?: "Query";
  upcomingEvents: Array<Event>;
  event: Event;
  organizations: Array<Organization>;
  organization: Organization;
  currentUser: User;
  user: User;
  tags: Array<Tag>;
  tag: Tag;
};

export type QueryEventArgs = {
  id: Scalars["Int"];
};

export type QueryOrganizationArgs = {
  id: Scalars["Int"];
};

export type QueryUserArgs = {
  email: Scalars["String"];
};

export type QueryTagArgs = {
  id: Scalars["Int"];
};

export type Question = {
  __typename?: "Question";
  id: Scalars["Int"];
  questionGroupId: Scalars["Int"];
  seq: Scalars["Int"];
  answerType: AnswerType;
  isOptional: Scalars["Boolean"];
  title: Scalars["String"];
  subtitle: Scalars["String"];
  answer: Answer;
};

export type QuestionGroup = {
  __typename?: "QuestionGroup";
  id: Scalars["Int"];
  eventId: Scalars["Int"];
  event: Event;
  type: QuestionGroupType;
  seq: Scalars["Int"];
  title: Scalars["String"];
  questions: Array<Question>;
};

export type QuestionGroupInput = {
  id: Scalars["Int"];
  eventId: Scalars["Int"];
  event: EventInput;
  type: QuestionGroupType;
  seq: Scalars["Int"];
  title: Scalars["String"];
  questions: Array<QuestionInput>;
};

export enum QuestionGroupType {
  PreEvent = "PRE_EVENT",
  PostEvent = "POST_EVENT"
}

export type QuestionInput = {
  id: Scalars["Int"];
  questionGroupId: Scalars["Int"];
  seq: Scalars["Int"];
  answerType: AnswerType;
  isOptional: Scalars["Boolean"];
  title: Scalars["String"];
  subtitle: Scalars["String"];
  answer: AnswerInput;
};

export type SetUserInterestsInput = {
  tags: Array<SetUserInterestsTagInput>;
};

export type SetUserInterestsTagInput = {
  id: Scalars["Int"];
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["Int"];
  name: Scalars["String"];
  events: Array<Event>;
};

export type TagInput = {
  id: Scalars["Int"];
  name: Scalars["String"];
  events: Array<EventInput>;
};

export type UpdateMembersInOrganizationInput = {
  organizationId: Scalars["Int"];
  emails: Array<Scalars["String"]>;
};

export type UpdateOrganizationInput = {
  name?: Maybe<Scalars["String"]>;
  abbreviation?: Maybe<Scalars["String"]>;
  advisor?: Maybe<Scalars["String"]>;
  associatedFaculty?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  facebookPage?: Maybe<Scalars["String"]>;
  instagram?: Maybe<Scalars["String"]>;
  lineOfficialAccount?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  contactFullName?: Maybe<Scalars["String"]>;
  contactEmail?: Maybe<Scalars["String"]>;
  contactPhoneNumber?: Maybe<Scalars["String"]>;
  contactLineId?: Maybe<Scalars["String"]>;
  profilePicture?: Maybe<Scalars["Upload"]>;
  id: Scalars["Int"];
};

export type UpdateUserInput = {
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  nickname?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  district?: Maybe<Scalars["String"]>;
  province?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
  gender?: Maybe<Gender>;
  organizations?: Maybe<Array<OrganizationInput>>;
  events?: Maybe<Array<EventInput>>;
  profilePicture?: Maybe<Scalars["Upload"]>;
};

export type User = {
  __typename?: "User";
  id: Scalars["Int"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  chulaId?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  district?: Maybe<Scalars["String"]>;
  province?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
  profilePictureUrl?: Maybe<Scalars["String"]>;
  isChulaStudent: Scalars["Boolean"];
  didSetup: Scalars["Boolean"];
  gender: Gender;
  organizations: Array<Organization>;
  events: Array<Event>;
  interests: Array<Tag>;
};

export enum UserEventStatus {
  Approved = "APPROVED",
  Rejected = "REJECTED",
  Pending = "PENDING"
}

export type UserInput = {
  id: Scalars["Int"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  chulaId?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  district?: Maybe<Scalars["String"]>;
  province?: Maybe<Scalars["String"]>;
  zipCode?: Maybe<Scalars["String"]>;
  profilePictureUrl?: Maybe<Scalars["String"]>;
  isChulaStudent: Scalars["Boolean"];
  didSetup: Scalars["Boolean"];
  gender: Gender;
  organizations: Array<OrganizationInput>;
  events: Array<EventInput>;
  interests: Array<TagInput>;
};

export type UserOrganization = {
  __typename?: "UserOrganization";
  id: Scalars["Int"];
  userId: Scalars["Int"];
  user: User;
  organizationId: Scalars["Int"];
  organization: Organization;
};

export type UserOrganizationInput = {
  id: Scalars["Int"];
  userId: Scalars["Int"];
  user: UserInput;
  organizationId: Scalars["Int"];
  organization: OrganizationInput;
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = { __typename?: "Query" } & {
  currentUser: { __typename?: "User" } & Pick<
    User,
    | "firstName"
    | "lastName"
    | "email"
    | "chulaId"
    | "address"
    | "profilePictureUrl"
    | "didSetup"
    | "gender"
  >;
};

export type GetUpcomingEventsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUpcomingEventsQuery = { __typename?: "Query" } & {
  upcomingEvents: Array<
    { __typename?: "Event" } & Pick<
      Event,
      "description" | "name" | "profileImageUrl" | "profileImageHash"
    > & {
        location?: Maybe<{ __typename?: "Location" } & Pick<Location, "name">>;
        tags: Array<{ __typename?: "Tag" } & Pick<Tag, "name">>;
      }
  >;
};

export type AuthenticateMutationVariables = Exact<{
  input: AuthenticateInput;
}>;

export type AuthenticateMutation = { __typename?: "Mutation" } & {
  authenticate: { __typename?: "AuthenticateOutput" } & Pick<
    AuthenticateOutput,
    "accessToken"
  >;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = { __typename?: "Mutation" } & {
  updateUser: { __typename?: "User" } & Pick<User, "id">;
};
