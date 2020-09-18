<template>
  <div id="app">
    <div id="nav"></div>
    <div class="box">
      <div class="img">
        <router-link to="/">
          <img src="./assets/LogoIpaa.png" alt />
        </router-link>
      </div>
      <div class="router">
        <div class="sidebar" @click="onOff = !onOff">
          <img src="./assets/sideicon.png" alt />
        </div>
      </div>
    </div>

    <div class="slide" v-show="onOff">
      <router-link to="/">
        <span>Home</span>
      </router-link>|
      <router-link to="Services">
        <span>Services and Products</span>
      </router-link>|
      <router-link to="about">
        <span>About Us</span>
      </router-link>
|
      <router-link to="/Contacts">
        <span class="child">Contact</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import Navbar from "./components/Navbar";

export default {
  name: "index",
  components: {
    // Navbar,
  },
  data() {
    return {
      onOff: false,
      show: true,
    };
  },
};
</script>

<style lang="scss">
@import url("https:fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Roboto',Helvetica,Arial,Lucida,sans-serif";

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;
  // * {
  //   margin: 0 !important;
  // }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
* {
  margin: 0;
  padding: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

body {
  margin: 0;
}

html,
body {
  height: 100%;
  margin: 0 !important;
}

body::-webkit-scrollbar {
  display: none;
}
</style>
