<template>
  <PageNavbar />
  <router-view></router-view>
  <PageFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageFooter from "./commons/UI/PageFooter.vue";
import PageNavbar from "./commons/UI/page-navbar/PageNavbar.vue";

export default defineComponent({
  name: "App",
  components: {
    PageFooter,
    PageNavbar
  }
});
</script>

<style>
.modal-authen-inner-container-width {
  width: 442px;
}

.modal-authen-btn-width {
  width: 130px;
}

.modal-authen-text-input-height {
  height: 30px;
}
</style>
