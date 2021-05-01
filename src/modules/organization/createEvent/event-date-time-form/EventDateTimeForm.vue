<template>
  <div
    class="flex flex-col pt-4 pb-3 px-10 space-y-3 bg-white shadow-sm rounded-2xl"
  >
    <h1 class="font-heading text-3xl">Event date and time</h1>
    <section class="flex space-x-3">
      <form-option-button
        @click="changeOption(EventDateTimeFormOption.SPECIFY)"
        :isSelected="isSpecifyOption"
        >Specify date & time</form-option-button
      >
      <form-option-button
        @click="changeOption(EventDateTimeFormOption.START_END)"
        :isSelected="isStartEndOption"
        >Start-End duration</form-option-button
      >
      <form-option-button
        @click="changeOption(EventDateTimeFormOption.LATER)"
        :isSelected="isLaterOption"
        >Announce later</form-option-button
      >
    </section>
    <FormSpecifyDateTime
      v-show="isSpecifyOption"
      v-model="specifyEventDurations"
    />
    <FormStartEndDateTime
      v-show="isStartEndOption"
      v-model="startEndEventDurations"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref, watch } from "vue";
import FormOptionButton from "../form-option-button/FormOptionButton.vue";
import FormSpecifyDateTime from "../form-specify-date-time/FormSpecifyDateTime.vue";
import FormStartEndDateTime from "../form-start-end-date-time/FormStartEndDateTime.vue";
import {
  EventDateTimeFormOption,
  UPDATE_MODEL_VALUE
} from "@/commons/constant";
import { EventDurationsForm } from "@/commons/Interfaces";

export default defineComponent({
  name: "EventDateTimeForm",
  components: {
    FormOptionButton,
    FormSpecifyDateTime,
    FormStartEndDateTime
  },
  props: {
    modelValue: {
      type: Object as () => EventDurationsForm,
      required: true
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const currentOption: Ref<EventDateTimeFormOption> = ref(
      EventDateTimeFormOption.SPECIFY
    );

    const specifyEventDurations: Ref<EventDurationsForm> = ref({
      durations: props.modelValue.durations,
      isValid: props.modelValue.isValid
    });

    const startEndEventDurations: Ref<EventDurationsForm> = ref({
      durations: [],
      isValid: false
    });

    const announceLaterEventDuration: EventDurationsForm = {
      durations: [],
      isValid: true
    };

    const isSpecifyOption = computed(() => {
      return currentOption.value === EventDateTimeFormOption.SPECIFY;
    });

    const isStartEndOption = computed(() => {
      return currentOption.value === EventDateTimeFormOption.START_END;
    });

    const isLaterOption = computed(() => {
      return currentOption.value === EventDateTimeFormOption.LATER;
    });

    function changeOption(option: EventDateTimeFormOption) {
      currentOption.value = option;
    }

    watch(
      () => specifyEventDurations,
      () => {
        if (isSpecifyOption.value)
          context.emit(UPDATE_MODEL_VALUE, specifyEventDurations.value);
      },
      { deep: true }
    );

    watch(
      () => startEndEventDurations,
      () => {
        if (isStartEndOption.value)
          context.emit(UPDATE_MODEL_VALUE, startEndEventDurations.value);
      },
      { deep: true }
    );

    watch(currentOption, () => {
      if (currentOption.value === EventDateTimeFormOption.SPECIFY)
        context.emit(UPDATE_MODEL_VALUE, specifyEventDurations.value);
      else if (currentOption.value === EventDateTimeFormOption.START_END)
        context.emit(UPDATE_MODEL_VALUE, startEndEventDurations.value);
      else context.emit(UPDATE_MODEL_VALUE, announceLaterEventDuration);
    });

    return {
      isSpecifyOption,
      isStartEndOption,
      isLaterOption,
      changeOption,
      EventDateTimeFormOption,
      specifyEventDurations,
      startEndEventDurations
    };
  }
});
</script>
