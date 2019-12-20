<template>
  <!-- 这是尾部 -->
  <div class="footer" id="footer">
    <div class="c-container">
      <div class="left">
        <p href>Copyright © 2019 CL 陈龙创新 版权所有</p>
        <a href>cl官网</a> |
        <a href>cl赞助</a> |
        <a href>淘宝阿里</a> |
        <a href>腾讯云</a> |
        <a href>腾讯公众号</a>
      </div>
      <div class="right">
        <a href>简体中文</a> |
        <a href>English</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  height: 60px;
  background-color: #fff;
  .c-container {
    height: 100%;
    display: flex;
    /* 设置flex排列方式 */
    justify-content: space-between; /* 两端对齐中间平分 */
    /*设置垂直方向居中显示*/
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 34px;
        height: 34px;
        margin-right: 56px;
        cursor: pointer;
      }
    }
  }

  a {
    color: #232526;
    font-size: 14px;
    margin-right: 30px;
  }

  a:hover {
    color: #44a8f2;
  }

  a:last-child {
    margin-right: 0;
  }
}

#footer {
  height: 50px;
  a {
    font-size: 12px;
    margin-right: 4px;
    margin-left: 4px;
    color: #707473;
  }
  p {
    font-size: 12px;
    margin-right: 26px;
  }
}
</style>