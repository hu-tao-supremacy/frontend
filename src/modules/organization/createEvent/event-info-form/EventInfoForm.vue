<template>
  <div class="w-full py-4 px-10 space-y-3 rounded-2xl shadow-sm bg-white">
    <h1 class="font-heading text-3xl mb-3">Event Information</h1>
    <BaseLabelAndTextInput
      v-model.trim="name"
      inputName="name"
      label="Event Name"
      :isRequired="true"
      class="w-30"
    />
    <BaseLabelAndTextInput
      v-model.trim="contact"
      inputName="contact"
      label="Contact number"
      errorText="Please input phone number without '-'"
      :isError="!isValidContact"
      class="w-30"
    />
    <section>
      <label for="tags" class="mb-1">Categories</label>
      <SingleNameSelect
        v-model="tagSearch"
        :isSearchable="true"
        :doesResetAfterSelect="true"
        :optionNames="tagOptionNames"
        :optionValues="tagOptionValues"
        :hasSearchIcon="true"
        placeholder="Search..."
        class="h-3.75 w-36 mb-0.5"
      />
      <div class="flex flex-wrap w-full space-x-1">
        <RemovableTag
          v-for="(tag, index) in tags"
          :key="tag.id"
          @click="removeTag(index)"
          :tagName="tag.name"
          class="flex-shrink-0"
        />
      </div>
    </section>
    <BaseLabelAndTextInput
      v-model.trim="description"
      inputName="description"
      label="Event information"
      :isExpandableTextInput="true"
      :isRequired="true"
      class="w-80"
    />
    <section class="flex space-x-3">
      <BaseLabelAndTextInput
        v-model.trim="attendeeLimit"
        inputName="attendeeLimit"
        label="Limit people"
        errorText="Input a number"
        :isError="!isValidAttendeeLimit"
        :isRequired="false"
        class="w-14"
      />
      <div class="flex flex-col">
        <label for="registrationDueDate" class="mb-0.25"
          >Registration due date</label
        >
        <BaseDatePicker
          name="registrationDueDate"
          id="registrationDueDate"
          v-model="registrationDueDate"
          class="h-3.75 w-25"
        />
      </div>
      <div class="flex flex-col">
        <label for="registrationDueTime" class="mb-0.25">Due time</label>
        <SingleNameSelect
          v-model="registrationDueTime"
          id="registrationDueTime"
          :optionNames="hourNames"
          :optionValues="hourValues"
          :hasDropDownIcon="false"
          placeholder=""
          class="h-3.75 w-12"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref, watch } from "vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import RemovableTag from "../removable-tag/RemovableTag.vue";
import BaseDatePicker from "@/commons/UI/BaseDatePicker.vue";
import { validatePhone, isNumber } from "@/commons/utils/validForm";
import { Tag } from "@/apollo/types";
import { hourNames, hourValues } from "@/commons/constant/hour";
import moment from "moment";
import { testTags } from "../testData";

export default defineComponent({
  name: "EventInfoForm",
  components: {
    BaseLabelAndTextInput,
    SingleNameSelect,
    RemovableTag,
    BaseDatePicker
  },
  setup() {
    const name = ref("");
    const contact = ref("");
    const tags: Ref<Tag[]> = ref([]);
    const tagSearch: Ref<Tag> = ref({ id: -1, name: "", events: [] });
    const description = ref("");
    const attendeeLimit = ref("");
    const registrationDueDate = ref(new Date());
    const registrationDueTime = ref(0);

    //Get from API
    const tagOptionValues: Tag[] = testTags;
    const tagOptionNames: string[] = tagOptionValues.map(tag => tag.name);

    const isValidContact = computed(() => {
      return validatePhone(contact.value);
    });

    const isValidAttendeeLimit = computed(() => {
      return isNumber(attendeeLimit.value);
    });

    const registrationDueDateTime = computed(() => {
      const dateTime = moment(registrationDueDate.value)
        .hour(registrationDueTime.value)
        .format();
      return dateTime;
    });

    function addTag(tag: Tag) {
      const tagId = tag.id;
      const isInTagsList = tags.value.some(
        selectedTag => selectedTag.id === tagId
      );
      if (isInTagsList) return;
      tags.value.push(tagSearch.value);
    }

    function removeTag(index: number) {
      tags.value.splice(index, 1);
    }

    watch(tagSearch, () => {
      if (tagSearch.value.id === -1) return;
      addTag(tagSearch.value);
      tagSearch.value = { id: -1, name: "", events: [] };
    });

    return {
      name,
      contact,
      tags,
      tagSearch,
      description,
      attendeeLimit,
      registrationDueDate,
      registrationDueTime,
      tagOptionNames,
      tagOptionValues,
      isValidContact,
      isValidAttendeeLimit,
      removeTag,
      hourNames,
      hourValues,
      registrationDueDateTime
    };
  }
});
</script>
