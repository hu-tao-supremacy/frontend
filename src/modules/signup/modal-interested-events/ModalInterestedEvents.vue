<template>
  <base-modal maxModalWidth="712px" @close="closeModal">
    <div class="flex flex-col">
      <h1 class="text-3xl text-blue-11 font-heading">Interested Events</h1>
      <p class="font-medium text-gray-5">
        Pick events that you have joined or would like to join. (Select one or
        more)
      </p>
      <section class="grid grid-cols-4 auto-rows-auto gap-3 mt-2 mb-1.5">
        <CardInterest
          v-for="interest in interests"
          :key="interest"
          :interestName="interest.name"
          :img="interest.img"
          :imgHash="interest.imgHash"
          :isSelected="isSelected(interest.id)"
          @click="toggleInterest(interest.id)"
        />
      </section>
      <section class="flex items-center self-end">
        <button
          @click="closeModal"
          class="bg-transparent text-gray-5 hover:text-primary focus:text-primary focus:outline-none mr-3"
        >
          Not now
        </button>
        <base-button class="px-2 h-4.5 flex-shrink-0" @click="submitInterest"
          >Finish</base-button
        >
      </section>
    </div>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseModal from "@/commons/UI/BaseModal.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { CLOSE_MODAL } from "@/commons/constant";
import { Interest } from "@/commons/Interfaces";
import useModalInterests from "./useModalInterestedEvents";
import CardInterest from "../card-interest/CardInterest.vue";
import { SUBMIT_MODAL } from "../constant";

export default defineComponent({
  name: "ModalInterestedEvents",
  components: {
    BaseModal,
    CardInterest,
    BaseButton
  },
  props: {
    interests: {
      type: Array as PropType<Array<Interest>>,
      required: true
    }
  },
  emits: [CLOSE_MODAL, SUBMIT_MODAL],
  setup(_, context) {
    const {
      toggleInterest,
      isSelected,
      submitInterest,
      closeModal
    } = useModalInterests(context);

    return { toggleInterest, isSelected, submitInterest, closeModal };
  }
});
</script>
