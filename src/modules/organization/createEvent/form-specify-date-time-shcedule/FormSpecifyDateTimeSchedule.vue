<template>
  <div class="flex items-center">
    <BaseTextInput
      :modelValue="day"
      :readonly="true"
      class="w-25 h-3.75 text-primary mr-3"
    />
    <BaseTextInput
      :modelValue="startTime"
      :readonly="true"
      class="w-9 h-3.75 text-primary mr-1"
    />
    <p class="mr-1">~</p>
    <BaseTextInput
      :modelValue="finishTime"
      :readonly="true"
      class="w-9 h-3.75 text-primary mr-1"
    />
    <button
      @click="deleteDuration"
      type="button"
      class="text-gray-5 hover:text-gray-4 focus:text-gray-6 focus:outline-none"
    >
      <base-icon :width="20" :height="20"><XCircleIcon /></base-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseTextInput from "@/commons/UI/BaseTextInput.vue";
import XCircleIcon from "@/assets/XCircle.vue";
import { SetEventDurationsDurationInput } from "@/apollo/types";
import { REMOVE } from "@/commons/constant";
import { format } from "date-fns";

export default defineComponent({
  name: "FormSpecifyDateTimeSchedule",
  components: {
    BaseTextInput,
    XCircleIcon
  },
  props: {
    duration: {
      type: Object as () => SetEventDurationsDurationInput,
      required: true
    }
  },
  emits: [REMOVE],
  setup(props, context) {
    const startDateTime = new Date(props.duration.start);
    const finishDateTime = new Date(props.duration.finish);
    const day = format(startDateTime, "d MMMM yyyy");
    const startTime = format(startDateTime, "H:mm");
    const finishTime = format(finishDateTime, "H:mm");

    function deleteDuration() {
      context.emit(REMOVE);
    }

    return { day, startTime, finishTime, deleteDuration };
  }
});
</script>
