<template>
  <header>
    <div class="contact">
      <span>Machine Learning</span>
    </div>
  </header>
</template>

<script>
// import page from "../components/page";
export default {
  name: "Navbar",
  components: {
    // page,
  },
  data() {
    return {
      onOff: false,
      show: false,
    };
  },
};
</script>

<style scope lang="scss">
@import url("https:fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  font-family: "Roboto',Helvetica,Arial,Lucida,sans-serif";
  border-bottom: 1px solid #eee;
  .img img {
    width: 110px;
  }
  .router {
    .sidebar {
      img {
        width: 40px;
      }
    }
    a {
      text-decoration: none;
      margin: 20px;
      &:hover {
        border-bottom: 3px solid #004b64;
      }
    }
    // a {
    //   border-bottom: 2px;
    // }
    &:last-child {
      color: blue;
    }
    span {
      // margin: 20px;
      color: #333;
      font-size: 20px;
    }
    .child {
      color: #00a0b4;
    }
  }
}

.slide {
  text-align: center;
  // margin: 20px 0 20px;
  background-color: #004b64;
  padding: 30px 40px 30px;
  border-bottom: 1px solid #666;
  color: #fff;
  // position: fixed;
  // top: 90px;
  // right: 0;
  // left: 0;
  a {
    text-decoration: none;
    margin: 20px;
    &:hover {
      border-bottom: 3px solid #ddd;
    }
  }
  &:last-child {
    color: blue;
  }
  span {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
  .child {
    color: #000;
  }
}
.layourt {
  font-family: "Roboto',Helvetica,Arial,Lucida,sans-serif";

  text-align: center;
  .logo {
    img {
      width: 140px;
      margin-top: 140px;
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
    padding: 7px 30px 7px;
    border: 2px solid #333;
    margin-top: 180px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background-color: #fff;
    }
    &:visited {
      color: brown;
    }
  }
}
</style>
