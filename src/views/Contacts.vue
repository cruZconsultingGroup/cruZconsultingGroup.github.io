<template>
  <div class="new">
    <Contacts></Contacts>
  </div>
</template>

<script>
import Contacts from "../components/Contacts";
export default {
  name: "index",
  components: { Contacts },
  data: function() {
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
