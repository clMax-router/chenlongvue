<template>
  <div class="login">
    <!-- 使用 el 的布局容器-->
    <div class="main">
      <el-row class="row">
        <!-- 在el中 栅格为大小为 24-->
        <el-col :span="12" class="left">
          <div>
            <el-carousel height="600px">
              <el-carousel-item v-for="item in 3" :key="item">
                <div :class="['carousel-img','item'+item]">
                  <div>
                    <p>akun{{item}}</p>
                    <p>akun@</p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
            <img src="../../assets/logo.png" />
          </div>
        </el-col>

        <el-col :span="12" class="right">
          <div>
            <el-form label-width="80px">
            <el-form-item>
                <h2>登录</h2>
              </el-form-item>
              <el-form-item label="用户名">
                <el-input type="text" v-model="username" placeholder="请输入用户名"/>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="password"  placeholder="请输入密码"/>
              </el-form-item>
              <el-form-item>
              <el-Button style="width:100%;" @click="login" type="primary">登录</el-Button>
              </el-form-item>
              <el-form-item>
                <div style="text-align:center">
                    <el-button type="text" >没有账号?去注册</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <p>发动反击哦怕</p>
      <p>放大发你哦哈迪哦</p>
      <p>发大水覅大家佛帕德斯</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
      return{
          username: '',
          password: ''
      }
  },
  methods: {
      login(){
          this.$router.push('/')
      }
  }
};
</script>

<style scoped lang="scss">
/* 使用sass css预处理器 因为sass改名了 scss*/
// 使用scss的高级css语法
.login {
  background: rgb(237, 237, 237);
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  border-radius: 4px;
  //设置父元素为 flex 布局

  .main {
    width: 1100px;
    margin: 0 auto;
    //设置最小高度
    height: 600px;
    border: 1px #ccc solid;
    //设置阴影 第一个是 x轴 第二个是 y轴 第三个 半径 第四个是颜色
    box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
    box-sizing: border-box; /* 忽略边框 */
    .row {
      height: 100%;
      .left {
        height: 100%;
        & > div {
          position: relative;
          img {
            position: absolute;
            width: 50px;
            top: 40px;
            left: 40px;
            z-index: 999;
          }
        }
        .carousel-img {
          height: 100%;
          background-size: 100% 100%;
          background-size: cover; /* 设置背景图片居中显示*/
          &.item1 {
            /* .carousel-img.item1 */
            background-image: url("https://account.djicdn.com/pc/static/img/1.e61fc72.jpg");
          }
          &.item2 {
            background-image: url("https://account.djicdn.com/pc/static/img/2.643c4c1.jpg");
          }
          &.item3 {
            background-image: url("https://account.djicdn.com/pc/static/img/3.61f61fa.jpg");
          }

          div {
            position: absolute;
            right: 40px;
            bottom: 100px;
            p {
              color: #fff;
              font-size: 28px;
              font-weight: 600;
              line-height: 1.3;
              text-align: right;
            }
            p:last-child {
              font-size: 14px;
            }
          }
        }
      }
      .right {
        background-color: #fff;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &>div{
            padding: 60px;
            h2{
                text-align: center;
                font-size: 30px;
                font-weight: bold;
                margin-bottom: 30px;
            }
        }
      }
    }
  }
  .footer {
    color: #979797;
    font-size: 12px;
    /* 设置字体居中 */
    text-align: center;
    /* 设置字体行高 */
    line-height: 2;
    margin-top: 20px;
  }
}
</style>