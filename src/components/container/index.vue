<template>
    <div class="container">
        <div class="all_book">

            <div v-for="book in books" :key="book.bookId" class="book">
                <img :src="require(`@/assets/images/${book.imgUrl}`)" class="book_img">
                <div class="book_intro">
                    <h4>{{ book.bookName }}</h4>
                    <p class="author">{{ book.author }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Container',
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
                {
                    bookId: 7,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                    read: 60,
                    borrow: 12,
                },
                {
                    bookId: 8,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                    read: 60,
                    borrow: 12,
                },
                {
                    bookId: 9,
                    imgUrl: "8796093023840933102.jpg",
                    bookName: "孤独是一座岛",
                    author: "安逸",
                    read: 60,
                    borrow: 12,
                },
                {
                    bookId: 10,
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
.book:hover{
    border: 1px solid #3c8fff;
}
.book:hover h4{
    color: #3c8fff;
}
.book:hover .author{
    color: #3c8fff;
}
.book:hover .book_img{
    transform: scale(1.05);
}
</style>