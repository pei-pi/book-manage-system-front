<template>
  <div class="container">
    <div class="all_book">
      <router-link v-for="book in books" :key="book.bookId" :to="'/detail/'+book.bookId" class="book">
        <img :src="book.imgUrl" class="book_img" />
        <div class="book_intro">
          <h4
            style="
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            "
          >
            {{ book.bookName }}
          </h4>
          <p
            style="
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            "
            class="author"
          >
            {{ book.author }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import request from "@/assets/utils/request";
import Bus from "@/assets/js/bus";
export default {
  name: "Container",
  mounted() {
    this.firstLoad();
    Bus.$on("category", (category) => {
      this.category = category;
      this.loadCategory();
    });
  },
  data() {
    return {
      books: [],
      category: null,
      baseURL: process.env.VUE_APP_BASE_API,
    };
  },
  methods: {
    loadCategory() {
      scrollTo(0,0);
      return new Promise((resolve, reject) => {
        request({
          url: `/book/getBookByCategory?subCateName=${this.category}`,
          method: "get",
        })
          .then((res) => {
            console.log(res);
            this.books = res.data.books.map((item) => {
              return {
                bookId: item.id,
                imgUrl: this.baseURL + "/" + item.bookSrc,
                bookName: item.bookTitle,
                author: item.bookAuthor,
              };
            });
            console.log(this.books);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    firstLoad() {
      return new Promise((resolve, reject) => {
        request({
          url: "/book/getBookByCategory?subCateName=外国小说",
          method: "get",
        })
          .then((res) => {
            console.log(res);
            this.books = res.data.books.map((item) => {
              return {
                bookId: item.id,
                imgUrl: this.baseURL + "/" + item.bookSrc,
                bookName: item.bookTitle,
                author: item.bookAuthor,
              };
            });
            console.log(this.books);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
</script>

<style scoped>
.all_book {
  margin: 30px 20px 0 40px;
}

.book {
  width: 150px;
  height: 210px;
  border: 1px solid rgb(224, 224, 224);
  margin: 10px 0 20px 25px;
  float: left;
}

.book_img {
  border-radius: 5px;
  width: 100px;
  height: 130px;
  display: block;
  margin: 10px auto;
  transition: transform 0.5s ease;
}

h4 {
  font-size: 14px;
  margin-left: 20px;
}

.author {
  margin-left: 20px;
  margin-top: 5px;
  font-size: 10px;
  color: rgb(90, 90, 90);
}
.book:hover {
  border: 1px solid #3c8fff;
}
.book:hover h4 {
  color: #3c8fff;
}
.book:hover .author {
  color: #3c8fff;
}
.book:hover .book_img {
  transform: scale(1.05);
}
a{
  text-decoration: none;
  color: black;
}
</style>
