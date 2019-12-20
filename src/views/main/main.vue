<template>
  <!-- 这是内容 -->
  <div class="main">
    <div class="title">
      <p>未 来 无 所 不 能</p>
      <p>THE FUTURE OF POSSIBLE</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  margin-top: -50px;
  height: 100%;
  background-image: url(https://we2.djicdn.com/hire/public/img/home-page-banner-2.d8f1ba7.png);
  background-size: cover;
  /* 设置图片偏移 保证页面改变，图片始终居中*/
  background-position: 50%;
  padding-top: 60px;
  padding-bottom: 50px;

  box-sizing: border-box;
  .title {
    text-align: center;
    padding-top: 200px;
    color: #fff;
    font-size: 34px;
    line-height: 1.5;
    p:first-child {
      //设置字体间隔
      letter-spacing: 2px;
    }
    p:last-child {
      font-size: 26px;
    }
  }
}
</style>