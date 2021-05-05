<template>
  <div class="flex px-4 flex-col items-center">
    <QrReader
      v-if="isQrReaderShown"
      @ticket="checkTicket"
      @close-modal="closeQrReader"
      :isCheckinSuccess="isCheckinSuccess"
      :attendeeName="checkInAttendeeName"
      :textMessage="textMessage"
    />
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
          <div class="flex">
            <BaseButton
              :disabled="isExporting"
              @click="changeExportStatus()"
              class="flex justify-center items-center // h-5 px-2 space-x-1 flex-shrink-0"
            >
              <div>Export Data</div>
              <base-icon class="w-3 h-3">
                <download-icon />
              </base-icon>
            </BaseButton>
            <LoadingSpinner class="ml-2" v-if="isExporting" />
          </div>
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
import { checkInOrg, useExportData } from "./api";
import { Parser } from "json2csv";
import FileSaver from "file-saver";
import LoadingSpinner from "@/commons/UI/LoadingSpinner.vue";

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
    QrReader,
    LoadingSpinner
  },
  setup() {
    const { event, eventId } = useOrgEvent();
    const isQrReaderShown = ref(false);
    const isCheckinSuccess = ref(false);
    const checkInAttendeeName = ref("");
    const textMessage = ref("");
    const { checkIn, onCheckInDone, onCheckInError } = checkInOrg();
    const isExporting = ref(false);
    const { onDataExport, onDataExportError } = useExportData(
      isExporting,
      eventId
    );
    const changeExportStatus = () => {
      isExporting.value = !isExporting.value;
    };

    onDataExportError(() => {
      isExporting.value = false;
    });

    onDataExport(result => {
      if (!result.data) {
        isExporting.value = false;
      }
      const attendeeResult = result.data.event.attendees.map(attendee => {
        const answers = attendee.answers.map(answer => ({
          [answer.question.title]: answer.value
        }));
        const answersObject = Object.assign({}, ...answers);
        const attendeeObject = {
          rating: attendee.rating,
          ticket: attendee.ticket,
          status: attendee.status,
          ...answersObject,
          ...attendee.user
        };
        delete attendeeObject.__typename;
        return attendeeObject;
      });

      try {
        const parser = new Parser();
        const csv = parser.parse(attendeeResult);
        const blob = new Blob([csv], { type: "text/csv" });
        FileSaver.saveAs(blob, `${event.value?.name}.csv`);
        isExporting.value = false;
      } catch (err) {
        console.error(err);
        isExporting.value = false;
      }
    });

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
      return attendees.value?.filter(attendee => !!attendee.rating).length;
    });

    function checkTicket(decoded: string) {
      checkIn({ input: { eventId, ticket: decoded } });
    }

    onCheckInDone(attendee => {
      isCheckinSuccess.value = true;
      checkInAttendeeName.value = `${attendee.data?.checkIn.user.firstName} ${attendee.data?.checkIn.user.lastName}`;
      textMessage.value = ": Checked In";
    });

    onCheckInError(() => {
      isCheckinSuccess.value = false;
      checkInAttendeeName.value = "";
      textMessage.value = "Check-in failed. Please try again.";
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
      isQrReaderShown,
      checkTicket,
      isCheckinSuccess,
      checkInAttendeeName,
      textMessage,
      changeExportStatus,
      isExporting
    };
  }
});
</script>
