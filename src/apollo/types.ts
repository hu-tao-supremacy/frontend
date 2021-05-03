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

export type AuthenticateInput = {
  providerAccessToken: Scalars["String"];
};

export type AuthenticateOutput = {
  __typename?: "AuthenticateOutput";
  accessToken: Scalars["String"];
};

export type CheckInInput = {
  eventId: Scalars["Int"];
  ticket?: Maybe<Scalars["String"]>;
};

export type CreateEventInput = {
  organizationId: Scalars["Int"];
  location?: Maybe<CreateEventLocationInput>;
  description: Scalars["String"];
  name: Scalars["String"];
  attendeeLimit: Scalars["Int"];
  contact?: Maybe<Scalars["String"]>;
  registrationDueDate?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["Upload"]>;
  posterImage?: Maybe<Scalars["Upload"]>;
  tags?: Maybe<Array<SetEventTagsTagInput>>;
  durations?: Maybe<Array<SetEventDurationsDurationInput>>;
};

export type CreateEventLocationInput = {
  name: Scalars["String"];
  googleMapUrl: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isOnline: Scalars["Boolean"];
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
  attendeeLimit: Scalars["Int"];
  contact?: Maybe<Scalars["String"]>;
  questionGroups: Array<QuestionGroup>;
  durations: Array<EventDuration>;
  tags: Array<Tag>;
  registrationDueDate?: Maybe<Scalars["String"]>;
  attendance?: Maybe<UserEvent>;
  attendeeCount: Scalars["Int"];
  attendees: Array<UserEvent>;
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
};

export type EventDurationInput = {
  id: Scalars["Int"];
  eventId: Scalars["Int"];
  start: Scalars["String"];
  finish: Scalars["String"];
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
  attendeeLimit: Scalars["Int"];
  contact?: Maybe<Scalars["String"]>;
  questionGroups: Array<QuestionGroupInput>;
  durations: Array<EventDurationInput>;
  tags: Array<TagInput>;
  registrationDueDate?: Maybe<Scalars["String"]>;
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
  isOnline: Scalars["Boolean"];
};

export type LocationInput = {
  id: Scalars["Int"];
  name: Scalars["String"];
  googleMapUrl: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  travelInformationImageUrl?: Maybe<Scalars["String"]>;
  travelInformationImageHash?: Maybe<Scalars["String"]>;
  isOnline: Scalars["Boolean"];
};

export type Mutation = {
  __typename?: "Mutation";
  setEventQuestions: Scalars["Boolean"];
  setEventDurations: Scalars["Boolean"];
  createEvent: Event;
  updateEvent: Event;
  reviewJoinRequest: UserEvent;
  checkIn: UserEvent;
  generateVectorRepresentation: Scalars["Boolean"];
  authenticate: AuthenticateOutput;
  generateAccessToken: AuthenticateOutput;
  upload: Scalars["Boolean"];
  createOrganization: Organization;
  updateOrganization: Organization;
  addMembersToOrganization: Scalars["Boolean"];
  removeMembersFromOrganization: Scalars["Boolean"];
  updateUser: User;
  setInterestedTags: Scalars["Boolean"];
  setInterestedEvents: Scalars["Boolean"];
  createJoinRequest: Scalars["Boolean"];
  deleteJoinRequest: Scalars["Boolean"];
  createTag: Tag;
};

export type MutationSetEventQuestionsArgs = {
  input: SetEventQuestionsInput;
};

export type MutationSetEventDurationsArgs = {
  input: SetEventDurationsInput;
};

export type MutationCreateEventArgs = {
  input: CreateEventInput;
};

export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};

export type MutationReviewJoinRequestArgs = {
  input: ReviewJoinRequestInput;
};

export type MutationCheckInArgs = {
  input: CheckInInput;
};

export type MutationGenerateVectorRepresentationArgs = {
  eventId: Scalars["Int"];
};

export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};

export type MutationGenerateAccessTokenArgs = {
  userId: Scalars["Float"];
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

export type MutationSetInterestedTagsArgs = {
  tags: Array<Scalars["Int"]>;
};

export type MutationSetInterestedEventsArgs = {
  events: Array<Scalars["Int"]>;
};

export type MutationCreateJoinRequestArgs = {
  input: CreateJoinRequestInput;
};

export type MutationDeleteJoinRequestArgs = {
  input: DeleteJoinRequestInput;
};

export type MutationCreateTagArgs = {
  name: Scalars["String"];
  organizationId: Scalars["Int"];
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
  userOrganizations: Array<UserOrganization>;
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
  userOrganizations: Array<UserOrganizationInput>;
};

export type Query = {
  __typename?: "Query";
  upcomingEvents: Array<Event>;
  featuredEvents: Array<Event>;
  recommendedEvents: Array<Event>;
  onlineEvents: Array<Event>;
  searchEvent: Array<Event>;
  pastEvents: Array<Event>;
  event: Event;
  organizations: Array<Organization>;
  featuredOrganizations: Array<Organization>;
  organization: Organization;
  currentUser: User;
  searchUser: Array<User>;
  user: User;
  tags: Array<Tag>;
  tag: Tag;
};

export type QueryUpcomingEventsArgs = {
  n: Scalars["Int"];
};

export type QueryFeaturedEventsArgs = {
  n: Scalars["Int"];
};

export type QueryRecommendedEventsArgs = {
  n: Scalars["Int"];
};

export type QueryOnlineEventsArgs = {
  n: Scalars["Int"];
};

export type QuerySearchEventArgs = {
  n?: Maybe<Scalars["Int"]>;
  keyword: Scalars["String"];
};

export type QueryPastEventsArgs = {
  n: Scalars["Int"];
  tagIds: Array<Scalars["Int"]>;
};

export type QueryEventArgs = {
  id: Scalars["Int"];
};

export type QueryFeaturedOrganizationsArgs = {
  n: Scalars["Int"];
};

export type QueryOrganizationArgs = {
  id: Scalars["Int"];
};

export type QuerySearchUserArgs = {
  keyword: Scalars["String"];
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

export type ReviewJoinRequestInput = {
  userId: Scalars["Int"];
  eventId: Scalars["Int"];
  status: UserEventStatus;
};

export type SetEventDurationsDurationInput = {
  start: Scalars["String"];
  finish: Scalars["String"];
};

export type SetEventDurationsInput = {
  eventId: Scalars["Int"];
  durations: Array<SetEventDurationsDurationInput>;
};

export type SetEventQuestionsInput = {
  eventId: Scalars["Int"];
  questionGroups: Array<SetEventQuestionsQuestionGroupInput>;
};

export type SetEventQuestionsQuestionGroupInput = {
  type: QuestionGroupType;
  seq: Scalars["Int"];
  title: Scalars["String"];
  questions: Array<SetEventQuestionsQuestionInput>;
};

export type SetEventQuestionsQuestionInput = {
  seq: Scalars["Int"];
  answerType: AnswerType;
  isOptional: Scalars["Boolean"];
  title: Scalars["String"];
  subtitle: Scalars["String"];
};

export type SetEventTagsTagInput = {
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

export type UpdateEventInput = {
  organizationId?: Maybe<Scalars["Int"]>;
  location?: Maybe<LocationInput>;
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  attendeeLimit?: Maybe<Scalars["Int"]>;
  contact?: Maybe<Scalars["String"]>;
  registrationDueDate?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["Upload"]>;
  posterImage?: Maybe<Scalars["Upload"]>;
  tags?: Maybe<Array<SetEventTagsTagInput>>;
  durations?: Maybe<Array<SetEventDurationsDurationInput>>;
  id: Scalars["Int"];
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
  academicYear?: Maybe<Scalars["Int"]>;
  organizations?: Maybe<Array<UserOrganizationInput>>;
  history?: Maybe<Array<EventInput>>;
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
  academicYear?: Maybe<Scalars["Int"]>;
  organizations: Array<UserOrganization>;
  history: Array<Event>;
  interests: Array<Tag>;
};

export type UserEvent = {
  __typename?: "UserEvent";
  id: Scalars["Int"];
  userId: Scalars["Int"];
  user: User;
  eventId: Scalars["Int"];
  event: Event;
  rating?: Maybe<Scalars["Int"]>;
  ticket?: Maybe<Scalars["String"]>;
  status: UserEventStatus;
  answers: Array<Answer>;
};

export type UserEventInput = {
  id: Scalars["Int"];
  userId: Scalars["Int"];
  user: UserInput;
  eventId: Scalars["Int"];
  event: EventInput;
  rating?: Maybe<Scalars["Int"]>;
  ticket?: Maybe<Scalars["String"]>;
  status: UserEventStatus;
  answers: Array<AnswerInput>;
};

export enum UserEventStatus {
  Approved = "APPROVED",
  Rejected = "REJECTED",
  Pending = "PENDING",
  Attended = "ATTENDED"
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
  academicYear?: Maybe<Scalars["Int"]>;
  organizations: Array<UserOrganizationInput>;
  history: Array<EventInput>;
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

export type GetEventAttendanceQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetEventAttendanceQuery = { __typename?: "Query" } & {
  event: { __typename?: "Event" } & Pick<Event, "id"> & {
      attendance?: Maybe<{ __typename?: "UserEvent" } & Pick<UserEvent, "id">>;
    };
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = { __typename?: "Query" } & {
  currentUser: { __typename?: "User" } & Pick<
    User,
    "id" | "firstName" | "lastName" | "profilePictureUrl" | "didSetup"
  >;
};

export type SetEventQuestionsMutationVariables = Exact<{
  input: SetEventQuestionsInput;
}>;

export type SetEventQuestionsMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "setEventQuestions"
>;

export type GetQuestionGroupsQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetQuestionGroupsQuery = { __typename?: "Query" } & {
  event: { __typename?: "Event" } & Pick<Event, "name"> & {
      questionGroups: Array<
        { __typename?: "QuestionGroup" } & Pick<
          QuestionGroup,
          "id" | "seq" | "title"
        > & {
            questions: Array<
              { __typename?: "Question" } & Pick<
                Question,
                "id" | "seq" | "title" | "isOptional" | "answerType"
              >
            >;
          }
      >;
    };
};

export type GetEventByIdQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetEventByIdQuery = { __typename?: "Query" } & {
  event: { __typename?: "Event" } & Pick<
    Event,
    | "id"
    | "name"
    | "description"
    | "posterImageUrl"
    | "posterImageHash"
    | "coverImageUrl"
    | "coverImageHash"
  > & {
      location?: Maybe<
        { __typename?: "Location" } & Pick<Location, "id" | "name">
      >;
      organization: { __typename?: "Organization" } & Pick<
        Organization,
        | "id"
        | "name"
        | "abbreviation"
        | "description"
        | "email"
        | "facebookPage"
        | "profilePictureUrl"
        | "profilePictureHash"
        | "lineOfficialAccount"
        | "instagram"
      >;
      durations: Array<
        { __typename?: "EventDuration" } & Pick<
          EventDuration,
          "id" | "start" | "finish"
        >
      >;
      tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
    };
};

export type GetEventRegisterQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetEventRegisterQuery = { __typename?: "Query" } & {
  event: { __typename?: "Event" } & Pick<
    Event,
    | "id"
    | "coverImageUrl"
    | "coverImageHash"
    | "name"
    | "posterImageUrl"
    | "posterImageHash"
  > & {
      tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
      durations: Array<
        { __typename?: "EventDuration" } & Pick<
          EventDuration,
          "id" | "start" | "finish"
        >
      >;
      location?: Maybe<
        { __typename?: "Location" } & Pick<Location, "id" | "name">
      >;
      questionGroups: Array<
        { __typename?: "QuestionGroup" } & Pick<QuestionGroup, "eventId"> & {
            questions: Array<
              { __typename?: "Question" } & Pick<
                Question,
                "id" | "isOptional" | "seq" | "title"
              >
            >;
          }
      >;
      attendance?: Maybe<{ __typename?: "UserEvent" } & Pick<UserEvent, "id">>;
    };
  currentUser: { __typename?: "User" } & Pick<
    User,
    | "id"
    | "firstName"
    | "lastName"
    | "gender"
    | "chulaId"
    | "academicYear"
    | "phoneNumber"
    | "email"
    | "district"
    | "province"
    | "zipCode"
    | "address"
  >;
};

export type CreateJoinRequestMutationVariables = Exact<{
  input: CreateJoinRequestInput;
}>;

export type CreateJoinRequestMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "createJoinRequest"
>;

export type GetHomeItemQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomeItemQuery = { __typename?: "Query" } & {
  featuredEvents: Array<
    { __typename?: "Event" } & Pick<
      Event,
      | "id"
      | "description"
      | "name"
      | "coverImageUrl"
      | "coverImageHash"
      | "posterImageUrl"
      | "posterImageHash"
    > & {
        durations: Array<
          { __typename?: "EventDuration" } & Pick<
            EventDuration,
            "id" | "start" | "finish"
          >
        >;
        location?: Maybe<
          { __typename?: "Location" } & Pick<Location, "id" | "name">
        >;
        tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
      }
  >;
  upcomingEvents: Array<
    { __typename?: "Event" } & Pick<
      Event,
      "id" | "description" | "name" | "posterImageUrl" | "posterImageHash"
    > & {
        durations: Array<
          { __typename?: "EventDuration" } & Pick<
            EventDuration,
            "id" | "start" | "finish"
          >
        >;
        location?: Maybe<
          { __typename?: "Location" } & Pick<Location, "id" | "name">
        >;
      }
  >;
  featuredOrganizations: Array<
    { __typename?: "Organization" } & Pick<
      Organization,
      | "id"
      | "abbreviation"
      | "name"
      | "profilePictureUrl"
      | "profilePictureHash"
    >
  >;
};

export type GetRecommendedEventsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetRecommendedEventsQuery = { __typename?: "Query" } & {
  recommendedEvents: Array<
    { __typename?: "Event" } & Pick<
      Event,
      "id" | "description" | "name" | "posterImageUrl" | "posterImageHash"
    > & {
        durations: Array<
          { __typename?: "EventDuration" } & Pick<
            EventDuration,
            "id" | "start" | "finish"
          >
        >;
        location?: Maybe<
          { __typename?: "Location" } & Pick<Location, "id" | "name">
        >;
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

export type GetSearchedItemsQueryVariables = Exact<{
  keyword: Scalars["String"];
}>;

export type GetSearchedItemsQuery = { __typename?: "Query" } & {
  searchEvent: Array<
    { __typename?: "Event" } & Pick<
      Event,
      | "id"
      | "description"
      | "name"
      | "coverImageUrl"
      | "coverImageHash"
      | "posterImageUrl"
      | "posterImageHash"
    > & {
        durations: Array<
          { __typename?: "EventDuration" } & Pick<
            EventDuration,
            "id" | "start" | "finish"
          >
        >;
        location?: Maybe<
          { __typename?: "Location" } & Pick<Location, "id" | "name">
        >;
        tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
      }
  >;
};

export type GetRecommendedItemsQueryVariables = Exact<{ [key: string]: never }>;

export type GetRecommendedItemsQuery = { __typename?: "Query" } & {
  recommendedEvents: Array<
    { __typename?: "Event" } & Pick<
      Event,
      | "id"
      | "description"
      | "name"
      | "coverImageUrl"
      | "coverImageHash"
      | "posterImageUrl"
      | "posterImageHash"
    > & {
        durations: Array<
          { __typename?: "EventDuration" } & Pick<
            EventDuration,
            "id" | "start" | "finish"
          >
        >;
        location?: Maybe<
          { __typename?: "Location" } & Pick<Location, "id" | "name">
        >;
        tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
      }
  >;
};

export type GetUpcomingItemsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUpcomingItemsQuery = { __typename?: "Query" } & {
  upcomingEvents: Array<
    { __typename?: "Event" } & Pick<
      Event,
      | "id"
      | "description"
      | "name"
      | "coverImageUrl"
      | "coverImageHash"
      | "posterImageUrl"
      | "posterImageHash"
    > & {
        durations: Array<
          { __typename?: "EventDuration" } & Pick<
            EventDuration,
            "id" | "start" | "finish"
          >
        >;
        location?: Maybe<
          { __typename?: "Location" } & Pick<Location, "id" | "name">
        >;
        tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
      }
  >;
};

export type GetOnlineItemsQueryVariables = Exact<{ [key: string]: never }>;

export type GetOnlineItemsQuery = { __typename?: "Query" } & {
  onlineEvents: Array<
    { __typename?: "Event" } & Pick<
      Event,
      | "id"
      | "description"
      | "name"
      | "coverImageUrl"
      | "coverImageHash"
      | "posterImageUrl"
      | "posterImageHash"
    > & {
        durations: Array<
          { __typename?: "EventDuration" } & Pick<
            EventDuration,
            "id" | "start" | "finish"
          >
        >;
        location?: Maybe<
          { __typename?: "Location" } & Pick<Location, "id" | "name">
        >;
        tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
      }
  >;
};

export type GetOrganizationQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetOrganizationQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & Pick<
    Organization,
    | "id"
    | "name"
    | "isVerified"
    | "description"
    | "facebookPage"
    | "instagram"
    | "lineOfficialAccount"
    | "email"
    | "profilePictureUrl"
    | "profilePictureHash"
  > & {
      events: Array<
        { __typename?: "Event" } & Pick<
          Event,
          "id" | "description" | "name" | "posterImageUrl" | "posterImageHash"
        > & {
            durations: Array<
              { __typename?: "EventDuration" } & Pick<
                EventDuration,
                "id" | "start" | "finish"
              >
            >;
            location?: Maybe<
              { __typename?: "Location" } & Pick<Location, "id" | "name">
            >;
          }
      >;
    };
};

export type CurrentUserOrganizationQueryVariables = Exact<{
  [key: string]: never;
}>;

export type CurrentUserOrganizationQuery = { __typename?: "Query" } & {
  currentUser: { __typename?: "User" } & Pick<User, "id"> & {
      organizations: Array<
        { __typename?: "UserOrganization" } & Pick<UserOrganization, "id"> & {
            organization: { __typename?: "Organization" } & Pick<
              Organization,
              "name" | "id" | "profilePictureUrl" | "profilePictureHash"
            >;
          }
      >;
    };
};

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTagsQuery = { __typename?: "Query" } & {
  tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
};

export type CreateEventMutationVariables = Exact<{
  input: CreateEventInput;
}>;

export type CreateEventMutation = { __typename?: "Mutation" } & {
  createEvent: { __typename?: "Event" } & Pick<Event, "id">;
};

export type GetCurrentUserInfoQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserInfoQuery = { __typename?: "Query" } & {
  currentUser: { __typename?: "User" } & Pick<
    User,
    "id" | "firstName" | "lastName" | "email" | "phoneNumber"
  >;
};

export type SearchUserQueryVariables = Exact<{
  input: Scalars["String"];
}>;

export type SearchUserQuery = { __typename?: "Query" } & {
  searchUser: Array<
    { __typename?: "User" } & Pick<
      User,
      "id" | "profilePictureUrl" | "firstName" | "lastName" | "email"
    >
  >;
};

export type CreateOrganizationMutationVariables = Exact<{
  input: CreateOrganizationInput;
}>;

export type CreateOrganizationMutation = { __typename?: "Mutation" } & {
  createOrganization: { __typename?: "Organization" } & Pick<
    Organization,
    "id"
  >;
};

export type AddMembersToOrganizationMutationVariables = Exact<{
  input: UpdateMembersInOrganizationInput;
}>;

export type AddMembersToOrganizationMutation = {
  __typename?: "Mutation";
} & Pick<Mutation, "addMembersToOrganization">;

export type CheckInMutationVariables = Exact<{
  input: CheckInInput;
}>;

export type CheckInMutation = { __typename?: "Mutation" } & {
  checkIn: { __typename?: "UserEvent" } & Pick<UserEvent, "id" | "status"> & {
      user: { __typename?: "User" } & Pick<
        User,
        "id" | "firstName" | "lastName"
      >;
    };
};

export type GetEventAttendeeQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetEventAttendeeQuery = { __typename?: "Query" } & {
  event: { __typename?: "Event" } & Pick<
    Event,
    | "id"
    | "name"
    | "posterImageUrl"
    | "posterImageHash"
    | "coverImageUrl"
    | "coverImageHash"
  > & {
      attendees: Array<
        { __typename?: "UserEvent" } & Pick<UserEvent, "status" | "ticket"> & {
            user: { __typename?: "User" } & Pick<
              User,
              | "id"
              | "firstName"
              | "lastName"
              | "profilePictureUrl"
              | "email"
              | "phoneNumber"
            >;
            answers: Array<{ __typename?: "Answer" } & Pick<Answer, "id">>;
          }
      >;
      questionGroups: Array<
        { __typename?: "QuestionGroup" } & Pick<QuestionGroup, "id">
      >;
    };
};

export type ReviewJoinRequestMutationVariables = Exact<{
  input: ReviewJoinRequestInput;
}>;

export type ReviewJoinRequestMutation = { __typename?: "Mutation" } & {
  reviewJoinRequest: { __typename?: "UserEvent" } & Pick<UserEvent, "userId">;
};

export type GetOrgTeamItemQueryVariables = Exact<{
  input: Scalars["Int"];
}>;

export type GetOrgTeamItemQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & Pick<
    Organization,
    | "id"
    | "name"
    | "abbreviation"
    | "description"
    | "profilePictureUrl"
    | "profilePictureHash"
    | "isVerified"
  > & {
      events: Array<
        { __typename?: "Event" } & Pick<
          Event,
          | "id"
          | "name"
          | "posterImageUrl"
          | "posterImageHash"
          | "registrationDueDate"
          | "attendeeCount"
          | "attendeeLimit"
        > & {
            durations: Array<
              { __typename?: "EventDuration" } & Pick<
                EventDuration,
                "id" | "start" | "finish"
              >
            >;
            location?: Maybe<
              { __typename?: "Location" } & Pick<Location, "id" | "name">
            >;
            attendees: Array<
              { __typename?: "UserEvent" } & Pick<UserEvent, "id">
            >;
          }
      >;
    };
};

export type GetOrganizationMemberQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetOrganizationMemberQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & {
    userOrganizations: Array<
      { __typename?: "UserOrganization" } & {
        user: { __typename?: "User" } & Pick<
          User,
          | "id"
          | "firstName"
          | "lastName"
          | "email"
          | "phoneNumber"
          | "profilePictureUrl"
        >;
      }
    >;
  };
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = { __typename?: "Mutation" } & {
  updateUser: { __typename?: "User" } & Pick<User, "id">;
};

export type SetInterestedEventsMutationVariables = Exact<{
  input: Array<Scalars["Int"]> | Scalars["Int"];
}>;

export type SetInterestedEventsMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "setInterestedEvents"
>;

export type GetPastEventQueryVariables = Exact<{
  n: Scalars["Int"];
  tagIds: Array<Scalars["Int"]> | Scalars["Int"];
}>;

export type GetPastEventQuery = { __typename?: "Query" } & {
  pastEvents: Array<
    { __typename?: "Event" } & Pick<Event, "id" | "name" | "posterImageUrl">
  >;
};

export type GetEventUserCheckinQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetEventUserCheckinQuery = { __typename?: "Query" } & {
  event: { __typename?: "Event" } & Pick<
    Event,
    "id" | "name" | "posterImageUrl" | "posterImageHash"
  > & {
      tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
      location?: Maybe<
        { __typename?: "Location" } & Pick<Location, "id" | "name">
      >;
      durations: Array<
        { __typename?: "EventDuration" } & Pick<
          EventDuration,
          "id" | "start" | "finish"
        >
      >;
      attendance?: Maybe<
        { __typename?: "UserEvent" } & Pick<UserEvent, "id" | "ticket">
      >;
    };
};

export type GetUserTicketQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserTicketQuery = { __typename?: "Query" } & {
  currentUser: { __typename?: "User" } & Pick<
    User,
    | "id"
    | "profilePictureUrl"
    | "firstName"
    | "lastName"
    | "email"
    | "phoneNumber"
  >;
};

export type GetUserWalletQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserWalletQuery = { __typename?: "Query" } & {
  currentUser: { __typename?: "User" } & Pick<
    User,
    "id" | "profilePictureUrl" | "firstName" | "lastName" | "email"
  > & {
      history: Array<
        { __typename?: "Event" } & Pick<
          Event,
          "id" | "name" | "posterImageUrl" | "posterImageHash"
        > & {
            durations: Array<
              { __typename?: "EventDuration" } & Pick<
                EventDuration,
                "id" | "start" | "finish"
              >
            >;
            organization: { __typename?: "Organization" } & Pick<
              Organization,
              | "id"
              | "name"
              | "abbreviation"
              | "profilePictureUrl"
              | "profilePictureHash"
            >;
            location?: Maybe<
              { __typename?: "Location" } & Pick<Location, "id" | "name">
            >;
            tags: Array<{ __typename?: "Tag" } & Pick<Tag, "id" | "name">>;
            attendance?: Maybe<
              { __typename?: "UserEvent" } & Pick<
                UserEvent,
                "id" | "ticket" | "status"
              >
            >;
          }
      >;
    };
};
