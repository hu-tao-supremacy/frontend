<template>
  <div class="grid grid-cols-9 rounded-lg shadow-sm h-12">
    <div class="col-span-4 min-h-full">
      <img
        :src="imgUrl"
        alt=""
        class="object-cover w-full h-full rounded-l-lg"
      />
    </div>
    <div class="col-span-5 flex flex-col px-1 py-0.5">
      <div class="font-heading mb-0.25" :class="orgShortNameTextSize">
        {{ orgShortName }}
      </div>
      <div class="text-xs w-full org-description">{{ orgFullName }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const imgUrl =
      "https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/147484347_3819070534802922_4929298246220081385_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFi4rMh7Yw3qrsCMcaWiRlF6aoBGZo3Aa_pqgEZmjcBr-lDqtVr3_Nw9D1HnHa9jaWxAA8LHpnpABTuXdp3YF-j&_nc_ohc=2xxv2bLVx_0AX_1OVgC&_nc_ht=scontent.fbkk22-6.fna&oh=71b718d7148f60b83f2effa8b469b04a&oe=605694B7";
    const orgShortName = "SGCU";
    const orgShortNameTextSize =
      orgShortName.length > 5 ? "text-2xl" : "text-3xl";
    const orgFullName = "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)";

    return {
      imgUrl,
      orgShortName,
      orgFullName,
      orgShortNameTextSize
    };
  }
});
</script>

<style scoped>
.org-description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
