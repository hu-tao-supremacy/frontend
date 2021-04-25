<template>
  <div class="flex justify-center">
    <div class="content-max-width w-full mt-4 mb-10">
      <h1 class="font-heading text-4xl">Member Management</h1>
      <Table :data="members" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "./table/Table.vue";
import "@/index.css";
import useMemberManagement from "./use-member-management";

export default defineComponent({
  name: "MemberManagement",
  components: {
    Table
  },
  setup() {
    const { members } = useMemberManagement();

    return { members };
  }
});
</script>
