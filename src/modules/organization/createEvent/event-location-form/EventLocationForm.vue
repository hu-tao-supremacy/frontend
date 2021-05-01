<template>
  <div
    class="flex flex-col py-4 px-10 space-y-3 shadow-sm rounded-2xl bg-white overflow-hidden"
  >
    <h1 class="font-heading text-3xl">Event location</h1>
    <section class="flex space-x-3">
      <form-option-button
        @click="changeOption(EventLocationFormOption.SPECIFY)"
        :isSelected="isSpecifyOption"
        >Specify location</form-option-button
      >
      <form-option-button
        @click="changeOption(EventLocationFormOption.LATER)"
        :isSelected="isLaterOption"
        >Announce later</form-option-button
      >
      <form-option-button
        @click="changeOption(EventLocationFormOption.ONLINE)"
        :isSelected="isOnlineOption"
        >Online event</form-option-button
      >
    </section>
    <FormSpecifyLocation
      v-show="isSpecifyOption"
      v-model="specifyEventLocation"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import FormOptionButton from "../form-option-button/FormOptionButton.vue";
import FormSpecifyLocation from "../form-specify-location/FormSpecifyLocation.vue";
import {
  EventLocationFormOption,
  UPDATE_MODEL_VALUE
} from "@/commons/constant";
import { EventLocationForm } from "@/commons/Interfaces";
import useEventLocationForm from "./useEventLocationForm";

export default defineComponent({
  name: "EventLocationForm",
  components: {
    FormOptionButton,
    FormSpecifyLocation
  },
  props: {
    modelValue: {
      type: Object as () => EventLocationForm,
      required: true
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const { modelValue } = toRefs(props);

    const {
      specifyEventLocation,
      isSpecifyOption,
      isLaterOption,
      isOnlineOption,
      changeOption
    } = useEventLocationForm(modelValue, context);

    return {
      specifyEventLocation,
      isSpecifyOption,
      isLaterOption,
      isOnlineOption,
      changeOption,
      EventLocationFormOption
    };
  }
});
</script>
