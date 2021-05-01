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
import { defineComponent, toRefs } from "vue";
import FormOptionButton from "../form-option-button/FormOptionButton.vue";
import FormSpecifyDateTime from "../form-specify-date-time/FormSpecifyDateTime.vue";
import FormStartEndDateTime from "../form-start-end-date-time/FormStartEndDateTime.vue";
import {
  EventDateTimeFormOption,
  UPDATE_MODEL_VALUE
} from "@/commons/constant";
import { EventDurationsForm } from "@/commons/Interfaces";
import useEventDateTimeForm from "./useEventDateTimeForm";

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
    const { modelValue } = toRefs(props);

    const {
      isSpecifyOption,
      isStartEndOption,
      isLaterOption,
      changeOption,
      specifyEventDurations,
      startEndEventDurations
    } = useEventDateTimeForm(modelValue, context);

    return {
      isSpecifyOption,
      isStartEndOption,
      isLaterOption,
      changeOption,
      specifyEventDurations,
      startEndEventDurations,
      EventDateTimeFormOption
    };
  }
});
</script>
