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
            class="h-3.75 w-9"
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
            class="h-3.75 w-9"
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
import { computed, defineComponent, reactive, ref, watch } from "vue";
import BaseDatePicker from "@/commons/UI/BaseDatePicker.vue";
import SingleNameSelect from "@/commons/UI/select/SingleNameSelect.vue";
import { hourNames, hourValues } from "@/commons/constant/hour";
import { isAfter, isEqual, set, differenceInCalendarDays, add } from "date-fns";
import { setTimeToZero } from "@/commons/utils/date";
import { SetEventDurationsDurationInput } from "@/apollo/types";
import { EventDurationsForm } from "@/commons/Interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

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
    const startDate = ref(setTimeToZero(new Date()).toString());
    const endDate = ref(setTimeToZero(new Date()).toString());
    const startTime = ref(0);
    const endTime = ref(0);

    const startFinishDate = computed(() => {
      return {
        start: new Date(startDate.value),
        finish: new Date(endDate.value)
      };
    });

    const isValidDuration = computed(() => {
      const isValidDates =
        isAfter(startFinishDate.value.finish, startFinishDate.value.start) ||
        isEqual(startFinishDate.value.finish, startFinishDate.value.start);
      const isValidTime = endTime.value > startTime.value;
      return isValidDates && isValidTime;
    });

    function getStartFinishDurationOfADay(
      day: Date,
      startHour: number,
      endHour: number
    ): SetEventDurationsDurationInput {
      return {
        start: set(day, { hours: startHour }).toString(),
        finish: set(day, { hours: endHour }).toString()
      };
    }

    const durations = computed(() => {
      const repeatedDurations: SetEventDurationsDurationInput[] = [];
      if (!isValidDuration.value) return repeatedDurations;
      const numOfDaysDifference = differenceInCalendarDays(
        startFinishDate.value.finish,
        startFinishDate.value.start
      );
      for (const dayFromStart of Array(numOfDaysDifference + 1).keys()) {
        const day = add(startFinishDate.value.start, { days: dayFromStart });
        const duration = getStartFinishDurationOfADay(
          day,
          startTime.value,
          endTime.value
        );
        repeatedDurations.push(duration);
      }
      return repeatedDurations;
    });

    const eventDurations: EventDurationsForm = reactive({
      durations: durations,
      isValid: isValidDuration
    });

    watch(
      () => eventDurations,
      () => context.emit(UPDATE_MODEL_VALUE, eventDurations),
      { deep: true }
    );

    return { startDate, endDate, startTime, endTime, hourNames, hourValues };
  }
});
</script>
