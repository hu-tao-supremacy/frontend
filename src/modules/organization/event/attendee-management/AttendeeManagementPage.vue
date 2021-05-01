<template>
  <div class="flex flex-col items-center">
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
      <div class="flex mt-2 space-x-3">
        <h1 class="font-heading text-4xl">Attendee Management</h1>
        <BaseButton
          class="flex justify-center items-center // h-5 px-2 space-x-1 flex-shrink-0"
        >
          <div class=" font">Export Data</div>
          <base-icon class="w-3 h-3">
            <download-icon />
          </base-icon>
        </BaseButton>
      </div>
      <Table :data="attendees" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import useOrgEvent from "../use-org-event";
import Table from "../components/table/Table.vue";
import "@/index.css";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import DownloadIcon from "@/assets/Download.vue";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

export default defineComponent({
  name: "AttendeeManagement",
  components: { LazyImage, Table, DownloadIcon, BaseIcon, BaseButton },
  setup() {
    const { event } = useOrgEvent();

    const image = computed(() => {
      return {
        url: event.value?.coverImageUrl,
        hash: event.value?.coverImageHash
      };
    });

    const attendees = computed(() => {
      return event.value?.attendees.map(attendee => attendee);
    });

    return { image, attendees };
  }
});
</script>
