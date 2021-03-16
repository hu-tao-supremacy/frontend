export default function useCardOrganization(orgShortName: string) {
  const orgShortNameTextSize =
    orgShortName.length > 5 ? "text-2xl" : "text-3xl";

  return {
    orgShortNameTextSize
  };
}
