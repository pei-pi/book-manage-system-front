<!-- 猜你喜欢 -->
<template>
    <div>
        <h2>猜你喜欢</h2>
        <div class="more">更多</div>
        <h5>个性推荐，满足您独特阅读品味</h5>
        <div class="sub">
            <div v-for="book in books" :key="book.bookId" class="book">
                <img :src="require(`@/assets/images/${book.imgUrl}`)" class="book_img">
                <h4>{{ book.bookName }}</h4>
                <p class="author">{{ book.author }}</p>
                <div class="tip">
                    <el-tag v-for="(tag, index) in book.tags" :key="index" class="tag">{{ tag }}</el-tag>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Like',
    data() {
        return {
            books: [
                {
                    bookId: 1,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                    read: 60,
                    borrow: 12,
                    tags: ["悬疑", "科幻"]
                },
                {
                    bookId: 2,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                    read: 60,
                    borrow: 12,
                },
                {
                    bookId: 3,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                    read: 60,
                    borrow: 12,
                },
                {
                    bookId: 4,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                    read: 60,
                    borrow: 12,
                },
                {
                    bookId: 5,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                    read: 60,
                    borrow: 12,
                },
                {
                    bookId: 6,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                    read: 60,
                    borrow: 12,
                },
            ],
        }
    }
}
</script>

<style scoped>
h2 {
    margin-top: 10px;
    font-family: '楷体';
    text-align: center;
    font-size: 30px;
}

h5 {
    margin-top: 10px;
    color: rgb(97, 97, 97);
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 50px;
}
.more{
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
.more:hover{
    cursor: pointer;
    background-color: rgb(224, 224, 224);
    box-shadow: none;
}
.sub {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.book {
    width: 211px;
    height: 323px;
    border: 1px solid rgb(224, 224, 224);
    margin-bottom: 40px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    transform: translateX(20%);
}

.book_img {
    background-color: pink;
    width: 120px;
    height: 170px;
    margin: 10px auto;
    transition: transform 0.5s ease;
}

h4 {
    margin: 10px 20px;
}

.author {
    font-size: 14px;
    color: rgb(77, 77, 77);
    width: fit-content;
    margin: 0 20px;
}

.tip {
    display: flex;
    flex-direction: row;
    margin: 20px 20px;
}

.tag {
    margin-right: 6px;
}
.book:hover{
    border: 1px solid #3c8fff;
    box-shadow: 2px 2px 3px rgb(235, 235, 235);
}
.book:hover .author{
    color: #3c8fff;
}
.book:hover h4{
    color: #3c8fff;
}
.book:hover .book_img{
    transform: scale(1.05); 
}
</style>