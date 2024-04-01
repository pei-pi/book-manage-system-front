<!-- 新书推荐 -->
<template>
    <div> 
        <h2>新书速递</h2>
        <div class="more">更多</div>
        <h5>探索精彩故事的最新篇章</h5>
        <div class="sub">
            <div v-for="(book, index) in  firstSix" :key="index" class="firstSixBook">
                <div class="imgBox"><img :src="require(`@/assets/images/${book.imgUrl}`)" class="bookImg" /></div>
                <div class="info">
                    <div class="book_intro">
                        <h4>{{ book.bookName }}</h4>
                        <p class="author">{{ book.author }}</p>
                    </div>
                </div>

            </div>
        </div>
        <div class="else">
            <div v-for="(book, index) in  otherData" :key="index" class="otherBook">
                <div class="imgBox"><img :src="require(`@/assets/images/${book.imgUrl}`)" class="bookImg" /></div>
                <div class="info">
                    <div class="book_intro">
                        <h4>{{ book.bookName }}</h4>
                        <p class="author">{{ book.author }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div style="width:90%; height:0; border-bottom: 2px solid rgb(75, 150, 166); margin: 40px auto; margin-top: 60px;"></div>
    </div>
</template>

<script>
export default{
    name:'New',
    data() {
        return {
            books: [
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
                {
                    bookId: 9,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                },
                {
                    bookId: 10,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                },
                {
                    bookId: 11,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                },
                {
                    bookId: 12,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                },
            ]
        }
    },
    computed:{
        firstSix(){
            return  this.books.slice(0, 6);
        },
        otherData() {
            return this.books.slice(6);
        }
    }
}
</script>

<style scoped>
h2{
    margin-top: 10px;
    font-family:'楷体';
    text-align: center;
    font-size: 30px;
}
h5{
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
.sub{
    margin-left: 50px;
    display: flex;
    flex-direction: row;
}
.sub .firstSixBook{
    margin-left: 30px;
}
.firstSixBook .imgBox{
    width: 160px;
    height: 160px;
    text-align: center;
    line-height: 160px;
}
.firstSixBook .bookImg{
    height: 150px;
    width: 110px;
    vertical-align: middle;
    transition: transform 0.5s ease;
}
.firstSixBook .book_intro{
    margin-top: 20px;
}
.firstSixBook h4{
    font-family: "Microsoft YaHei";
    font-size: 15px;
}
.firstSixBook .author{
    font-family: "Microsoft YaHei";
    font-size: 14px;
    color: rgb(95, 95, 95);
    margin-top: 10px;
}
.firstSixBook:hover h4{
    color: #3c8fff;
}
.firstSixBook:hover .author{
    color: #3c8fff;
}
.firstSixBook:hover .bookImg{
    transform: scale(1.05); 
}
.else{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 60px;
    margin-top: 20px;
}
.otherBook{
    width: 554px;
    height: 110px;
    box-sizing: border-box;
    background-color: rgb(250, 246, 242);
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
}
.otherBook .imgBox{
    width: 80px;
    height: 80px;
    background-color: white;
    line-height: 80px;
    margin-top: 15px;
    margin-left: 25px;
    transition: transform 0.5s ease;
    text-align: center;
}
.otherBook .bookImg{
    width: 50px;
    height: 70px;
    vertical-align:middle;
    transition: transform 0.5s ease;
}
.otherBook .book_intro{
    margin-left: 20px;
    margin-top: 30px;
}
.otherBook h4{
    font-family: "Microsoft YaHei";
    font-size: 15px;
}
.otherBook .author{
    font-family: "Microsoft YaHei";
    font-size: 14px;
    color: rgb(95, 95, 95);
    margin-top: 5px;
}
.otherBook:hover h4{
    color: #3c8fff;
}
.otherBook:hover .author{
    color: #3c8fff;
}
.otherBook:hover .imgBox{
    transform: scale(1.05); 
}

</style>