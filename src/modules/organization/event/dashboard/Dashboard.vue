<template>
  <div class="flex flex-col items-center">
    <QrReader v-if="isQrReaderShown" @close-modal="closeQrReader" />
    <div class="content-max-width w-full mt-4 mb-10">
      <div class="flex-shrink-0 w-full h-20 // rounded-lg overflow-hidden">
        <LazyImage
          :height="1000"
          :width="1000"
          alt="will change to api"
          :url="image.url"
          :placeholder="image.hash"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex mt-2.5 space-x-3">
        <h1 class="font-heading text-4xl">Dashboard</h1>
        <div class="flex justify-between // w-full">
          <BaseButton
            class="flex justify-center items-center // h-5 px-2 space-x-1 flex-shrink-0"
          >
            <div>Export Data</div>
            <base-icon class="w-3 h-3">
              <download-icon />
            </base-icon>
          </BaseButton>
          <BaseButton
            class="flex justify-center items-center // h-5 px-2 space-x-1 flex-shrink-0"
            @click="showQrReader"
          >
            <div>Attendee Check-in</div>
            <base-icon class="w-3 h-3">
              <maximize-icon />
            </base-icon>
          </BaseButton>
        </div>
      </div>
      <div class="flex // mt-3.5 space-x-4">
        <SimpleCard text="Registered Users" :count="approvedAttendeesCount" />
        <SimpleCard text="Pending Users" :count="pendingAttendeesCount" />
        <SimpleCard text="Feedback Received" :count="feedbackReceivedCount" />
      </div>
      <h3 class="font-heading text-2xl mt-6">Attendee</h3>
      <Table :data="attendees" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import useOrgEvent from "../use-org-event";
import Table from "../components/table/Table.vue";
import "@/index.css";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import DownloadIcon from "@/assets/Download.vue";
import MaximizeIcon from "@/assets/Maximize.vue";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import SimpleCard from "../components/simple-card/SimpleCard.vue";
import { UserEventStatus } from "@/apollo/types";
import QrReader from "@/commons/UI/qr-reader/QrReader.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    LazyImage,
    Table,
    DownloadIcon,
    BaseIcon,
    BaseButton,
    SimpleCard,
    MaximizeIcon,
    QrReader
  },
  setup() {
    const { event } = useOrgEvent();
    const isQrReaderShown = ref(false);

    const image = computed(() => {
      return {
        url: event.value?.coverImageUrl,
        hash: event.value?.coverImageHash
      };
    });

    const attendees = computed(() => {
      return event.value?.attendees.map(attendee => attendee);
    });

    const pendingAttendeesCount = computed(() => {
      return attendees.value?.filter(attendee =>
        attendee.status === UserEventStatus.Pending ? true : false
      ).length;
    });

    const approvedAttendeesCount = computed(() => {
      return attendees.value?.filter(attendee =>
        attendee.status === UserEventStatus.Approved ? true : false
      ).length;
    });

    const feedbackReceivedCount = computed(() => {
      return attendees.value?.filter(attendee =>
        attendee.answers.length === 0 ? false : true
      ).length;
    });
    function showQrReader() {
      isQrReaderShown.value = true;
    }
    function closeQrReader() {
      isQrReaderShown.value = false;
    }

    return {
      image,
      attendees,
      pendingAttendeesCount,
      approvedAttendeesCount,
      feedbackReceivedCount,
      showQrReader,
      closeQrReader,
      isQrReaderShown
    };
  }
});
</script>
