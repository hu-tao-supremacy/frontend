export default function useCardBanner() {
  const tags = ["Engineering", "Food", "Education"];
  const eventDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.";
  const imgUrl = "https://picsum.photos/1000";
  const eventDate = "Sun, 14 Feb - 16 April";
  const eventTime = "10:00 - 18:00";
  const eventLocation = "Engineering Faculty, Chula";

  return {
    imgUrl,
    tags,
    eventDescription,
    eventDate,
    eventTime,
    eventLocation
  };
}
