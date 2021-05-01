<template>
  <div class="flex flex-col space-y-3">
    <h2 class="font-heading text-lg">Where is your event located?</h2>
    <BaseLabelAndTextInput
      v-model.trim="name"
      inputName="locationName"
      label="Location"
      :isRequired="true"
      class="w-80"
    />
    <BaseLabelAndTextInput
      v-model.trim="description"
      inputName="locationDescription"
      label="Additional information"
      placeholder="Enter additional information here"
      :isExpandableTextInput="true"
      class="w-80"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import { EventLocationForm } from "@/commons/Interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import useFormSpecifyLocation from "./useFormSpecifyLocation";

export default defineComponent({
  name: "FormSpecifyLocation",
  components: {
    BaseLabelAndTextInput
  },
  props: {
    modelValue: {
      type: Object as () => EventLocationForm,
      required: true
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const { modelValue } = toRefs(props);

    const { name, description } = useFormSpecifyLocation(modelValue, context);

    return { name, description };
  }
});
</script>
