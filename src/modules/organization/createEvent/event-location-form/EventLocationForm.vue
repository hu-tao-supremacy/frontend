<template>
  <div
    class="flex flex-col py-4 px-10 space-y-3 shadow-sm rounded-2xl bg-white overflow-hidden"
  >
    <h1 class="font-heading text-3xl">Event location</h1>
    <section class="flex space-x-3">
      <form-option-button @click="toSpecifyOption" :isSelected="isSpecifyOption"
        >Specify location</form-option-button
      >
      <form-option-button @click="toLaterOption" :isSelected="isLaterOption"
        >Announce later</form-option-button
      >
      <form-option-button @click="toOnlineOption" :isSelected="isOnlineOption"
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
import { computed, defineComponent, Ref, ref, watch, reactive } from "vue";
import FormOptionButton from "../form-option-button/FormOptionButton.vue";
import FormSpecifyLocation from "../form-specify-location/FormSpecifyLocation.vue";
import {
  EventLocationFormOption,
  UPDATE_MODEL_VALUE
} from "@/commons/constant";
import { EventLocationForm } from "@/commons/Interfaces";

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
    const currentOption: Ref<EventLocationFormOption> = ref(
      EventLocationFormOption.SPECIFY
    );

    const specifyEventLocation: Ref<EventLocationForm> = ref({
      name: props.modelValue.name,
      description: props.modelValue.description,
      googleMapUrl: props.modelValue.googleMapUrl,
      isOnline: props.modelValue.isOnline,
      isValid: props.modelValue.isValid
    });

    const laterEventLocation: EventLocationForm = {
      name: "Announce later",
      description: "",
      googleMapUrl: "https://www.onepass.app/",
      isOnline: false,
      isValid: true
    };

    const onlineEventLocation: EventLocationForm = {
      name: "Online",
      description: "",
      googleMapUrl: "https://www.onepass.app/",
      isOnline: true,
      isValid: true
    };

    const isSpecifyOption = computed(() => {
      return currentOption.value === EventLocationFormOption.SPECIFY;
    });

    const isLaterOption = computed(() => {
      return currentOption.value === EventLocationFormOption.LATER;
    });

    const isOnlineOption = computed(() => {
      return currentOption.value === EventLocationFormOption.ONLINE;
    });

    function toSpecifyOption() {
      currentOption.value = EventLocationFormOption.SPECIFY;
    }

    function toLaterOption() {
      currentOption.value = EventLocationFormOption.LATER;
    }

    function toOnlineOption() {
      currentOption.value = EventLocationFormOption.ONLINE;
    }

    watch(
      () => specifyEventLocation,
      () => context.emit(UPDATE_MODEL_VALUE, specifyEventLocation.value),
      { deep: true }
    );

    watch(currentOption, () => {
      if (currentOption.value === EventLocationFormOption.SPECIFY)
        context.emit(UPDATE_MODEL_VALUE, specifyEventLocation.value);
      else if (currentOption.value === EventLocationFormOption.LATER)
        context.emit(UPDATE_MODEL_VALUE, laterEventLocation);
      else context.emit(UPDATE_MODEL_VALUE, onlineEventLocation);
    });

    return {
      specifyEventLocation,
      isSpecifyOption,
      isLaterOption,
      isOnlineOption,
      toSpecifyOption,
      toLaterOption,
      toOnlineOption
    };
  }
});
</script>
