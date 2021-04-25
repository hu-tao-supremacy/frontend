<template>
  <div class="flex justify-center">
    <div class="content-max-width w-full mt-4 mb-10">
      <Table
        :editCol="true"
        :data="members"
        title="Member Management"
        :header="header"
      />
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

    const header: Record<string, string | null> = {
      profilePictureUrl: null,
      firstName: null,
      lastName: null,
      name: "Name",
      email: "Email",
      phoneNumber: "Phone",
      role: "Role"
    };

    return { header, members };
  }
});
</script>
