<template>
  <a-row id="card-banner" type="flex" justify="center">
    <a-col :style="eventImgStyle" class="event-img" :span="16"></a-col>
    <a-col class="event-detail-container" :span="8">
      <h3 class="event-title text-4xl">Event Title</h3>
      <div>
        <a-tag color="purple">Tech</a-tag>
        <a-tag color="red">Science</a-tag>
        <a-tag color="green">Math</a-tag>
      </div>
      <p class="event-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
        aliquam hendrerit. Sed orci ipsum, ornare at diam nec, tempus ornare
        leo.
      </p>
      <div>
        <calendar-icon size="14px" class="icon"></calendar-icon>
        Sun, 14 Feb - 16 April
      </div>
      <div>
        <clock-icon size="14px" class="icon"></clock-icon>
        10:00 - 18:00
      </div>
      <div>
        <map-pin-icon size="14px" class="icon"></map-pin-icon>
        Engineering Faculty, Chula
      </div>
      <a-button type="primary" class="event-button">Get Ticket</a-button>
    </a-col>
  </a-row>
</template>
<script>
import { ref } from 'vue';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'vue-feather-icons';
import featCompt from '../../../commons/utils/feathercompt';

featCompt(CalendarIcon);
featCompt(ClockIcon);
featCompt(MapPinIcon);

export default {
  components: {
    CalendarIcon,
    ClockIcon,
    MapPinIcon,
  },
  setup() {
    const eventImg = ref('https://picsum.photos/800');
    const eventImgStyle = {
      background: `url(${eventImg.value})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    const iconColor = '#FF855F';

    return {
      eventImg,
      eventImgStyle,
      iconColor,
    };
  },
};
</script>

<style scoped>
#card-banner {
  width: 896px;
  height: 320px;
  border-radius: 20px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
}

.event-img {
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.event-detail-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px;
  font-family: Inter;
}

.event-title {
  color: #161d61;
  font-family: Manrope;
  font-size: 24px;
}

.event-description {
  font-size: 12px;
  color: #090c2f;
}

.icon {
  margin-right: 12px;
  color: #ff855f;
}

.event-button {
  width: 80%;
  align-self: center;
}
</style>
