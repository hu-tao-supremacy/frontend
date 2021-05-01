import { computed, Ref, ref, reactive, watch, SetupContext } from "vue";
import { set, isEqual } from "date-fns";
import { setTimeToZero } from "@/commons/utils/date";
import { SetEventDurationsDurationInput } from "@/apollo/types";
import { EventDurationsForm } from "@/commons/Interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default function useFormSpecifyDateTime(
  modelValue: Ref<EventDurationsForm>,
  context: SetupContext<"update:modelValue"[]>
) {
  const date = ref(setTimeToZero(new Date()).toString());
  const startTime = ref(0);
  const endTime = ref(0);
  const durations: SetEventDurationsDurationInput[] = reactive(
    modelValue.value.durations
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
    hasDurations,
    addDuration,
    removeDuration
  };
}
