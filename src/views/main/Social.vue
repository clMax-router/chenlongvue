<template>
  <div class="main">
    <div class="c-container">
      <div class="banner"></div>
      <div class="hunting">
        <div class="container">
          <!-- 写查询条件 -->
          <div class="position">
            <p>职位类别:</p>
            <a href="#">所有类别</a>
            <a href="#">市场销售类</a>
            <a href="#">运营类</a>
            <a href="#">互联网类</a>
            <a href="#">职能类</a>
            <a href="#">研发类</a>
            <a href="#">服务类</a>
            <a href="#">信息安全类</a>
            <a href="#">设计类</a>
            <a href="#">财务类</a>
            <a href="#">地产类</a>
          </div>
          <div class="city">
            <p>工作城市:</p>
            <a href="#">所有城市</a>
            <a href="#">北京市</a>
            <a href="#">杭州市</a>
            <a href="#">南京市</a>
            <a href="#">上海市</a>
            <a href="#">深圳市</a>
            <a href="#">西安市</a>
            <a href="#">香港</a>
          </div>
          <hr style="background-color:rgb(235,235,235);height:.5px;border:none"><!-- 文本线 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "social"
};
</script>

<style lang="scss" scoped>
.main {
  background-color: rgb(247, 248, 249);
  .c-container {
    .banner {
      width: 100%;
      height: 300px;
      background-image: url("https://we2.djicdn.com/hire/public/img/search-banner.c9d5236.jpg");
      background-size: cover;
    }
    .hunting {
      /* 职位查找 */
      background-color: #fff;
      width: 1300;
      height: 100px;
      margin-top: 26px;
      border: 1px red solid;
      padding: 40px 48px;
      .position,
      .city {
        /* 选择条件 */
        width: 100%;
        height: 36px;
        display: flex;
        font-size: 13px;
        align-items: center;
        p,
        a {
          margin-right: 24px;
        }
        a {
          color: #7f8382;
        }
        a:hover {
          color: #3b3e40;
        }
      }
    }
  }
}
</style>