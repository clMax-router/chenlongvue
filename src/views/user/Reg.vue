<template>
  <div id="reg">
    <el-form label-width="80px">
      <el-form-item>
        <h2>注册</h2>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input type="text" v-model="username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-Button style="width:100%;" @click="reg" type="primary">立即注册</el-Button>
      </el-form-item>
      <el-form-item>
        <div style="text-align:center">
          <el-button type="text" @click="goLogin">返回登录</el-button>
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
    reg() {
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

      // 发送post请求
      // 配置axios 默认请求前缀 注册
      this.$api
        .post("users/reg", {
          userName: this.username,
          password: this.password
        })
        .then(res => {
          //获取服务器返回的数据
          // console.log(res.data)
          if (res.data.code === 0) {
            this.$message.success({
              message: "注册成功",
              duration: 500,
              onClose: () => {
                // 登录成功跳转首页
                this.$router.push("/login");
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
    goLogin() {
      this.$router.push("login");
    }
  }
};
</script>

<style scoped lang="scss">
/* 使用sass css预处理器 因为sass改名了 scss*/
// 使用scss的高级css语法

#reg {
  padding: 60px;
  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }
}
</style>