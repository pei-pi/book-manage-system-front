<!-- 热门图书 -->
<template>
    <div>
        <h2>热门图书</h2>
        <div class="more">更多</div>
        <h5>尽览热门图书：开启您的阅读之旅</h5>
        <div class="sub">
            <div v-for="(book, index) in  firstThree" :key="index" class="firstThreeBook">
                <div class="imgBox"><img :src="require(`@/assets/images/${book.imgUrl}`)" class="bookImg" /></div>
                <div class="info">
                    <div class="tixing"></div>
                    <div class="skew"></div>
                    <div class="skew2"></div>
                    <div class="skew3"></div>
                    <div class="book_intro">
                        <h4>{{ book.bookName }}</h4>
                        <p class="author">{{ book.author }}</p>
                        <div class="tip">
                            <P class="read">浏览 {{ book.read }}</P>
                            <p class="borrow">借阅 {{ book.borrow }}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div class="else">
            <div v-for="(book, index) in  otherData" :key="index" class="otherBook">
                <div class="imgBox"><img :src="require(`@/assets/images/${book.imgUrl}`)" class="bookImg" /></div>
                <div class="imgBackground"></div>
                <div class="info">
                    
                    <div class="book_intro">
                        <h4>{{ book.bookName }}</h4>
                        <p class="author">{{ book.author }}</p>
                        <div class="tip">
                            <P class="read">浏览 {{ book.read }}</P>
                            <p class="borrow">借阅 {{ book.borrow }}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div style="width:90%; height:0; border-bottom: 2px solid #a25437; margin: 30px auto;"></div>
    </div>
</template>

<script>
export default {
    name: 'Hot',
    data() {
        return {
            books: [
                {
                    bookId: 1,
                    imgUrl: "8796093024895831652.jpg",
                    bookName: "绝叫",
                    author: "【日】叶真中显,林佩瑾",
                    read: 126,
                    borrow: 12,

                },
                {
                    bookId: 2,
                    imgUrl: "8796093024911777273.jpg",
                    bookName: "人间失格",
                    author: "【日】太宰治",
                    read: 117,
                    borrow: 11,
                },
                {
                    bookId: 3,
                    imgUrl: "8796093024914817743.jpg",
                    bookName: "月亮与六便士",
                    author: "【英】威廉·萨默塞特·毛姆,徐淳刚",
                    read: 116,
                    borrow: 11,
                },
                {
                    bookId: 4,
                    imgUrl: "8796093024974912652.jpg",
                    bookName: "鲁滨孙漂流记",
                    author: "【英】笛福,王泽漫",
                    read: 106,
                    borrow: 9,
                },
                {
                    bookId: 5,
                    imgUrl: "8796093024914504479.jpg",
                    bookName: "老人与海",
                    author: "【美】欧内斯特·米勒尔·海明威,鲁羊",
                    read: 101,
                    borrow: 8,
                },
                {
                    bookId: 6,
                    imgUrl: "8796093025371913519.jpg",
                    bookName: "流浪地球",
                    author: "刘慈欣",
                    read: 92,
                    borrow: 8,
                },
                {
                    bookId: 7,
                    imgUrl: "8796093024895826402.jpg",
                    bookName: "超凡脱俗的鸟",
                    author: "【美】布拉德·沃森,黄建树",
                    read: 88,
                    borrow: 8,

                },
                {
                    bookId: 8,
                    imgUrl: "8796093024916610298.jpg",
                    bookName: "重返地球",
                    author: "朱琨",
                    read: 81,
                    borrow: 5,
                },
                {
                    bookId: 9,
                    imgUrl: "8796093024914463350.jpg",
                    bookName: "七个被绞死的人",
                    author: "【俄】安德烈耶夫,靳戈,戴骢",
                    read: 60,
                    borrow: 5,
                },
                {
                    bookId: 10,
                    imgUrl: "8796093024914437180.jpg",
                    bookName: "种玫瑰的男人",
                    author: "【冰岛】奥杜·阿娃·奥拉夫斯多蒂,苏莹文",
                    read: 60,
                    borrow: 4,
                },
                {
                    bookId: 11,
                    imgUrl: "8796093024885900375.jpg",
                    bookName: "归尘记",
                    author: "室鞅",
                    read: 45,
                    borrow: 4,
                },
                {
                    bookId: 12,
                    imgUrl: "8796093024901800861.jpg",
                    bookName: "昨天以前，明天以后",
                    author: "安逸",
                    read: 41,
                    borrow: 4,
                },
                {
                    bookId: 13,
                    imgUrl: "8796093024914824199.jpg",
                    bookName: "了不起的盖茨比",
                    author: "Francis Scott Fitzgerald,董继平",
                    read: 30,
                    borrow: 4,
                },
            ],
        }
    },
    computed: {
        firstThree() {
            return this.books.slice(0, 3);
        },
        otherData() {
            return this.books.slice(3);
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
    margin-left: 40px;
    flex-direction: row;
}

.sub .firstThreeBook {
    display: flex;
    align-items: flex-end;
    margin-left: 20px;
}

.sub .imgBox {
    width: 162px;
    height: 162px;
    border: 1px solid #3c8fff;
    border-radius: 4px;
    padding: 5px;
    box-sizing: border-box;
}

.sub .bookImg {
    height: 150px;
    margin: 0 auto;
    display: block;
    transition: transform 0.5s ease;
}

.sub .info {
    position: relative;
    height: 120px;
    width: 208px;
    background: #f3f5f9;
    box-sizing: border-box;
}

.sub .tixing {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 0;
    border-width: 0 15px 10px 0;
    border-style: solid;
    border-color: transparent transparent #3c8fff transparent;
}

.sub .skew {
    position: absolute;
    left: 100px;
    top: 0;
    width: 18px;
    height: 10px;
    background: #68aaff;
    margin: 0 auto;
    color: #000;
    font-size: 17px;
    line-height: 34px;
    text-align: center;
    transform: skew(55deg);
}

.sub .skew2 {
    position: absolute;
    left: 130px;
    top: 0;
    width: 10px;
    height: 10px;
    background: #97c4ff;
    margin: 0 auto;
    color: #000;
    font-size: 17px;
    line-height: 34px;
    text-align: center;
    transform: skew(55deg);
}

.sub .skew3 {
    position: absolute;
    right: 7px;
    bottom: 0;
    width: 18px;
    height: 10px;
    background: #6aaaff;
    margin: 0 auto;
    color: #000;
    font-size: 17px;
    line-height: 34px;
    text-align: center;
    transform: skew(-55deg);
}

.sub .book_intro {
    left: 160px;
    width: 208px;
    height: 120px;
}

.sub h4 {
    font-family: "Microsoft YaHei";
    font-size: 15px;
    margin-top: 22px;
    margin-left: 20px;
}

.sub .author {
    font-family: "Microsoft YaHei";
    font-size: 14px;
    color: rgb(95, 95, 95);
    margin-left: 20px;
    margin-top: 10px;
}

.sub .tip {
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
}

.sub .read {
    font-size: 12px;
    color: rgb(0, 157, 255);
}

.sub .borrow {
    font-size: 12px;
    margin-left: 10px;
    color: rgb(0, 157, 255);
}
.sub .firstThreeBook:hover h4 {
    color: #3c8fff;
}
.sub .firstThreeBook:hover .author{
    color: #3c8fff;
}
.sub .firstThreeBook:hover .bookImg{
    transform: scale(1.05); 
}

.else{
    display:flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-left: 60px;
    width: 100%;
    white-space: pre-line;
}
.otherBook{
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 20px;
    width: 204px;
    height: 90px;
    display: flex;
    flex-direction: row;
}
.otherBook .imgBox{
    width: 80px;
    height: 80px;
    border-radius: 4px;
    z-index: 1000;
    border: 1px solid #3c8fff;
    background-color: white;
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
}
.otherBook .imgBackground{
    width: 80px;
    height: 80px;
    border-radius: 4px;
    z-index: 100;
    background-color: #cce2ff;
    position: relative;
    top: 10px;
    left: 10px;
}
.otherBook .bookImg{
    width: 56px;
    height: 70px;
    margin: auto;
    margin-top: 4px;
    display: block;
    transition: transform 0.5s ease;
}
.otherBook .book_intro{
    width: 98px;
    height: 96px;
    overflow: hidden; /* 隐藏超出容器的部分文本 */
    text-overflow: ellipsis;
    margin-left: 20px;
}
.otherBook h4{
    font-size: 13px;
    margin-top: 8px;
}
.otherBook .author{
    margin-top: 6px;
    font-size: 11px;
    color: rgb(95, 95, 95);
}
.otherBook .tip{
    margin-top: 6px;
    display: flex;
    flex-direction: row;
}
.otherBook .read{
    font-size: 8px;
    color: rgb(0, 157, 255);
}
.otherBook .borrow{
    margin-left: 5px;
    font-size: 8px;
    color: rgb(0, 157, 255);
}
.otherBook:hover h4 {
    color: #3c8fff;
}
.otherBook:hover .author{
    color: #3c8fff;
}
.otherBook:hover .bookImg{
    transform: scale(1.05); 
}
</style>