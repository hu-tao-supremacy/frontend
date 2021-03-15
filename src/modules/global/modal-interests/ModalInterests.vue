<template>
  <base-modal maxModalWidth="712px" @close="closeModal">
    <div class="flex flex-col">
      <h1 class="text-3xl text-blue-11 font-heading">Interests</h1>
      <p class="font-medium text-gray-5">
        Which type of events would you like to join? (Select one or more)
      </p>
      <section class="grid grid-cols-4 auto-rows-auto gap-3 mt-2 mb-1.5">
        <CardInterest
          v-for="interest in interests"
          :key="interest"
          :interestName="interest.name"
          :imgUrl="interest.img"
          @toggle-select="toggleInterest"
        />
      </section>
      <section class="flex items-center self-end">
        <button
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
import { defineComponent } from "vue";
import BaseModal from "@/commons/UI/BaseModal.vue";
import CardInterest from "../card-interest/CardInterest.vue";
import BaseButton from "@/commons/UI/BaseButton.vue";
import { CLOSE_MODAL } from "@/commons/constant";

export default defineComponent({
  name: "ModalInterests",
  components: {
    BaseModal,
    CardInterest,
    BaseButton
  },
  setup(_, context) {
    const interests = {
      interest1: {
        name: "Music & Festival",
        img: "https://picsum.photos/200"
      },
      interest2: {
        name: "Online Event",
        img: "https://picsum.photos/201"
      },
      interest3: {
        name: "Stories",
        img: "https://picsum.photos/202"
      },
      interest4: {
        name: "Education",
        img: "https://picsum.photos/203"
      },
      interest5: {
        name: "IT & Technology",
        img: "https://picsum.photos/204"
      },
      interest6: {
        name: "Internship",
        img: "https://picsum.photos/205"
      },
      interest7: {
        name: "Investment",
        img: "https://picsum.photos/206"
      },
      interest8: {
        name: "Art & Design",
        img: "https://picsum.photos/207"
      },
      interest9: {
        name: "Sport",
        img: "https://picsum.photos/208"
      },
      interest10: {
        name: "Seft-growth",
        img: "https://picsum.photos/209"
      },
      interest11: {
        name: "Gaming",
        img: "https://picsum.photos/210"
      },
      interest12: {
        name: "Business",
        img: "https://picsum.photos/211"
      },
      interest13: {
        name: "Entertainment",
        img: "https://picsum.photos/212"
      },
      interest14: {
        name: "Chula Event",
        img: "https://picsum.photos/213"
      }
    };

    const selectedInterests: string[] = [];

    function toggleInterest(interestName: string) {
      const index = selectedInterests.findIndex(
        interest => interest === interestName
      );
      if (index === -1) selectedInterests.push(interestName);
      else selectedInterests.splice(index, 1);
    }

    function submitInterest() {
      //something to do with API
      console.log(selectedInterests);
    }

    function closeModal() {
      context.emit(CLOSE_MODAL);
    }

    return { interests, toggleInterest, submitInterest, closeModal };
  }
});
</script>
