<template>
  <div class="main">
    <div class="c-container">
      <div class="container">
        <div class="topInfo">
          <div class="h2">汽车电子硬件工程师（毫米波雷达）</div>
          <div class="generalInfo">
            <span>职位类别：</span>
            <span>工作城市：</span>
            <span>发布时间：</span>
          </div>
        </div>
        <div class="centerInfo">
          <div class="centerInfoTop">
            <p>工作职责</p>
            <p>1. 负责通过邮件为DJI全球的农业无人机客户提供产品技术咨询服务；</p>
            <p>2. 负责收集和分析用户声音，推动优化全球各区域现有产品政策及服务流程；</p>
            <p>3. 负责与用户建立良好沟通关系，提升用户满意度；</p>
            <p>4. 负责与其他的团队成员合作，共同完成部门目标。</p>
          </div>
          <div class="centerInfoBottom">
            <p>任职要求</p>
            <p>1. 本科学历，英语能作为工作语言（听书读写能力优秀），有无人机、农业机械、家电行业服务经验优先；</p>
            <p>2. 具备良好的服务意识，有意愿为用户提供优质的服务解决方案；</p>
            <p>3. 具备良好的逻辑能力和沟通技巧，可以将复杂问题进行简单化表达；</p>
            <p>4. 具备技术故障诊断技能，热衷学习和乐于迎接新的挑战。</p>
          </div>
        </div>
        <div class="btn">
          <div class="btnNoMove">
            <el-button class="collectionBtn">收藏职位</el-button>
          </div>
          <div class="btnNoMove">
            <el-button class="applyBtn">立刻申请</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  background-color: rgb(247, 248, 249);
  .c-container {
    padding-top: 100px;
    min-height: 100%;
    padding-bottom: 26px;
    .container {
      padding-right: 518px;
      padding-top: 20px;
      padding-left: 56px;
      padding-bottom: 60px;
      background-color: #fff;
      .topInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px #ebebeb solid;
        color: #707473;
        .h2,
        .generalInfo {
          display: flex;
          align-items: center;
          height: 48px;
        }
        .h2 {
          font-size: 22px;
        }
        .generalInfo {
          font-size: 13px;
        }
      }
      .centerInfo {
        margin-top: 30px;
        .centerInfoTop,
        .centerInfoBottom {
          p {
            line-height: 2;
            font-size: 13px;
            color: #707473;
          }
        }
        .centerInfoBottom {
          margin-top: 60px;
        }
      }
      .btn {
        margin-top: 48px;
        .btnNoMove {
          width: 110px;
        }
        display: flex;
        .collectionBtn:hover {
          border: 0.5px #9fa3a6 solid;
          color: #3b3e40;
          background-color: #fff;
        }
        .applyBtn {
          background-color: #3b3e40;
          color: #fff;
        }
        .applyBtn:hover {
          background-color: rgb(83, 87, 89);
        }
      }
    }
  }
}
</style>