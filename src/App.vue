<template>
  <div id="app">

    <!-- router渲染的占位符 -->
    <!-- 整页路由替换 直接在app.vue 中直接使用 router-view 不需要使用其他元素-->
    <router-view/>
  </div>
</template>

<style lang="scss">
/* 初始化css */
/* 在style标签中引入css */
@import url('../public/reset.css');
html,body,#app{
  /* 设置默认最小高度 */
    height: 100%;
}
/* 统一字体样式 */
#app{
  font-family:  Open Sans,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  background-color: #fff; 
}
/* 定义一个布局容器 */
.c-container{
  width: 1180px;
  margin: 0 auto;
  display: block;
}
/* 去除所有的a标签的样式 */
a{
  text-decoration: none;
  color: #232323;
}
</style>
