<template>
  <div
    v-if="profileImg"
    class="w-6 h-6 rounded-lg overflow-hidden flex-shrink-0"
    :class="{ 'border-2 border-white': isSelected }"
  >
    <LazyImage
      :width="100"
      :height="100"
      alt="will change to api"
      :url="profileImg"
      :placeholder="profileImgHash"
      class="object-cover w-full h-full"
    />
  </div>
  <div
    v-else
    class="flex justify-center items-center w-6 h-6 rounded-lg bg-primary-3 flex-shrink-0"
    :class="{ 'border-4 border-primary-5': isSelected }"
  >
    <h1 class="text-lg max-w-full font-heading font-bold text-primary truncate">
      {{ orgInitial }}
    </h1>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";

export default defineComponent({
  name: "OrgProfile",
  components: {
    LazyImage
  },
  props: {
    profileImg: {
      type: String
    },
    profileImgHash: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const orgInitial = computed(() => {
      const wordsSplitList = props.name.split(" ");
      let wordsInitial = "";
      wordsSplitList.forEach(word => {
        wordsInitial = wordsInitial + word.charAt(0).toUpperCase();
      });
      return wordsInitial;
    });

    return { orgInitial };
  }
});
</script>
