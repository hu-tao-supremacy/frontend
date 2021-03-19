<template>
  <div class="relative w-16">
    <button class="bg-white w-full" @click="toggleShowOptions">
      {{ displayOption }}
    </button>
    <section
      v-show="showOptions"
      class="absolute left-0 top-2 flex flex-col bg-white z-10 w-full"
    >
      <input v-model="searchQuery" type="text" />
      <p
        v-for="option in filteredOptions"
        :key="option.value"
        @click="changeOption(option)"
      >
        {{ option.name }}
      </p>
      <slot></slot>
    </section>
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import districts from "@/commons/constant/thailand-address/district";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  name: "BaseSearchableSelect",
  props: {
    modelValue: {
      default: null
    }
  },
  setup(props, context) {
    const showOptions = ref(false);
    const selectedOption: Ref<{ name: string; value: unknown }> = ref({
      name: "",
      value: null
    });
    const searchQuery = ref("");
    const optionNames = districts.map(district => district.DISTRICT_TH_NAME); //props
    const optionValues: unknown[] = districts; //props
    const options: { name: string; value: unknown }[] = [];
    optionNames.forEach((name, i) => {
      const option = { name: name, value: optionValues[i] };
      options.push(option);
    });

    function toggleShowOptions() {
      showOptions.value = !showOptions.value;
    }

    function changeOption(option: { name: string; value: unknown }) {
      selectedOption.value = option;
      context.emit(UPDATE_MODEL_VALUE, selectedOption.value.value);
      console.log(selectedOption.value);
      toggleShowOptions();
    }

    const displayOption = computed(() => {
      if (!selectedOption.value.value) return "Select Option";
      return selectedOption.value.name;
    });

    const filteredOptions = computed(() => {
      const expression = new RegExp(searchQuery.value, "i");
      const passedCondition = options.filter(option =>
        expression.test(option.name)
      );
      return passedCondition;
    });

    return {
      showOptions,
      toggleShowOptions,
      displayOption,
      changeOption,
      searchQuery,
      filteredOptions
    };
  }
});
</script>
