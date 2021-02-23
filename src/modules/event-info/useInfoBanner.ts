export default function useInfoBanner() {
  const eventBackgroundImg = "https://picsum.photos/1000";
  const eventProfileImg = "https://picsum.photos/500";
  const eventTitle = "Information and Communication Event (ICE)";
  const eventTags = ["Engineering", "Food", "Education"];
  const eventDate = "Sun, 14 Feb - 16 April";
  const eventTime = "10:00 -18:00";
  const eventLocation = "Engineering Faculty, Chula";

  return {
    eventBackgroundImg,
    eventProfileImg,
    eventTitle,
    eventTags,
    eventDate,
    eventTime,
    eventLocation
  };
}
