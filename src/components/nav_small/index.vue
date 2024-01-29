<template>
    <div>
        <div class="nav">
            <p class="welcome">Welcome to BookWander</p>
            <div class="nav_right">
                <p>欢迎光临 , {{ this.user }}</p>
                <p>|</p>
                <p>个人中心</p>
                <p>|</p>
                <p>退出登录</p>
            </div>
        </div>
        <div class="searchBar">
            <input type="text" name="searchInput" class="searchInput" placeholder="请输入书名/作者">
            <button class="searchBtn">
                <i class="el-icon-search"></i>
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'nav',
    data() {
        return {
            user: 'peipi'
        }
    }
}
</script>

<style scoped>
.nav {
    background-color: #eef5ff;
    height: 40px;
}

.welcome {
    line-height: 40px;
    color: #6c6c6c;
    padding-left: 30px;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.nav_right {
    position: absolute;
    right: 20px;
    top: 10px;
    display: flex;
    flex-direction: row;
}

.nav_right p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
    color: gray;
}

.searchBar {
    width: 100%;
    height: 80px;
    display: flex;
    background-color: white;
    flex-direction: row;
    justify-content: center; /* 水平居中对齐 */
    align-items: center; /* 垂直居中对齐 */
    box-shadow: 0 2px 3px rgb(234, 234, 234);
}


.searchInput {
    width: 500px;
    height: 40px;
    border: 1px solid rgb(0, 105, 196);
    text-indent: 20px;
}

.searchInput:focus {
    border-color: #007bff;
    /* 修改边框颜色 */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    /* 添加阴影效果 */
    outline: none;
    /* 去除默认的轮廓样式 */
}

.searchBtn {
    margin-left: -1px;
    width: 100px;
    height: 42.5px;
    border-radius: 0;
    border: none;
    background: linear-gradient(to right, #434ee8, #57a2ee);
    ;
}

.el-icon-search {
    font-size: 24px;
    color: white;
}
</style>