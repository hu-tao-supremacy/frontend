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
        :isRequired="true"
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
    <section>
      <label class="mb-1">Event poster image</label>
      <div class="flex items-center">
        <BaseUploadImgButton
          v-model="posterImg"
          name="posterImg"
          class="h-3.75 mr-1"
        />
        <p class="text-gray-5">(e.g. .JPEG, .PNG, .GIF) size: 160x240</p>
      </div>
    </section>
    <section>
      <label class="mb-1">Event background image</label>
      <div class="flex items-center">
        <BaseUploadImgButton
          v-model="coverImg"
          name="coverImg"
          class="h-3.75 mr-1"
        />
        <p class="text-gray-5">(e.g. .JPEG, .PNG, .GIF) size: 960x240</p>
      </div>
    </section>
    <FormPreviewCards :coverImg="coverImg" :posterImg="posterImg" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, Ref, ref, watch } from "vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import RemovableTag from "../removable-tag/RemovableTag.vue";
import BaseDatePicker from "@/commons/UI/BaseDatePicker.vue";
import BaseUploadImgButton from "@/commons/UI/BaseUploadImgButton.vue";
import FormPreviewCards from "../form-preview-cards/FormPreviewCards.vue";
import { validatePhone, isNumber } from "@/commons/utils/validForm";
import { Tag } from "@/apollo/types";
import { hourNames, hourValues } from "@/commons/constant/hour";
import { EventInfoForm } from "@/commons/Interfaces";
import { set } from "date-fns";
import { setTimeToZero } from "@/commons/utils/date";
import { testTags } from "../testData";

export default defineComponent({
  name: "EventInfoForm",
  components: {
    BaseLabelAndTextInput,
    SingleNameSelect,
    RemovableTag,
    BaseDatePicker,
    BaseUploadImgButton,
    FormPreviewCards
  },
  setup() {
    const name = ref("");
    const contact = ref("");
    const tags: Ref<Tag[]> = ref([]);
    const tagSearch: Ref<Tag> = ref({ id: -1, name: "", events: [] });
    const description = ref("");
    const attendeeLimit = ref("");
    const registrationDueDate = ref(setTimeToZero(new Date()).toString());
    const registrationDueTime = ref(0);
    const posterImg = ref("");
    const coverImg = ref("");

    //Get from API
    const tagOptionValues: Tag[] = testTags;
    const tagOptionNames: string[] = tagOptionValues.map(tag => tag.name);

    const isValidContact = computed(() => {
      return validatePhone(contact.value);
    });

    const isValidAttendeeLimit = computed(() => {
      return isNumber(attendeeLimit.value);
    });

    const attendeeLimitNumber = computed(() => {
      if (isValidAttendeeLimit.value) return parseInt(attendeeLimit.value);
      return 0;
    });

    const registrationDueDateTime = computed(() => {
      const dateTime = set(new Date(registrationDueDate.value), {
        hours: registrationDueTime.value
      });
      return dateTime.toString();
    });

    const isValidEventInfo = computed(() => {
      if (
        name.value === "" ||
        description.value === "" ||
        attendeeLimitNumber.value === 0
      )
        return false;
      return true;
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

    const eventInfo: EventInfoForm = reactive({
      name: name,
      contact: contact,
      tags: tags,
      description: description,
      attendeeLimit: attendeeLimitNumber,
      registrationDueDate: registrationDueDateTime,
      posterImgUrl: posterImg,
      coverImgUrl: coverImg,
      isValid: isValidEventInfo
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
      registrationDueDateTime,
      posterImg,
      coverImg,
      eventInfo
    };
  }
});
</script>
