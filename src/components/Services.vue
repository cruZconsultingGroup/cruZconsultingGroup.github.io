<template>
  <div class="main">
    <div class="title">
      <h4>WHY IPAASOLUTION</h4>
      <p>The fast, efficient,flexible, low-cost yet high quality launchpad</p>
    </div>

    <div class="section">
      <div class="first">
        <div class="text">
          <span>UNCONGESTED NETWORK</span>
          <p>1 SECOND TRANSITION TIMES</p>
        </div>
        <div class="img01">
          <img src="../assets/display1.png" alt />
        </div>
      </div>

      <div class="second">
        <div class="text2">
          <span>LOW TRANSITION FEES</span>
          <p>LEVERARING ONT'S 1 USD</p>
          <p>TRANSITION FEES</p>
        </div>
        <div class="img01">
          <img src="../assets/display2.png" alt />
        </div>
      </div>
    </div>

    <div class="section">
      <div class="first">
        <div class="text">
          <span>UNCONGESTED NETWORK</span>
          <p>1 SECOND TRANSITION TIMES</p>
        </div>
        <div class="img01">
          <img src="../assets/display3.png" alt />
        </div>
      </div>

      <div class="second">
        <div class="text2">
          <span>LOW TRANSITION FEES</span>
          <p>LEVERARING ONT'S 1 USD</p>
          <p>TRANSITION FEES</p>
        </div>
        <div class="img01">
          <img src="../assets/display4.png" alt />
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.main {
  font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .title {
    text-align: center;
    padding-top: 40px;
    letter-spacing: 1.07px;
    h4 {
      font-size: 2rem;
      color: #ddd;
      font-weight: 700;
    }
    p {
      font-size: 25px;
    }
  }
  .section {
    display: flex;
    justify-content: space-between;
    margin-top: 140px;
    margin-left: auto;
    margin-right: auto;
    width: 990px;
    img {
      width: 85px;
      margin-left: 50px;
    }
    span {
      color: #00a0b4;
      //   margin-top: 10px;
    }
    .first {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .second {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
