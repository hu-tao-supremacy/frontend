export interface OrgDetail {
  abbreviation: string;
  fullName: string;
  advisor: string;
  faculty: string;
  description: string;
  isValid: boolean;
}

export interface OrgContactPerson {
  name: string;
  email: string;
  phone: string;
  line: string;
  isValid: boolean;
}

export interface OrgSocial {
  facebook: string;
  instagram: string;
  line: string;
  email: string;
  isValid: boolean;
}
