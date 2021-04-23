import { computed, reactive, Ref, ref, SetupContext, watch } from "vue";
import FacultyData from "@/commons/constant/faculty";
import { OrgDetail } from "../interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default function useCreateOrgFormOrganizationDetail(
  initialOrgDetailValue: Ref<OrgDetail>,
  context: SetupContext<"update:modelValue"[]>
) {
  const abbreviation = ref(initialOrgDetailValue.value.abbreviation);
  const fullName = ref(initialOrgDetailValue.value.fullName);
  const advisor = ref(initialOrgDetailValue.value.advisor);
  const faculty = ref(initialOrgDetailValue.value.faculty);
  const facultyList = FacultyData.map(faculty => faculty.name);
  const description = ref(initialOrgDetailValue.value.description);

  const isValidOrgDetail = computed(() => {
    return (
      abbreviation.value !== "" &&
      fullName.value !== "" &&
      advisor.value !== "" &&
      faculty.value !== ""
    );
  });

  const orgDetail = reactive({
    abbreviation: abbreviation,
    fullName: fullName,
    advisor: advisor,
    faculty: faculty,
    description: description,
    isValid: isValidOrgDetail
  });

  watch(orgDetail, () => {
    context.emit(UPDATE_MODEL_VALUE, orgDetail);
  });

  return {
    abbreviation,
    fullName,
    advisor,
    faculty,
    facultyList,
    description,
    isValidOrgDetail
  };
}
