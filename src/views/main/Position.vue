<template>
  <div class="main">
    <div class="c-container">
      <div class="container">
        <div class="topInfo">
          <div class="h2">{{info.job_name}}</div>
          <div class="generalInfo">
            <span>职位类别：{{ info.job_type}}</span>
            <span>工作城市：{{info.job_city}}</span>
            <span>发布时间：{{info.job_time}}</span>
          </div>
        </div>
        <div class="centerInfo">
          <div class="centerInfoTop">
            <p>工作职责</p>
            <p :key="item" v-for="item in info.job_info">{{item}}</p>
          </div>
          <div class="centerInfoBottom">
            <p>任职要求</p>
            <p :key="item" v-for="item in info.job_ask">{{item}}</p>
          </div>
        </div>
        <div class="btn">
          <div class="btnNoMove">
            <el-button :loading="loadingFlag" style="width:110px" class="collectionBtn" @click="showScope(info.pk)">
              <span v-if="info.isColl">取消收藏</span>
              <span v-else>收藏职位</span>
            </el-button>
          </div>
          <div class="btnNoMove">
            <el-button style="width:110px" class="applyBtn">立刻申请</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$api
      .get("job/info", {
        params: {
          id: this.$route.query.pk
        }
      })
      .then(res => {
        let data = res.data.data;
        this.info = data;
        this.info.job_info = data.job_info.split("/n");
        this.info.job_ask = data.job_ask.split("/n");
        this.info.job_type = this.$route.query.job_type;
      });
  },
  data() {
    return {
      info: {},
      loadingFlag: false
    };
  },
  methods: {
    showScope(id) {
      this.loadingFlag = true
      this.$api
        .post("job/coll", {
          id: id
        })
        .then(res => {
          if (res.data.code === 0) {
            let msg = "";
            if (!this.info.isColl) {
              msg = "收藏成功";
            } else {
              msg = "取消收藏";
            }
            this.$message.info({
              message: msg
            });
            // 请求成功
            this.info.isColl = !this.info.isColl;
          } else {
            this.$message.error({
              message: res.data.msg
            });
          }
          this.loadingFlag = false
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  background-color: rgb(247, 248, 249);
  .c-container {
    padding-top: 100px;
    min-height: 100%;
    padding-bottom: 26px;
    .container {
      padding-right: 366px;
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
          span {
            margin-right: 100px;
          }
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
          width: 130px;
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