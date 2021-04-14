import { ref } from "vue";
import organizationsData from "./testData";
import { Organization } from "@/apollo/types";

export default function useOrgNavbarTeam() {
  const isExpand = ref(false);
  const teams = organizationsData; //Need to change to get list of orgs from API
  const currentSelectedTeamId = ref(-1);

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
    //Also perform provide/inject here
    currentSelectedTeamId.value = team.id;
  }

  function createNewTeam() {
    //Maybe reset provide/inject team
    currentSelectedTeamId.value = -1;
    //Go to create team page
    console.log("To create organization");
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
