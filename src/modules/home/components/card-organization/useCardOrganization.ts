import { Org } from '@/commons/Interfaces/index';
export default function useCardOrganization(orgShortName : string) {
  const orgShortNameTextSize =
    orgShortName.length > 5 ? "text-2xl" : "text-3xl";
  const orgFullName = "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)";

  return {
    orgShortNameTextSize
  };
}
