export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export enum AnswerType {
  Scale = 'SCALE',
  Text = 'TEXT'
}

export type AuthenticateInput = {
  providerAccessToken: Scalars['String'];
};

export type AuthenticateOutput = {
  __typename?: 'AuthenticateOutput';
  accessToken: Scalars['String'];
};

export type CreateOrganizationInput = {
  name: Scalars['String'];
  abbreviation?: Maybe<Scalars['String']>;
  advisor?: Maybe<Scalars['String']>;
  associatedFaculty?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  facebookPage?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  lineOfficialAccount?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  contactFullName?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactPhoneNumber?: Maybe<Scalars['String']>;
  contactLineId?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['Upload']>;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['Int'];
  organizationId: Scalars['Int'];
  organization: Organization;
  locationId?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  description: Scalars['String'];
  name: Scalars['String'];
  coverImageUrl?: Maybe<Scalars['String']>;
  coverImageHash?: Maybe<Scalars['String']>;
  posterImageUrl?: Maybe<Scalars['String']>;
  posterImageHash?: Maybe<Scalars['String']>;
  profileImageUrl?: Maybe<Scalars['String']>;
  profileImageHash?: Maybe<Scalars['String']>;
  attendeeLimit: Scalars['Int'];
  contact?: Maybe<Scalars['String']>;
  questionGroups: Array<QuestionGroup>;
  durations: Array<EventDuration>;
  tags: Array<Tag>;
};

export type EventDuration = {
  __typename?: 'EventDuration';
  id: Scalars['Int'];
  eventId: Scalars['Int'];
  start: Scalars['String'];
  finish: Scalars['String'];
  event: Event;
};

export type EventDurationInput = {
  id: Scalars['Int'];
  eventId: Scalars['Int'];
  start: Scalars['String'];
  finish: Scalars['String'];
  event: EventInput;
};

export type EventInput = {
  id: Scalars['Int'];
  organizationId: Scalars['Int'];
  organization: OrganizationInput;
  locationId?: Maybe<Scalars['Int']>;
  location?: Maybe<LocationInput>;
  description: Scalars['String'];
  name: Scalars['String'];
  coverImageUrl?: Maybe<Scalars['String']>;
  coverImageHash?: Maybe<Scalars['String']>;
  posterImageUrl?: Maybe<Scalars['String']>;
  posterImageHash?: Maybe<Scalars['String']>;
  profileImageUrl?: Maybe<Scalars['String']>;
  profileImageHash?: Maybe<Scalars['String']>;
  attendeeLimit: Scalars['Int'];
  contact?: Maybe<Scalars['String']>;
  questionGroups: Array<QuestionGroupInput>;
  durations: Array<EventDurationInput>;
  tags: Array<TagInput>;
};

export type FileUploadInput = {
  file: Scalars['Upload'];
};

export enum Gender {
  M = 'M',
  F = 'F',
  Ns = 'NS'
}

export type Location = {
  __typename?: 'Location';
  id: Scalars['Int'];
  name: Scalars['String'];
  googleMapUrl: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  travelInformationImageUrl?: Maybe<Scalars['String']>;
  travelInformationImageHash?: Maybe<Scalars['String']>;
};

export type LocationInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  googleMapUrl: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  travelInformationImageUrl?: Maybe<Scalars['String']>;
  travelInformationImageHash?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: AuthenticateOutput;
  upload: Scalars['Boolean'];
  createOrganization: Scalars['Boolean'];
};


export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


export type MutationUploadArgs = {
  input: FileUploadInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['Int'];
  name: Scalars['String'];
  isVerified: Scalars['Boolean'];
  abbreviation?: Maybe<Scalars['String']>;
  advisor?: Maybe<Scalars['String']>;
  associatedFaculty?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  facebookPage?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  lineOfficialAccount?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  contactFullName?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactPhoneNumber?: Maybe<Scalars['String']>;
  contactLineId?: Maybe<Scalars['String']>;
  profilePictureUrl?: Maybe<Scalars['String']>;
  profilePictureHash?: Maybe<Scalars['String']>;
  events: Array<Event>;
};

export type OrganizationInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  isVerified: Scalars['Boolean'];
  abbreviation?: Maybe<Scalars['String']>;
  advisor?: Maybe<Scalars['String']>;
  associatedFaculty?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  facebookPage?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  lineOfficialAccount?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  contactFullName?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactPhoneNumber?: Maybe<Scalars['String']>;
  contactLineId?: Maybe<Scalars['String']>;
  profilePictureUrl?: Maybe<Scalars['String']>;
  profilePictureHash?: Maybe<Scalars['String']>;
  events: Array<EventInput>;
};

export type Query = {
  __typename?: 'Query';
  upcomingEvents: Array<Event>;
  event: Event;
  organizations: Array<Organization>;
  organization: Organization;
  currentUser: User;
};


export type QueryEventArgs = {
  id: Scalars['Int'];
};


export type QueryOrganizationArgs = {
  id: Scalars['Int'];
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['Int'];
  questionGroupId: Scalars['Int'];
  seq: Scalars['Int'];
  answerType: AnswerType;
  isOptional: Scalars['Boolean'];
  title: Scalars['String'];
  subtitle: Scalars['String'];
};

export type QuestionGroup = {
  __typename?: 'QuestionGroup';
  id: Scalars['Int'];
  eventId: Scalars['Int'];
  event: Event;
  type: QuestionGroupType;
  seq: Scalars['Int'];
  title: Scalars['String'];
  questions: Array<Question>;
};

export type QuestionGroupInput = {
  id: Scalars['Int'];
  eventId: Scalars['Int'];
  event: EventInput;
  type: QuestionGroupType;
  seq: Scalars['Int'];
  title: Scalars['String'];
  questions: Array<QuestionInput>;
};

export enum QuestionGroupType {
  PreEvent = 'PRE_EVENT',
  PostEvent = 'POST_EVENT'
}

export type QuestionInput = {
  id: Scalars['Int'];
  questionGroupId: Scalars['Int'];
  seq: Scalars['Int'];
  answerType: AnswerType;
  isOptional: Scalars['Boolean'];
  title: Scalars['String'];
  subtitle: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TagInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  chulaId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  profilePictureUrl?: Maybe<Scalars['String']>;
  isChulaStudent: Scalars['Boolean'];
  didSetup: Scalars['Boolean'];
  gender: Gender;
};

export type UserInput = {
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  chulaId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  profilePictureUrl?: Maybe<Scalars['String']>;
  isChulaStudent: Scalars['Boolean'];
  didSetup: Scalars['Boolean'];
  gender: Gender;
};
