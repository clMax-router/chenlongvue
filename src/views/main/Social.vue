<template>
  <div class="main">
    <div class="c-container">
      <div class="banner"></div>
      <div class="hunting">
        <div class="container">
          <!-- 写查询条件 -->
          <div class="position">
            <p>职位类别:</p>
            <a :class="{active:keywrods.type === 0}" @click.prevent="typeAll" href="#">所有类别</a>
            <a
              @click.prevent="serachJobs(item.id)"
              :class="{active:keywrods.type === item.id}"
              :key="item.id"
              v-for="item in typeLits"
              href="#"
            >{{item.type}}</a>
          </div>
          <div class="city">
            <p>工作城市:</p>
            <a href="#" @click.prevent="cityAll" :class="{active:keywrods.city===0}">所有城市</a>
            <a
              @click.prevent="serachCitys(item.id)"
              :key="item.id"
              :class="{active:keywrods.city === item.id}"
              href="#"
              v-for="item in cityList"
            >{{item.city}}</a>
          </div>
          <hr style="background-color:rgb(235,235,235);height:.5px;border:none" />
          <!-- 文本线 -->
          <div class="input">
            <el-input
              placeholder="请输入内容"
              style="width:320px"
              suffix-icon="el-icon-search"
              v-model="query"
              @change="serachList"
            ></el-input>
          </div>
          <div class="text">
            <a @click.prevent="hrefClick('职院招聘')" href="#">职院招聘</a>
            <a @click.prevent="hrefClick('嵌入式')" href="#">嵌入式</a>
            <a @click.prevent="hrefClick('算法')" href="#">算法</a>
            <a @click.prevent="hrefClick('机械')" href="#">机械</a>
            <a @click.prevent="hrefClick('采购')" href="#">采购</a>
            <a @click.prevent="hrefClick('运维')" href="#">运维</a>
            <a @click.prevent="hrefClick('开发')" href="#">开发</a>
            <a @click.prevent="hrefClick('实习生')" href="#">实习生</a>
          </div>
          <!-- 这是结果区域 -->
          <!-- 自定义表头样式 -->
          <el-table
            :header-cell-style="{backgroundColor:'rgb(245,245,245)',color:'#616466',fontSize:'18px'}"
            class="result"
            v-loading="isLoading"
            :data="jobs"
            style="width: 100%"
          >
            <el-table-column prop="job_name" label="职位名称" width="280"></el-table-column>
            <el-table-column prop="job_type" label="职位类别">
              <!-- 使用插槽自定义职位类别 -->
              <template slot-scope="scope">{{jobTypeUpdate(scope.row.job_type)}}</template>
            </el-table-column>
            <el-table-column prop="job_city" label="工作城市"></el-table-column>
            <el-table-column prop="job_time" label="发布时间"></el-table-column>
            <el-table-column label="收藏">
              <!-- scope 指向当前这一行的数据  <template slot-scope="scope">-->
              <template slot-scope="scope">
                <span
                  @click="showScope(scope)"
                  :class="scope.row.isColl?'el-icon-star-on':'el-icon-star-off'"
                  style="cursor: pointer;"
                ></span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <span @click="goPosition(scope)" style="color:#b4b4b4;cursor: pointer;">查看详情 ></span>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            style="text-align:center;margin-top: 48px;"
            background
            layout="prev, pager, next"
            :total="pagination.total"
            :current-page="pagination.page"
            @current-change="pageChang"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "social",
  //页面渲染完毕
  mounted() {
    this.getTypelist();
    this.fetchJobs();
  },
  data() {
    return {
      //职位类别
      typeLits: [],
      query: "",
      //职位列表
      jobs: [],
      pagination: {},
      keywrods: {
        type: 0,
        city: 0
      },
      cityList: [
        {
          id: 1,
          city: "上海市"
        },
        {
          id: 2,
          city: "北京市"
        },
        {
          id: 3,
          city: "杭州市"
        },
        {
          id: 4,
          city: "南京市"
        },
        {
          id: 5,
          city: "深圳市"
        },
        {
          id: 6,
          city: "西安市"
        },
        {
          id: 7,
          city: "香港"
        }
      ],
      isLoading: false //表格加载状态
    };
  },
  methods: {
    getTypelist() {
      //获取类别的列表
      this.$api.get("job/typeList").then(res => {
        this.typeLits = res.data.data;
      });
    },
    hrefClick(str) {
      this.query = str;
      this.fetchJobs();
    },
    // 获取 职位数组
    fetchJobs() {
      // 默认传递页码
      let params = {
        page: this.pagination.page || 1
      };

      if (this.keywrods.type) {
        params.jobType = this.keywrods.type;
      }

      if (this.keywrods.city) {
        params.jobCity = this.cityList.find(
          item => item.id == this.keywrods.city
        ).city;
      }

      //如果文本框有值
      if (this.query) {
        params.jobName = this.query;
      }
      // 还未发送请求之前，表格加载状态
      this.isLoading = true;

      // axios的get传参
      this.$api
        .get("job/lists", {
          params
        })
        .then(res => {
          let {
            data: { items, total, page }
          } = res.data;
          this.jobs = items;
          this.pagination = {
            page,
            total
          };
          //请求完成
          this.isLoading = false;
        });
    },
    jobTypeUpdate(id) {
      return this.typeLits.find(item => item.id == id).type;
    },
    // 页数改变
    pageChang(index) {
      // 当前的页码
      console.log(index);
      this.pagination.page = index;
      // 重新查询
      this.fetchJobs();
    },
    serachJobs(id) {
      this.keywrods.type = id;
      this.fetchJobs();
    },
    serachCitys(id) {
      this.keywrods.city = id;
      this.fetchJobs();
    },

    typeAll() {
      this.keywrods.type = 0;
      this.fetchJobs();
    },

    cityAll() {
      this.keywrods.city = 0;
      this.fetchJobs();
    },

    serachList() {
      this.fetchJobs();
    },
    showScope(scope) {
      this.$api
        .post("job/coll", {
          id: scope.row.pk
        })
        .then(res => {
          if (res.data.code === 0) {
            this.$message.info({
              message: res.data.msg
            });
            // 请求成功
            scope.row.isColl = !scope.row.isColl;
          } else {
            this.$message.error({
              message: res.data.msg
            });
          }
        });
    },
    goPosition(scope) {
      this.$router.push({
        path: "/position",
        query: { pk: scope.row.pk ,job_type:this.jobTypeUpdate(scope.row.job_type)}
      });
    }
  }
  // 定义一个过滤器

  // filters: {
  //   jobTypeUpdate(val){
  //     console.log(this)
  //     // 将typelist 的类型于val进行匹配
  //     return ;
  //   }
  // },
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
      margin-top: 26px;
      padding: 40px 48px;
      margin-bottom: 30px;
      .position,
      .city {
        /* 选择条件 */
        width: 100%;
        height: 36px;
        display: flex;
        font-size: 13px;
        align-items: center;
        .active {
          color: #3b3e40 !important;
        }
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
      .input {
        height: 40px;
        width: 100%;
        margin-top: 20px;
      }
      .text {
        height: 34px;
        width: 100%;
        font-size: 13px;
        a {
          color: #b4b4b4;
          margin-left: 12px;
        }
        a:hover {
          color: #141414;
        }
      }
      .input,
      .text {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      .result {
        margin-top: 20px;
      }
      .headerRow {
        background-color: red;
      }
    }
  }
}
</style>