<template>
  <div class="container">
    <Nav class="nav"></Nav>
    <div style="height: 120px; width: 100%"></div>
    <div class="below">
      <div class="book">
        <div class="imgBox">
          <img :src="book.imgUrl" class="book_img" />
        </div>
        <div class="right">
          <div class="title">
            <h2>{{ book.bookName }}</h2>
            <div class="tags">
              <el-tag class="tag">{{ book.tags }}</el-tag>
            </div>
          </div>

          <p class="author">
            作者：<span>{{ book.author }}</span>
          </p>
          <div class="content">{{ book.content }}</div>
          <button class="collect" @click="collect()">
            <div v-if="flag === 0">
              <i
                class="iconfont icon-shoucang"
                style="margin-right: 5px; color: yellow"
              ></i
              >收藏
            </div>
            <div v-else-if="flag === 1">
              <i
                class="iconfont icon-shoucangxuanzhong"
                style="margin-right: 5px; color: yellow"
              ></i
              >取消收藏
            </div>
          </button>
          <div style="display: inline-block">
            <button class="borrow">借阅</button>
            <el-date-picker
              class="timePicker"
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd HH:mm:ss"
              format="yyyy-MM-dd hh:mm:ss"
            >
            </el-date-picker>
            <el-button
              type="primary"
              style="margin-left: 10px"
              icon="el-icon-check"
              circle
              @click="borrow"
            ></el-button>
          </div>
        </div>
      </div>
      <div class="recommend">
        <div class="top">
          <p class="like_book">相似图书</p>
        </div>
        <div class="all_book">
          <div
            v-for="book in recommendbooks"
            :key="book.bookId"
            class="book_detail"
          >
            <img
              :src="require(`@/assets/images/${book.imgUrl}`)"
              class="rec_book_img"
            />
            <h4 class="rec_bookname">{{ book.bookName }}</h4>
            <p class="rec_author">{{ book.author }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer style="margin-top: 60px"></Footer>
  </div>
</template>

<script>
import Nav from "@/components/nav_small";
import { Message } from "element-ui";
import Footer from "@/components/footer";
import request from "@/assets/utils/request";
export default {
  name: "",
  components: {
    Nav,
    Footer,
  },
  created() {
    this.bookId = this.$route.params.id;
    this.username = this.$store.getters.name;
    this.loadBook();
  },
  mounted() {
    this.isCollection();
  },
  data() {
    return {
      value1: "",
      book: {},
      recommendbooks: [
        {
          bookId: 1,
          imgUrl: "8796093023840933102.jpg",
          bookName: "孤独是一座岛",
          author: "安逸",
        },
        {
          bookId: 2,
          imgUrl: "8796093023840933102.jpg",
          bookName: "孤独是一座岛",
          author: "安逸",
        },
        {
          bookId: 3,
          imgUrl: "8796093023840933102.jpg",
          bookName: "孤独是一座岛",
          author: "安逸",
        },
        {
          bookId: 4,
          imgUrl: "8796093023840933102.jpg",
          bookName: "孤独是一座岛",
          author: "安逸",
        },
        {
          bookId: 5,
          imgUrl: "8796093023840933102.jpg",
          bookName: "孤独是一座岛",
          author: "安逸",
        },
        {
          bookId: 6,
          imgUrl: "8796093023840933102.jpg",
          bookName: "孤独是一座岛",
          author: "安逸",
        },
        {
          bookId: 7,
          imgUrl: "8796093023840933102.jpg",
          bookName: "孤独是一座岛",
          author: "安逸",
        },
        {
          bookId: 8,
          imgUrl: "8796093023840933102.jpg",
          bookName: "孤独是一座岛",
          author: "安逸",
        },
      ],
      bookId: 1,
      username: "",
      baseURL: process.env.VUE_APP_BASE_API,
      flag: 0,
    };
  },
  methods: {
    loadBook() {
      console.log(this.bookId);
      return new Promise((resolve, reject) => {
        request({
          url: `/book/getBookById?bookId=${this.bookId}`,
          method: "get",
        })
          .then((res) => {
            console.log(res);
            const resBook = res.data.book;
            this.book = {
              bookId: resBook.id,
              imgUrl: this.baseURL + "/" + resBook.bookSrc,
              bookName: resBook.bookTitle,
              author: resBook.bookAuthor,
              tags: resBook.bookTags,
              content: resBook.bookContent,
            };
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    borrow() {
      console.log(this.value1);
      console.log(new Date(this.value1[0]));
    },
    collect() {
      if (this.flag === 0) {
        return new Promise((resolve, reject) => {
          request({
            url: `/collection/insertCollection?bookId=${this.bookId}&username=${this.username}`,
            method: "get",
          })
            .then((res) => {
              console.log(res);
              Message.success("收藏成功");
              this.flag = 1;
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        });
      } else {
        this.$confirm("确认取消收藏此书籍?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            return new Promise((resolve, reject) => {
              request({
                url: `/collection/cancleCollection?bookId=${this.bookId}&username=${this.username}`,
                method: "delete",
              })
                .then((res) => {
                  this.flag = 0;
                  resolve(res);
                })
                .catch((err) => {
                  reject(err);
                });
            });
          })
          .catch(() => {});
      }
    },
    isCollection() {
      return new Promise((resolve, reject) => {
        request({
          url: `/collection/ifCollection?bookId=${this.bookId}&username=${this.username}`,
        })
          .then((res) => {
            console.log(res);
            this.flag = res.data.isCollected;
            resolve(res);
          })
          .catch((err) => {
            console.error(err);
            reject(err);
          });
      });
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/iconfont.css";

.nav {
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.book {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}

.imgBox {
  width: 448px;
  height: 448px;
  border: 1px solid rgb(219, 219, 219);
  margin-top: 20px;
  margin-left: 60px;
  text-align: center;
  line-height: 448px;
}

.book_img {
  width: 300px;
  height: 400px;
  vertical-align: middle;
}

.right {
  margin-left: 40px;
}

.content {
  margin-top: 20px;
  width: 600px;
  padding: 20px;
  background-color: #fff7f1;
  color: #707070;
  font-size: 15px;
  margin-bottom: 30px;
  margin-right: 40px;
}

h2 {
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 30px;
  font-family: cursive;
}

.tags {
  margin-top: 20px;
}

.author {
  margin-top: 20px;
}

.author :not([span]) {
  margin-top: 20px;
  color: #3c8fff;
}

.right {
  margin-top: 20px;
  margin-left: 30px;
}

.collect {
  border-radius: 4px;
  width: 118px;
  color: #fff;
  background: linear-gradient(132deg, #2b87ff, #0aadfc);
  font-size: 16px;
  margin-right: 10px;
  height: 42px;
  border: none;
}

.borrow {
  width: 150px;
  height: 42px;
  background: linear-gradient(270deg, #ff6200, #fe0000);
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
}

.recommend {
  margin: 0 auto;
  width: 95%;
  margin-top: 60px;
  border: 1px solid rgb(233, 233, 233);
  margin-bottom: 40px;
}

.top {
  background-color: #f7f7f7;
  width: 100%;
  height: 45px;
  margin: 0 auto;
}

.like_book {
  font-family: "Microsoft YaHei";
  font-size: 16px;
  line-height: 45px;
  margin-left: 20px;
}

.all_book {
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 180px;
  margin-left: 30px;
  margin-top: 20px;
}

.book_detail {
  margin-right: 36px;
}

.rec_book_img {
  object-fit: contain;
  height: 110px;
  width: 110px;
}

.rec_bookname {
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
}

.rec_author {
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
  color: #3c8fff;
}
.timePicker {
  margin-left: 20px;
}
</style>
