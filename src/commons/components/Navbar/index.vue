<template>
  <div>Navbar</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import doSomething from './doSomething';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const something = doSomething();
    console.log(something);
  },
});
</script>
