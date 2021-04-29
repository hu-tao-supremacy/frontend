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
      class="w-80"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "vue";
import BaseLabelAndTextInput from "@/commons/UI/BaseLabelAndTextInput.vue";
import { EventLocationForm } from "@/commons/Interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

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
    const name = ref(props.modelValue.name);
    const description = ref(props.modelValue.description);

    const isValidLocation = computed(() => {
      return name.value !== "";
    });

    const eventLocation: EventLocationForm = reactive({
      name: name,
      description: description,
      googleMapUrl: props.modelValue.googleMapUrl,
      isOnline: false,
      isValid: isValidLocation
    });

    watch(eventLocation, () => {
      context.emit(UPDATE_MODEL_VALUE, eventLocation);
    });

    return { name, description };
  }
});
</script>
