<template>
  <!-- 每个组将有且只有一个根元素-->

  <div class="home">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>



<script>
import Footer from './main/Footer'
import Header from './main/Header'

export default {
  name: "home",
  // 局部组件引入
  components: {
    Footer,Header
  },
  
};
</script>

<style lang="scss" scoped>
/* 设置home容器占满全屏 */
.home {
  height: 100%;
  background-color: #fff;
  .nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  .nav,
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
  
  // #footer {
  //   height: 50px;
  //   margin-top: -50px;
  //   a {
  //     font-size: 12px;
  //     margin-right: 4px;
  //     margin-left: 4px;
  //     color: #707473;
  //   }
  //   p {
  //     font-size: 12px;
  //     margin-right: 26px;
  //   }
  // }
}
</style>