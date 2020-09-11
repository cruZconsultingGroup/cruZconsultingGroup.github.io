<template>
  <div class="template">
    <div class="firsticon">
      <p>Contacts Us</p>
    </div>

    <div class="container">
      <div class="side">
        <router-link to="/">
          <span>Home</span>
        </router-link>/
        <span class="bold">Contacts Us</span>
      </div>
      <div class="flex">
        <div class="menu-container">
          <h2>Free Estimation?</h2>
          <p>Feel free to contact us, we'll be happy to assist you</p>
        </div>
        <div class="below">
          <h2>Our Office</h2>
          <img src alt />
          <span>Canada Address</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
};
</script>

<style scoped lang="scss">
.template {
  line-height: 1.7em;

  .firsticon {
    background-image: url("../assets/userheader.png");
    background-size: 100%;
    background-position: center;
    height: 20vh;
    margin-top: 20px;
    p {
      text-align: center;
      color: #ffffff !important;
      font-weight: 900;
      font-size: 60px;
      padding: 76px 0 0;
      font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
    }
  }
  .container {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
    .side {
      margin-top: 28px;
      a {
        text-decoration: none;
      }
      span {
        margin: 8px;
        font-weight: 600;
      }
    }

    .flex {
      display: flex;
      display: none;
      justify-content: space-around;
    }
  }
}
</style>
