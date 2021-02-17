<template>
  <div class="home">
    <Test />
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Test from '@/commons/components/Navbar/index.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    Test,
  },
});
</script>
