import { EventDuration, Location, Tag } from "@/apollo/types";

export interface EventBanner {
  coverImageUrl: string;
  coverImageHash: string;
  name: string;
  tags: Tag;
  durations: EventDuration[];
  location: Location;
  posterImageUrl: string;
  posterImageHash: string;
  id: number;
  attendance: AttendanceBanner;
}

export interface AttendanceBanner {
  id: number;
}
