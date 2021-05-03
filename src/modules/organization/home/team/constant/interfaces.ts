import { Duration } from "@/commons/Interfaces";

export interface Event {
  id: number;
  name: string;
  posterImageUrl: string;
  posterImageHash: string;
  durations: Duration[];
  registrationDueDate: string;
  location: { name: string };
  attendeeCount: number;
  attendeeLimit: number;
  attendees: Array<unknown>;
}
