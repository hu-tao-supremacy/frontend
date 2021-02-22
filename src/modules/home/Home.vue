<template>
  <!-- Will change sizing when use for real -->
  <CardBanner
    :style="{ width: '960px' }"
    class="rounded-2xl shadow overflow-hidden"
  />
  <EventCarousel />
  <CardOrganization class="w-28" />
  <CardOrganization class="w-28" />
  <br />
  <CardRecommened />
  <br />
  <CardEvent />
  <br />
  <CardInterest class="w-16" />
  <button @click="toggleModal" class="bg-primary">Show modal</button>
  <base-modal v-if="showModal" @close-modal="toggleModal"
    ><div class="w-56 h-32 bg-white">Some div that we want</div>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CardBanner from "./components/CardBanner.vue";
import CardEvent from "./components/CardEvent.vue";
import CardRecommened from "./components/CardRecommended.vue";
import CardOrganization from "./components/CardOrganization.vue";
import CardInterest from "./components/CardInterest.vue";
import EventCarousel from "./components/EventCarousel.vue";
import BaseModal from "@/commons/UI/BaseModal.vue";

export default defineComponent({
  components: {
    CardBanner,
    CardEvent,
    CardRecommened,
    CardOrganization,
    CardInterest,
    EventCarousel,
    BaseModal
  },
  setup() {
    const showModal = ref(false);

    function toggleModal() {
      showModal.value = !showModal.value;
    }

    return { showModal, toggleModal };
  }
});
</script>
