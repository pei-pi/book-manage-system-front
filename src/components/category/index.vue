<!-- 分类榜单 -->
<template>
  <div class="category">
    <h2>分类榜单</h2>
    <div class="more" @click="toMore">更多</div>
    <h5>畅享多元主题，分类榜单汇总</h5>
    <div class="sub">
      <el-row>
        <el-col :span="6" v-for="(cat, index) in category" :key="index">
          <div class="subcate">
            <p class="categoryName">{{ cat.categoryName }}</p>
            ·
            <p>{{ cat.num }}本</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div
      style="
        width: 100%;
        height: 0;
        border-bottom: 2px solid #1586ff;
        margin-top: 25px;
      "
    ></div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import request from "@/assets/utils/request";
export default {
  name: "Category",
  mounted() {
    this.loadCategory();
  },
  data() {
    return {
      category: [],
    };
  },
  methods: {
    toMore: function () {
      this.$router.push("/menu");
    },
    loadCategory() {
      return new Promise((resolve, reject) => {
        return request({
          url: "/category/charts",
          method: "get",
        })
          .then((res) => {
            console.log(res);
            this.category = res.data.count.map((item) => {
              return {
                categoryName: item.cateName,
                num: item.num,
              };
            });
          })
          .catch((err) => {
            console.error(err);
          });
      });
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 10px;
  font-family: "楷体";
  text-align: center;
  font-size: 30px;
}
h5 {
  margin-top: 10px;
  color: rgb(97, 97, 97);
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 30px;
}
.more {
  width: 58px;
  height: 32px;
  border: 1px solid rgb(105, 105, 105);
  border-radius: 4px;
  font-size: 14px;
  color: rgb(99, 99, 99);
  text-align: center;
  line-height: 32px;
  position: absolute;
  right: 0;
  margin-right: 50px;
  box-shadow: 2px 2px 2px #888888;
}
.more:hover {
  cursor: pointer;
  background-color: rgb(224, 224, 224);
  box-shadow: none;
}
.category {
  width: 90%;
  margin: 0 auto;
}

.subcate {
  display: flex;
  flex-direction: row;
  line-height: 50px;
  font-size: 18px;
}
.subcate:hover {
  color: white;
  cursor: pointer;
  background-color: rgb(0, 0, 0);
}
p {
  margin: 0 5px;
}
.categoryName {
  margin-left: 70px;
}
</style>
