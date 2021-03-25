export default function useTicket() {
  function checkIn() {
    //Do something when check in
    console.log("Do checkin");
  }

  return {
    checkIn
  };
}
