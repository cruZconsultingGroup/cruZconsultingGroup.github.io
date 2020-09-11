<template>
  <div class="history">
    <time-line :value="history" ref="timeLine"></time-line>
  </div>
</template>
<script>
import TimeLine from "./TimeLine.vue";
import history from "../api/history";

export default {
  name: "History",
  data() {
    return {
      history,
    };
  },
  components: {
    TimeLine,
  },
};
</script>
<style lang="scss">
.history {
  display: flex;
  align-items: center;
  min-height: 100vh;
  // height: 80vh;
  background-color: black;
}
</style>
