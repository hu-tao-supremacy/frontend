import { computed, reactive, ref, watch, Ref, SetupContext } from "vue";
import { EventLocationForm } from "@/commons/Interfaces";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";

export default function useFormSpecifyLocation(
  initialEventLocation: Ref<EventLocationForm>,
  context: SetupContext<"update:modelValue"[]>
) {
  const name = ref(initialEventLocation.value.name);
  const description = ref(initialEventLocation.value.description);

  const isValidLocation = computed(() => {
    return name.value !== "";
  });

  const eventLocation: EventLocationForm = reactive({
    name: name,
    description: description,
    googleMapUrl: initialEventLocation.value.googleMapUrl,
    isOnline: false,
    isValid: isValidLocation
  });

  watch(
    () => eventLocation,
    () => {
      context.emit(UPDATE_MODEL_VALUE, eventLocation);
    },
    { deep: true }
  );

  return { name, description };
}
