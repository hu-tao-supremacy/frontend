<template>
  <div
    class="flex flex-col // px-8 py-3 space-y-3 // bg-white shadow-sm rounded-lg"
  >
    <div class="flex items-center space-x-3">
      <div class="flex-shrink-0 w-20 h-20 // rounded-full overflow-hidden">
        <LazyImage
          :height="1000"
          :width="1000"
          alt="will change to api"
          :url="image.url"
          :placeholder="image.hash"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex items-center // space-x-1 // font-heading text-4xl">
          <h1>{{ organization?.name }}</h1>
          <base-icon class="flex-shrink-0">
            <CheckCircleIcon v-if="organization?.isVerified" />
          </base-icon>
        </div>
        <div>
          <span class=" text-primary">{{ relatedEvents }}</span>
          related events
        </div>
      </div>
    </div>
    <div class="flex space-x-3">
      <div class="flex flex-col flex-shrink-0 // w-3/5 // space-y-1">
        <h3 class="text-2xl font-heading">Description</h3>
        <p>
          {{ organization?.description }}
        </p>
      </div>
      <div class="flex flex-col // space-y-1">
        <h3 class="text-2xl font-heading">Contact</h3>
        <ul class="space-y-0.25">
          <li>Facebook : {{ contact.facebook }}</li>
          <li>Instagram : {{ contact.instagram }}</li>
          <li>
            Line :
            {{ contact.line }}
          </li>
          <li>Email : {{ contact.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import CheckCircleIcon from "@/assets/CheckCircle.vue";
import LazyImage from "@/commons/UI/lazy-image/LazyImage.vue";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { Organization } from "@/apollo/types";

export default defineComponent({
  name: "OrgCard",
  components: {
    CheckCircleIcon,
    LazyImage,
    BaseIcon
  },
  props: {
    organization: Object as PropType<Organization>
  },
  setup(props) {
    const contact = computed(() => {
      return {
        facebook: props.organization?.facebookPage,
        instagram: props.organization?.instagram,
        line: props.organization?.lineOfficialAccount,
        email: props.organization?.email
      };
    });
    const relatedEvents = computed(() => {
      return props.organization?.events.length;
    });

    const image = computed(() => {
      return {
        url: props.organization?.profilePictureUrl,
        hash: props.organization?.profilePictureHash
      };
    });

    return { image, contact, relatedEvents };
  }
});
</script>
