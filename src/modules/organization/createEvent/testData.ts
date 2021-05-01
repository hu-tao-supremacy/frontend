import { Organization } from "@/apollo/types";

export const testTags = [
  { id: 1, name: "Engineering", events: [] },
  { id: 2, name: "Food", events: [] },
  { id: 3, name: "Sport", events: [] },
  { id: 4, name: "Science", events: [] },
  { id: 5, name: "Music", events: [] }
];

export const organizationData: Organization = {
  id: 1,
  name: "KittyKun Org",
  isVerified: false,
  events: [],
  userOrganizations: []
};
