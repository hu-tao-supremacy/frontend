<template>
  <v-date-picker v-model="date" :min-date="minDate" color="orange"
    ><template v-slot="{ inputValue, togglePopover }">
      <div class="relative w-full h-full">
        <button
          type="button"
          @click="togglePopover"
          :disabled="disabled"
          class="text-input pl-1.5 pr-4 w-full h-full border rounded-lg text-left focus:border-primary focus:outline-none"
          :class="{
            'border-gray-4': !isError,
            'error-shadow border-red-5': isError
          }"
        >
          {{ inputValue }}
          <base-icon
            :width="14"
            :height="14"
            class="absolute right-1 top-1/2 -translate-y-1/2 transform text-gray-4"
            ><CalendarIcon
          /></base-icon>
        </button>
      </div>
    </template>
  </v-date-picker>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import CalendarIcon from "@/assets/Calendar.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default defineComponent({
  components: { CalendarIcon },
  name: "BaseDatePicker",
  props: {
    modelValue: {
      type: Date,
      default: new Date()
    },
    isError: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    minDate: {
      type: Date,
      default: new Date()
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const date = ref(props.modelValue);

    watch(date, () => {
      console.log(date.value);
      context.emit(UPDATE_MODEL_VALUE, date.value);
    });

    return { date };
  }
});
</script>

<style scoped>
.text-input:focus {
  box-shadow: 0px 0px 0px 2px rgba(255, 133, 95, 0.2);
}

.error-shadow {
  box-shadow: 0px 0px 0px 2px rgba(255, 163, 158, 0.5);
}
</style>
