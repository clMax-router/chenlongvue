<template>
  <div class="home">
    <nav class="nav">
      <div class="c-container">
        <div class>
          <img src="@/assets/logo.png" />
          <a href>社会招聘</a>
          <a href>校园招聘</a>
          <a href>关于大疆</a>
        </div>
        <div>
          <a href>登录</a>
        </div>
      </div>
    </nav>

    <div class="main">
      <div>
        <p>未来无所不能</p>
        <p>THE FUTURE OF POSSIBLE</p>
      </div>
    </div>
    <footer>
      <div class="c-container">
        <p href>Copyright © 2019 CL 陈龙创新 版权所有</p>
        <a href>cl官网</a>
        <a href>cl赞助</a>
        <a href>淘宝阿里</a>
        <a href>腾讯云</a>
        <a href>腾讯公众号</a>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .nav {
    height: 70px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .c-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    div {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        margin-right: 34px;
        cursor: pointer;
      }
      a {
        color: #3b3e40;
        font-size: 14px;
        line-height: 70px;
        margin-right: 34px;
      }
      a:hover {
        color: #44a8f2;
      }
    }
  }
  .main {
    height: 100%;
    background-image: url(https://we2.djicdn.com/hire/public/img/home-page-banner-2.d8f1ba7.png);
    background-size: cover;
    background-position: 50%;
    text-align: center;
    font-size: 35px;
    color: #fff;
    line-height: 1.5;
    div {
      padding: 200px;
    }
  }
  footer {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    height: 60px;
    .c-container {
      height: 100%;
      display: flex;
      align-items: center;
      color: #979797;
      font-size: 14px;
      padding-left: 400px;
    }
    p {
      margin-right: 34px;
    }
    a {
      color: #979797;
      margin-right: 4px;
    }
  }
}
</style>
