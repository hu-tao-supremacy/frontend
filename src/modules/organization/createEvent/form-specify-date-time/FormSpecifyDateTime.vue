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
import { computed, defineComponent, ref, reactive, watch } from "vue";
import BaseDatePicker from "@/commons/UI/BaseDatePicker.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import FormSpecifyDateTimeSchedule from "../form-specify-date-time-shcedule/FormSpecifyDateTimeSchedule.vue";
import { hourNames, hourValues } from "@/commons/constant/hour";
import { set, isEqual } from "date-fns";
import { setTimeToZero } from "@/commons/utils/date";
import { SetEventDurationsDurationInput } from "@/apollo/types";
import { EventDurationsForm } from "@/commons/Interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

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
    const date = ref(setTimeToZero(new Date()).toString());
    const startTime = ref(0);
    const endTime = ref(0);
    const durations: SetEventDurationsDurationInput[] = reactive(
      props.modelValue.durations
    );

    const isValidTime = computed(() => {
      return endTime.value > startTime.value;
    });

    const hasDurations = computed(() => {
      return durations.length !== 0;
    });

    const inputDuration = computed(() => {
      if (!isValidTime.value)
        return {
          start: new Date(),
          finish: new Date()
        };
      const start = set(new Date(date.value), { hours: startTime.value });
      const finish = set(new Date(date.value), { hours: endTime.value });
      return { start: start, finish: finish };
    });

    function isEqualToInputDuration(
      insertedDuration: SetEventDurationsDurationInput
    ) {
      const insertedDurationStartTime = new Date(insertedDuration.start);
      const insertedDurationFinishTime = new Date(insertedDuration.finish);
      return (
        isEqual(inputDuration.value.start, insertedDurationStartTime) &&
        isEqual(inputDuration.value.finish, insertedDurationFinishTime)
      );
    }

    function addDuration() {
      //Check if the duration is already inserted
      const isDurationExist = durations.some(duration =>
        isEqualToInputDuration(duration)
      );
      if (isDurationExist) return;
      const inputDurationString = {
        start: inputDuration.value.start.toString(),
        finish: inputDuration.value.finish.toString()
      };
      durations.push(inputDurationString);
    }

    function removeDuration(index: number) {
      durations.splice(index, 1);
    }

    const eventDurations: EventDurationsForm = reactive({
      durations: durations,
      isValid: hasDurations
    });

    watch(
      () => eventDurations,
      () => {
        context.emit(UPDATE_MODEL_VALUE, eventDurations);
      },
      { deep: true }
    );

    return {
      date,
      startTime,
      endTime,
      isValidTime,
      durations,
      hourNames,
      hourValues,
      addDuration,
      removeDuration,
      hasDurations
    };
  }
});
</script>
