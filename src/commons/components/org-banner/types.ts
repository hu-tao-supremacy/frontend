export interface OrgBannerProps {
  name: string;
  img: string;
  isVerified: boolean;
  description: string;
  numOfRelatedEvents: number;
  social: Social;
}

export interface Social {
  facebook?: string;
  instagram?: string;
  line?: string;
  email?: string;
}
