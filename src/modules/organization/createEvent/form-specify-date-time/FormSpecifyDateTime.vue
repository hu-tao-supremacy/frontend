<template>
  <div class="flex flex-col space-y-3">
    <section class="flex space-x-3">
      <div class="flex flex-col">
        <label class="mb-0.25">Date</label>
        <BaseDatePicker v-model="date" class="h-3.75 w-25" />
      </div>
      <div class="flex space-x-1">
        <section class="flex flex-col">
          <label for="specifyStartTime" class="mb-0.25">Start time</label>
          <SingleNameSelect
            v-model="startTime"
            id="specifyStartTime"
            :optionNames="hourNames"
            :optionValues="hourValues"
            :hasDropDownIcon="false"
            placeholder=""
            class="h-3.75 w-9"
          />
        </section>
        <p class="mt-3.5">~</p>
        <section class="flex flex-col">
          <label for="specifyEndTime" class="mb-0.25">End time</label>
          <SingleNameSelect
            v-model="endTime"
            id="specifyEndTime"
            :optionNames="hourNames"
            :optionValues="hourValues"
            :hasDropDownIcon="false"
            placeholder=""
            class="h-3.75 w-9"
          />
        </section>
      </div>
      <base-button
        @click="addDuration"
        :disabled="!isValidTime"
        class="self-end h-3.75 px-2"
        >Add</base-button
      >
    </section>
    <section v-show="hasDurations" class="flex flex-col">
      <label class="mb-0.25">Schedule</label>
      <div class="flex flex-col space-y-1">
        <FormSpecifyDateTimeSchedule
          v-for="(duration, index) in durations"
          :key="duration.start"
          :duration="duration"
          @remove="removeDuration(index)"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import BaseDatePicker from "@/commons/UI/BaseDatePicker.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import FormSpecifyDateTimeSchedule from "../form-specify-date-time-shcedule/FormSpecifyDateTimeSchedule.vue";
import { hourNames, hourValues } from "@/commons/constant/hour";
import { EventDurationsForm } from "@/commons/Interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import useFormSpecifyDateTime from "./useFormSpecifyDateTime";

export default defineComponent({
  name: "FormSpecifyDateTime",
  components: {
    BaseDatePicker,
    SingleNameSelect,
    BaseButton,
    FormSpecifyDateTimeSchedule
  },
  props: {
    modelValue: {
      type: Object as () => EventDurationsForm,
      required: true
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const { modelValue } = toRefs(props);

    const {
      date,
      startTime,
      endTime,
      isValidTime,
      durations,
      hasDurations,
      addDuration,
      removeDuration
    } = useFormSpecifyDateTime(modelValue, context);

    return {
      date,
      startTime,
      endTime,
      isValidTime,
      durations,
      addDuration,
      removeDuration,
      hasDurations,
      hourNames,
      hourValues
    };
  }
});
</script>
