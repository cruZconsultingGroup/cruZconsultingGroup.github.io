<template>
  <header>
    <div class="navbar">
      <div class="box">
        <div class="img">
          <img src="../assets/LogoIpaa.png" alt />
        </div>
        <div class="router">
          <router-link to="/">
            <span>Home</span>
          </router-link>
          <router-link to="Services">
            <span>Services</span>
          </router-link>
          <router-link to="about">
            <span>About IpaaSolution</span>
          </router-link>
        </div>
      </div>

      <div class="layourt">
        <div class="logo">
          <img src="../assets/LogoIpaa.png" alt />
        </div>
        <div class="text">
          <h2>IppaSolution</h2>
          <p>We are here to turn your Vision into reality</p>
        </div>
        <div class="button">
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
    <!-- <Services></Services> -->
  </header>
</template>

<script>
// import Services from "../components/Services";
export default {
  name: "Navbar",
  //   components: {
  //     Services,
  //   },
};
</script>

<style scope lang="scss">
.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  font-family: "BlueSkyStandard", "Microsoft Yahei", Palatino, Arial, sans-serif;
  .img img {
    width: 200px;
  }
  .router {
    a {
      text-decoration: none;
      &:hover {
        border-bottom: 5px solid #004b64;
      }
    }
    span {
      margin: 20px;
      color: #333;
      font-size: 20px;
    }
  }
}
.layourt {
  text-align: center;
  .logo {
    img {
      width: 140px;
      margin-top: 150px;
    }
  }
  .text {
    h2 {
      font-size: 3rem;
      margin-top: 80px;
      letter-spacing: 1.07px;
    }
    p {
      font-size: 3rem;
      font-weight: 400;
      letter-spacing: 1.07px;
    }
  }
  .button button {
    padding: 10px 20px 10px;
    border: 2px solid #333;
    margin-top: 180px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background-color: #fff;
    }
  }
}
</style>