<template>
  <div class="new">
    <about></about>
  </div>
</template>

<script>
import about from "../components/about";
export default {
  name: "index",
  components: { about },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
// .coco {
//   background-image: url("../assets/Backg.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   min-height: 100%;
//   min-height: 100vh;
// }
</style>