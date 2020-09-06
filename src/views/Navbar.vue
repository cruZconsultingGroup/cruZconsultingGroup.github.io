<template>
  <div class="unix">
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "index",
  components: { Navbar },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
.unix {
  //   background-color: aqua;
  background-image: url("../assets/layourt.png");
  background-size: cover;
  background-repeat: no-repeat;
  //   min-height: 100%;
  min-height: 100vh;
}
</style>