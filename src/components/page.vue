<template>
  <div class="page">
    <div class="slidee">
      <div class="layourt">
        <div class="connection"></div>
        <div class="logo">
          <img src="../assets/LogoIpaa.png" alt />
        </div>
        <div class="text">
          <h2>IppaSolution</h2>
          <p>We build Netwok Solutions for all your logistic needs</p>
        </div>
        <div class="button">
          <!-- <button>LEARN MORE</button> -->
        </div>
      </div>
    </div>
    <div class="solution">
      <h1>Our Solutions</h1>
      <p class="p">We build Netwok Solutions for all your logistic needs</p>
    </div>

    <div class="ipaa">
      <div class="sans">
        <div class="form">
          <div class="one">
            <img src="../assets/Nio.jpg" alt />
            <p class="title">Logistic</p>
            <p
              class="color"
            >We are an Export/Import company, founded in 2016. Our founders have years of business experience in the global market, mainly in the US, Mexico, Portugal and Africa.</p>
          </div>

          <div class="one">
            <img src="../assets/Nio.jpg" alt />
            <p class="title">Financial Consulting</p>
            <p
              class="color"
            >We are an Export/Import company, founded in 2016. Our founders have years of business experience in the global market, mainly in the US, Mexico, Portugal and Africa.</p>
          </div>

          <div class="one">
            <img src="../assets/Nio.jpg" alt />
            <p class="title">Business</p>
            <p
              class="color"
            >We are an Export/Import company, founded in 2016. Our founders have years of business experience in the global market, mainly in the US, Mexico, Portugal and Africa.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 
    <div class="lastsection">
      <div class="section1">
        <div class="who-img">
          <img src="../assets/who-we-are.jpg" alt />
        </div>
        <div class="who-text">
          <h1>Who We Are</h1>
          <p>We are an Export/Import company, founded in 2016. Our founders have years of business experience in the global market, mainly in the US, Mexico, Portugal and Africa.</p>
          <p>We are a team capable to offer customer-specific needs on every coast of the Atlantic and Pacific Ocean. Thanks to our family ties to Africa and Europe, we are able to offer tailored solutions to our customers worldwide by finding the right products and services made in the US, Canada, Mexico, Europe and Africa.</p>
        </div>
      </div>
    </div>-->

    <!-- <div class="footer">
      <div class="footer-box">
        <div class="header">
          <h1>Free Estimation?</h1>
          <p>Lets Us discuss your project please fill up form below here</p>

          <h1>Home page</h1>

          <form>
            <input class="form" v-model="message" placeholder="Name" />
          </form>
          <p>
            <input class="form" v-model="message" placeholder="Email" />
          </p>
          <p>
            <input class="form" v-model="message" placeholder="Name" />
          </p>
          <p>
            <textarea class="boxmsg" v-model="message" placeholder="Message"></textarea>
          </p>
        </div>
        <div class="form-img">
          <img src="../assets/free-estimation.png" alt />
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
// import VueFeather from "vue-feather";
// import { mdbCarousel } from "mdbvue";

export default {
  name: "page",
  components: {
    // mdbCarousel,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.page {
  .slidee {
    background-image: url("../assets/value_bg.jpg");
    // width: 100%;
    // height: 100%;
    // min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    .layourt {
      height: 80vh;
      font-family: "Roboto',Helvetica,Arial,Lucida,sans-serif";

      text-align: center;
      .logo {
        img {
          width: 140px;
          margin-top: 120px;
        }
      }
      .text {
        color: #fff;
        h2 {
          font-size: 60px !important;

          margin-top: 200px;
          font-weight: 500;

          letter-spacing: 1.07px;
        }
        p {
          font-weight: 500;
          font-size: 60px !important;
          letter-spacing: 1.07px;
        }
      }
      .button button {
        // padding: 7px 30px 7px;
        // border: 2px solid #64f;
        // margin-top: 180px;
        // cursor: pointer;
        // font-size: 14px;
        // &:hover {
        //   background-color: #fff;
        // }
        // &:visited {
        //   color: brown;
        // }
      }
    }
  }
  .solution {
    font-family: "Roboto',Helvetica,Arial,Lucida,sans-serif";
    padding-top: 50px;
    line-height: 1.7em;
    text-align: center;
    h1:first-child {
      // font-family: "Roboto',Helvetica,Arial,Lucida,sans-serif";
      font-weight: 600;
      color: #00bebe;
      font-size: 36px;
    }
    .p {
      color: #666;
      font-size: 18px;
    }
  }

  .ipaa {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
    .sans {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 80px;
      .form {
        .one {
          p {
            font-size: 14px;
            line-height: 1.7em;
            font-weight: 500;
          }
          .title {
            font-weight: 700;
            font-size: 18px;
            margin-top: 20px !important;
            margin-bottom: 10px !important;
          }
          .color {
            color: #666;
          }
        }
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 40px;
        }
        margin-right: 5.5%;
      }
    }
  }
  .footer {
    font-family: "Roboto',Helvetica,Arial,Lucida,sans-serif";
    line-height: 1.7em;
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: auto;
    // background-color: blue;
    // text-align: center;
    .footer-box {
      display: flex;
      justify-content: space-between;
      .header {
        .form {
          margin-top: 20px;
          padding: 20px 180px 20px;
        }
      }
    }
  }
  // .lastsection {
  //   .section1 {
  //     // display: grid inline-block;
  //     display: grid;
  //     // grid-template-columns: 40px 50px auto 50px 40px;

  //     grid-template-columns: repeat(2, 1fr);
  //     // grid-gap: 90px;
  //     // grid-auto-rows: minmax(100px, auto);
  //     // background-color: #258cdb;
  //   }
  //   .who-img {
  //     // grid-column: 1 / 2;
  //     // grid-row: 1;
  //     background-color: #258cdb;
  //   }
  //   .who-text {
  //     // background-color: aquamarine;
  //     // margin-left: -320px;
  //     grid-column: 2 / 2;
  //     // grid-row: 1 / 2;
  //     // background-color: blue;
  //   }
  // }
}
</style>
