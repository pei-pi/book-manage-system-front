<template>
  <div class="container">
    <Nav class="nav"></Nav>
    <div style="height: 120px; width: 100%"></div>
    <div class="below">
      <el-tabs v-model="activeName">
        <el-tab-pane label="收藏图书" class="else" name="first">
          <div v-for="(book, index) in books" :key="index" class="otherBook">
            <div class="imgBox">
              <img :src="book.imgUrl" class="bookImg" />
            </div>
            <div class="book_intro">
              <h4>{{ book.bookName }}</h4>
              <p class="author">{{ book.author }}</p>
            </div>

            <el-button
              type="warning"
              class="collection_btn"
              icon="el-icon-star-off"
              circle
              @click="cancelCollection(book)"
            ></el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="借阅图书" name="second">借阅图书</el-tab-pane>
      </el-tabs>
    </div>
    <Footer style="margin-top: 60px"></Footer>
  </div>
</template>

<script>
import Nav from "@/components/nav_small";
import Footer from "@/components/footer";
import request from "@/assets/utils/request";
export default {
  name: "",
  components: {
    Nav,
    Footer,
  },
  mounted() {
    this.loadUserCollection();
  },
  data() {
    return {
      activeName: "first",
      books: [],
      baseURL: process.env.VUE_APP_BASE_API,
      username:"",
    };
  },
  methods: {
    loadUserCollection() {
      this.username = this.$store.getters.name;
      return new Promise((resolve, reject) => {
        request({
          url: `/collection/userCollection?username=${this.username}`,
          method: "get",
        })
          .then((res) => {
            this.books = res.data.collectionList.map((item) => {
              return {
                bookId: item.id,
                imgUrl: this.baseURL + "/" + item.bookSrc,
                bookName: item.bookTitle,
                author: item.bookAuthor,
              };
            });

            console.log(this.books);
          })
          .catch((err) => {
            console.error(err);
          });
      });
    },
    cancelCollection(book) {
      console.log(this.username)
      this.$confirm("确认取消收藏此书籍?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            request({
              url: `/collection/cancleCollection?bookId=${book.bookId}&username=${this.username}`,
              method: "delete",
            })
              .then((res) => {
                this.loadUserCollection();
                resolve(res);
              })
              .catch((err) => {
                reject(err);
              });
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
.nav {
  position: fixed;
  width: 100%;
  z-index: 1000;
}
.el-tabs__nav {
  margin-left: 30px;
}
.else {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 60px;
  margin-top: 20px;
}
.otherBook {
  width: 554px;
  height: 110px;
  box-sizing: border-box;
  background-color: rgb(250, 246, 242);
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
}
.otherBook .imgBox {
  width: 80px;
  height: 80px;
  background-color: white;
  line-height: 80px;
  margin-top: 15px;
  margin-left: 25px;
  transition: transform 0.5s ease;
  text-align: center;
}
.otherBook .bookImg {
  width: 50px;
  height: 70px;
  vertical-align: middle;
  transition: transform 0.5s ease;
}
.otherBook .book_intro {
  margin-left: 20px;
  margin-top: 30px;
  width: 350px;
}
.otherBook h4 {
  font-family: "Microsoft YaHei";
  font-size: 15px;
}
.otherBook .author {
  font-family: "Microsoft YaHei";
  font-size: 14px;
  color: rgb(95, 95, 95);
  margin-top: 5px;
}
.otherBook:hover h4 {
  color: #3c8fff;
}
.otherBook:hover .author {
  color: #3c8fff;
}
.otherBook:hover .imgBox {
  transform: scale(1.05);
}
.collection_btn {
  width: 40px;
  height: 40px;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
