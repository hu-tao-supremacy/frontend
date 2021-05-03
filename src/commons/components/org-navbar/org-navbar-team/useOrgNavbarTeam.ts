import { ref } from "vue";
import { Organization } from "@/apollo/types";
import useOrganization from "@/modules/organization/useOrganization";
import { useRouter } from "vue-router";

export default function useOrgNavbarTeam() {
  const isExpand = ref(false);
  const router = useRouter();
  const {
    organizations: teams,
    currentOrganizationId: currentSelectedTeamId,
    changeOrganizationId
  } = useOrganization();

  function expandNavbar() {
    isExpand.value = true;
  }

  function collapseNavbar() {
    isExpand.value = false;
  }

  function isCurrentSelectedTeam(teamId: number) {
    return teamId === currentSelectedTeamId.value;
  }

  function changeSelectedTeam(team: Organization) {
    if (team.id === currentSelectedTeamId.value) return;
    changeOrganizationId(team.id);
    router.push("/org/team");
  }

  function createNewTeam() {
    changeOrganizationId(-1);
    router.push("/org/team/create-org");
  }

  return {
    isExpand,
    expandNavbar,
    collapseNavbar,
    teams,
    isCurrentSelectedTeam,
    changeSelectedTeam,
    createNewTeam
  };
}
