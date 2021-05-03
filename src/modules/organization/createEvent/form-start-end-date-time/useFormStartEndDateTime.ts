import { computed, reactive, ref, watch, SetupContext } from "vue";
import { isAfter, isEqual, set, differenceInCalendarDays, add } from "date-fns";
import { setTimeToZero } from "@/commons/utils/date";
import { SetEventDurationsDurationInput } from "@/apollo/types";
import { EventDurationsForm } from "@/commons/Interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default function useFormStartEndDateTime(
  context: SetupContext<"update:modelValue"[]>
) {
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
      start: set(day, { hours: startHour }).toISOString(),
      finish: set(day, { hours: endHour }).toISOString()
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

  return { startDate, endDate, startTime, endTime };
}
