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

export type AuthenticateInput = {
  providerAccessToken: Scalars['String'];
};

export type AuthenticateOutput = {
  __typename?: 'AuthenticateOutput';
  accessToken: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['Int'];
  organizationId: Scalars['Int'];
  locationId?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  name: Scalars['String'];
  coverImageUrl?: Maybe<Scalars['String']>;
  coverImageHash?: Maybe<Scalars['String']>;
  posterImageUrl?: Maybe<Scalars['String']>;
  posterImageHash?: Maybe<Scalars['String']>;
  profileImageUrl?: Maybe<Scalars['String']>;
  profileImageHash?: Maybe<Scalars['String']>;
  contact: Scalars['String'];
  attendeeLimit: Scalars['Int'];
  organization: Organization;
  location?: Maybe<Location>;
  tags: Array<Tag>;
};

export type FileUploadInput = {
  file: Scalars['Upload'];
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  googleMapUrl: Scalars['String'];
  travelInformationImageUrl?: Maybe<Scalars['String']>;
  travelInformationImageHash?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: AuthenticateOutput;
  upload: Scalars['Boolean'];
};


export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


export type MutationUploadArgs = {
  input: FileUploadInput;
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
};

export type Query = {
  __typename?: 'Query';
  upcomingEvents: Array<Event>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  name: Scalars['String'];
};

