<template>
  <div class="coco">
    <Services></Services>
  </div>
</template>

<script>
import Services from "../components/Services";
export default {
  name: "index",
  components: { Services },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
.coco {
  background-image: url("../assets/Backg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100%;
  min-height: 100vh;
}
</style>