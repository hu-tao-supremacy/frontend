<template>
  <div id="nav">
    <NavBar />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/commons/components/Navbar/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
});
</script>

<style></style>
