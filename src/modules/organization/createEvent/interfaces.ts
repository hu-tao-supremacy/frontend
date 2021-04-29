import { Tag } from "@/apollo/types";

export interface EventInfo {
  name: string;
  contact: string;
  tags: Tag[];
  description: string;
  attendeeLimit: number;
  registrationDueDate: Date;
  posterImgUrl: string;
  coverImgUrl: string;
}
