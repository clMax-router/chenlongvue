<template>
  <!-- 这是导航 -->
  <div class="nav">
    <!-- 使用布局容器 -->
    <div class="c-container">
      <!--  将c-container 设置为 flex容器  设置两个div 左右两端对齐-->
      <div class="left">
        <router-link tag="span" to="/">
          <img src="@/assets/logo.png"/>
          </router-link>
        <router-link to="social" href>校园招聘</router-link>
        <a href>社会招聘</a>
        <a href>关于大疆</a>
      </div>
      <div class="right">
        <router-link to="/login" v-if="!userName">登录</router-link>
        <!-- <a @click.prevent href>欢迎您 {{userName}}</a> -->
        <el-dropdown v-else>
          <span style="cursor: pointer;">欢迎您 {{userName}}</span>
          <el-dropdown-menu slor="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>个人空间</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  // 生命周期函数
  beforeMount() {
    this.fetchUserInfo();
  },

  methods: {
    //获取用户信息
    // 在前后端分离的过程中 由于浏览器的限制 每次传递的session值都是不一样的
    // 于是后端无法分辨
    fetchUserInfo() {
      this.$api.get("users/userInfo").then(res => {
        let data = res.data;
        //判断状态码
        if (res.data.code === 0) {
          this.userInfo = data.data;
        } else {
          this.$message.error({
            message: res.data.msg,
            duration: 1000,
            center: "center"
          });
        }
      });
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    userName() {
      // console.log(!Object.keys(this.userInfo).length);
      if (Object.keys(this.userInfo).length) {
        return this.userInfo.username;
      }
      return "";
    }
    
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 60px;
  background-color: #fff;
  z-index: 999;
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
</style>