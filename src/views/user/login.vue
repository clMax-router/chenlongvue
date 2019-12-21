<template>
  <div id="login">
    <el-form label-width="80px">
      <el-form-item>
        <h2>登录</h2>
      </el-form-item>
      <el-form-item label="用户名:">
        <el-input type="text" v-model="username" placeholder="请输入用户名/手机号" />
      </el-form-item>
      <el-form-item label="密码:">
        <el-input type="password" v-model="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-Button style="width:100%;" @click="login" type="primary">登录</el-Button>
      </el-form-item>
      <el-form-item>
        <div style="text-align:center">
          <el-button @click="goReg" type="text">没有账号?去注册</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      // 先判断文本框是否有内容
      if (!this.username) {
        // el ui 提供友好提示
        this.$message.error({
          message: "用户名不能为空!",
          duration: 1000,
          center: "center"
        });
        return;
      }
      if (!this.password) {
        this.$message.error({
          message: "密码不能为空!",
          duration: 1000,
          center: "center"
        });
        return;
      }

      //  console.log(this.$api)
      // 发送get请求
      // 配置axios 默认请求前缀
        this.$api
          .post("users/login", {
            userName: this.username,
            password: this.password
          })
          .then(res => {
            //获取服务器返回的数据
            // console.log(res.data)
            if (res.data.code === 0) {
              this.$notify({
                title: "登录成功",
                message: "正在进入主页",
                type: "success",
                duration: 1000,
                onClose: () => {
                  // 登录成功跳转首页
                  this.$router.push("/");
                }
              });
            } else {
              this.$message.error({
                message: res.data.msg,
                duration: 1000,
                center: "center"
              });
            }
          });
    },
    goReg() {
      this.$router.push("reg"); //两种参数 路径 || {path : 路径, name : 路由的名字 , params : 看不见的参数}
    }
  }
};
</script>

<style scoped lang="scss">
/* 使用sass css预处理器 因为sass改名了 scss*/
// 使用scss的高级css语法

#login {
  padding: 60px;
  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }
}
</style>