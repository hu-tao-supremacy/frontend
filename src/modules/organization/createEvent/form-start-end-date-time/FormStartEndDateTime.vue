<template>
  <div class="flex flex-col">
    <section class="flex mb-0.25">
      <div class="flex flex-col mr-3">
        <label class="mb-0.25">Start at date</label>
        <BaseDatePicker v-model="startDate" class="h-3.75 w-25" />
      </div>
      <div class="flex flex-col mr-3">
        <label class="mb-0.25">End at date</label>
        <BaseDatePicker v-model="endDate" class="h-3.75 w-25" />
      </div>
      <div class="flex space-x-1">
        <section class="flex flex-col">
          <label for="repeatStartTime" class="mb-0.25">Start time</label>
          <SingleNameSelect
            v-model="startTime"
            id="repeatStartTime"
            :optionNames="hourNames"
            :optionValues="hourValues"
            :hasDropDownIcon="false"
            placeholder=""
            class="h-3.75 w-12"
          />
        </section>
        <p class="mt-3.5">~</p>
        <section class="flex flex-col">
          <label for="repeatEndTime" class="mb-0.25">End time</label>
          <SingleNameSelect
            v-model="endTime"
            id="repeatEndTime"
            :optionNames="hourNames"
            :optionValues="hourValues"
            :hasDropDownIcon="false"
            placeholder=""
            class="h-3.75 w-12"
          />
        </section>
      </div>
    </section>
    <p class="text-yellow-7">
      *Start~End time will be repeated through Start~End date
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseDatePicker from "@/commons/UI/BaseDatePicker.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import { hourNames, hourValues } from "@/commons/constant/hour";
import { EventDurationsForm } from "@/commons/Interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import useFormStartEndDateTime from "./useFormStartEndDateTime";

export default defineComponent({
  name: "FormStartEndDateTime",
  components: {
    BaseDatePicker,
    SingleNameSelect
  },
  props: {
    modelValue: {
      type: Object as () => EventDurationsForm,
      required: true
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(_, context) {
    const { startDate, endDate, startTime, endTime } = useFormStartEndDateTime(
      context
    );

    return { startDate, endDate, startTime, endTime, hourNames, hourValues };
  }
});
</script>
