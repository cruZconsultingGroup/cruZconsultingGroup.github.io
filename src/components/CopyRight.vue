<template>
  <div class="copyright-container">
    <a href="http://www.beian.gov.cn">Copyright © 2019 Bigdata-x.com. All rights reserved.  ICP证：浙ICP备16004637号-1</a>
  </div>
</template>
<script>
export default {
  name: 'CopyRight',
};
</script>
<style lang="scss">
.copyright-container {
  position: absolute;
  bottom: 10px;
  right: 3vw;
  width: 30vw;
  opacity: .3;
  a {
    color: #fff;
    text-decoration: none;
    a:link { color: white}
    a:active { color: white}
    a:hover { color: white}
    a:visited { color: white}
  }
}
@media (max-width: 1000px) {
  .copyright-container {
    position: static;
    transform: translateY(100%);
    width: 100vw;
    bottom: -3.5vw;
    font-size: 12px;
    background-color: #000;
  }
}
</style>
