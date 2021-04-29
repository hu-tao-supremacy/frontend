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
import { computed, defineComponent, reactive, Ref, ref, watch } from "vue";
import FormOptionButton from "../form-option-button/FormOptionButton.vue";
import FormSpecifyLocation from "../form-specify-location/FormSpecifyLocation.vue";
import { EventLocationFormOption } from "@/commons/constant";
import { EventLocationForm } from "@/commons/Interfaces";

export default defineComponent({
  name: "EventLocationForm",
  components: {
    FormOptionButton,
    FormSpecifyLocation
  },
  setup() {
    const currentOption: Ref<EventLocationFormOption> = ref(
      EventLocationFormOption.SPECIFY
    );

    const specifyEventLocation: EventLocationForm = reactive({
      name: "",
      description: "",
      googleMapUrl: "https://www.onepass.app/",
      isOnline: false,
      isValid: false
    });

    const eventLocation: EventLocationForm = reactive({
      name: specifyEventLocation.name,
      description: specifyEventLocation.description,
      googleMapUrl: specifyEventLocation.googleMapUrl,
      isOnline: specifyEventLocation.isOnline,
      isValid: specifyEventLocation.isValid
    });

    const isSpecifyOption = computed(() => {
      return currentOption.value === EventLocationFormOption.SPECIFY;
    });

    const isLaterOption = computed(() => {
      return currentOption.value === EventLocationFormOption.LATER;
    });

    const isOnlineOption = computed(() => {
      return currentOption.value === EventLocationFormOption.ONLINE;
    });

    function copySpecifyLocationToEventLocation() {
      eventLocation.name = specifyEventLocation.name;
      eventLocation.description = specifyEventLocation.description;
      eventLocation.googleMapUrl = specifyEventLocation.googleMapUrl;
      eventLocation.isOnline = specifyEventLocation.isOnline;
      eventLocation.isValid = specifyEventLocation.isValid;
    }

    function changeEventLocationToLater() {
      eventLocation.name = "Specify Later";
      eventLocation.description = "";
      eventLocation.googleMapUrl = "https://www.onepass.app/";
      eventLocation.isOnline = false;
      eventLocation.isValid = true;
    }

    function changeEventLocationToOnline() {
      eventLocation.name = "Online Event";
      eventLocation.description = "";
      eventLocation.googleMapUrl = "https://www.onepass.app/";
      eventLocation.isOnline = true;
      eventLocation.isValid = true;
    }

    function toSpecifyOption() {
      currentOption.value = EventLocationFormOption.SPECIFY;
      copySpecifyLocationToEventLocation();
    }

    function toLaterOption() {
      currentOption.value = EventLocationFormOption.LATER;
      changeEventLocationToLater();
    }

    function toOnlineOption() {
      currentOption.value = EventLocationFormOption.ONLINE;
      changeEventLocationToOnline();
    }

    watch(specifyEventLocation, () => {
      console.log(specifyEventLocation);
    });

    watch(eventLocation, () => {
      console.log(eventLocation);
    });

    return {
      EventLocationFormOption,
      currentOption,
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
