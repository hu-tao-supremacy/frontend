<template>
  <div class="w-full flex justify-center pt-4 pb-3 px-4">
    <form
      @submit.prevent="submitForm"
      class="content-max-width flex flex-col space-y-3"
    >
      <h1 class="font-heading text-4xl">Create Event</h1>
      <EventInfo v-model="eventInformation" />
      <EventDateTime v-model="eventDurations" />
      <EventLocation v-model="eventLocation" />
      <base-button
        type="submit"
        :disabled="!isValidForm"
        class="w-16.5 h-4.5 self-end"
        >Submit</base-button
      >
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";
import EventInfo from "./event-info-form/EventInfoForm.vue";
import EventDateTime from "./event-date-time-form/EventDateTimeForm.vue";
import EventLocation from "./event-location-form/EventLocationForm.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { setTimeToZero } from "@/commons/utils/date";
import {
  EventInfoForm,
  EventDurationsForm,
  EventLocationForm
} from "@/commons/Interfaces";
import { CreateEventInput, Organization } from "@/apollo/types";
import { organizationData } from "./testData";

export default defineComponent({
  name: "CreateEventPage",
  components: {
    EventInfo,
    EventDateTime,
    EventLocation,
    BaseButton
  },
  setup() {
    //Get from API
    const organization: Ref<Organization> = ref(organizationData);

    const eventInformation: Ref<EventInfoForm> = ref({
      name: "",
      contact: "",
      tags: [],
      description: "",
      attendeeLimit: 0,
      registrationDueDate: setTimeToZero(new Date()).toString(),
      posterImg: null,
      coverImg: null,
      isValid: false
    });

    const eventDurations: Ref<EventDurationsForm> = ref({
      durations: [],
      isValid: false
    });

    const eventLocation: Ref<EventLocationForm> = ref({
      name: "",
      description: "",
      googleMapUrl: "https://www.onepass.app/",
      isOnline: false,
      isValid: false
    });

    const isValidForm = computed(() => {
      return (
        eventInformation.value.isValid &&
        eventDurations.value.isValid &&
        eventLocation.value.isValid
      );
    });

    function submitForm() {
      const eventLocationInput = {
        name: eventLocation.value.name,
        description: eventLocation.value.description,
        googleMapUrl: eventLocation.value.googleMapUrl,
        isOnline: eventLocation.value.isOnline
      };
      const event: CreateEventInput = {
        organizationId: organization.value.id,
        location: eventLocationInput,
        description: eventInformation.value.description,
        name: eventInformation.value.name,
        attendeeLimit: eventInformation.value.attendeeLimit,
        contact: eventInformation.value.contact,
        registrationDueDate: eventInformation.value.registrationDueDate,
        coverImage: eventInformation.value.coverImg,
        posterImage: eventInformation.value.posterImg,
        tags: eventInformation.value.tags,
        durations: eventDurations.value.durations
      };

      //Send to API and then to event form page
      console.log(event);
      console.log("To event form");
    }

    return {
      eventInformation,
      eventDurations,
      eventLocation,
      isValidForm,
      submitForm
    };
  }
});
</script>
