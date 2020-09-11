<template>
  <div class="about">
    <div class="firsticon">
      <p>About Us</p>
    </div>

    <div class="display">
      <div class="header">
        <router-link to="/"><span>Home</span></router-link
        >/
        <span class="bold">About Us</span>
        <div class="content">
          <div class="text">
            <p>
              Amer is a manufacturer and global distributor of networking,
              storage and security products.
            </p>
            <p>
              Since our start in 1997 in the education enterprise sector, we
              have earned our reputation as a provider of reliable hardware
              backed by the most comprehensive support and customer-appropriate
              product warranties on the market.
            </p>
            <p>
              Through our growing reseller network, we are taking this success
              into the SOHO/SME market with a growing line of innovative,
              value-laden products that enhance productivity and improve
              efficiency – anywhere and everywhere that people connect.
            </p>
          </div>
          <div class="image">
            <img src="../assets/value_1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      // text: "Aurio",
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
.about {
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
      padding: 106px 0 0;
      font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
    }
  }
  .display {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
    .header {
      margin-top: 28px;
      float: right;
      a {
        text-decoration: none;
      }
      span {
        margin: 8px;
        font-weight: 600;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      // width: 47.25%;

      .text {
        overflow: hidden;
        font-weight: 500;
        margin-right: 5.5%;
        color: #666;
        font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
        p {
          padding-bottom: 1em;
          font-size: 14px;
        }
      }
      .image {
        // width: 47.25%;

        float: left;
        position: relative;
        z-index: 9;
        background-position: center;
        background-size: cover;
        img {
          width: 480px;

          // margin-right: 5.5%;
          // max-width: 100%;
          // height: auto;
        }
      }
    }
    // .mission {
    //   display: flex;
    //   justify-content: space-between;
    // }
  }
}
</style>
