<template>
    <div id="menu">
        <div class="major">
            <h2>分类</h2>
        </div>
        <div class="menu">
            <div class="onemenu" v-for="(menu, index) in menus" :key="index">
                <span class="opener" @click="toggle(index)">{{ menu.category }}</span>
                <ul class="submenu" :class="'submenu' + index" style="display: none;">
                    <li class="subtitle" v-for="(category, index) in menu.sub_category" :key="index">{{ category }}</li>
                </ul>
            </div>

        </div>
        <div class="blank"></div>
    </div>
</template>

<script>


export default {
    name: 'Menu',
    data() {
        return {
            menus: [
                {
                    category: "小说作品",
                    sub_category: [
                        '言情小说',
                        '言情小说',
                        '言情小说',
                        '言情小说',
                        '言情小说',
                        '言情小说',
                        '言情小说',
                    ]
                },
                {
                    category: "小说作品",
                    sub_category: [
                        '言情小说',
                        '言情小说',
                        '言情小说',
                        '言情小说',
                        '言情小说',
                        '言情小说',
                        '言情小说',
                    ]
                }
            ]
        }
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        },
        toggle(index) {
            let tag = document.getElementsByClassName("submenu" + index)[0];
            let displayValue = window.getComputedStyle(tag).getPropertyValue("display");
            console.log(displayValue)
            displayValue = (displayValue==="block") ? "none" : "block"
            console.log(displayValue)
            tag.style.display = displayValue
        }
    }
}
</script>

<style scoped>
ul li {
    list-style: none;
}

#menu {
    height: 100vh;
    overflow-y: auto;
    box-shadow: 2px 0 4px rgb(234, 234, 234);
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
    width: 6px;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.major h2 {
    margin-bottom: 20px;
    font-size: 23px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    letter-spacing: 2px;
}

::v-deep .el-tree-node__label {
    overflow: hidden;
    line-height: 0px;
}

.menu {
    line-height: 40px;
    overflow: hidden;

}

.menu .submenu {
    margin-left: 20px;
    font-size: 14px;
    letter-spacing: 1px;
    color: #606060;
}

.subtitle:hover {
    color: red;
}

.opener {
    font-size: 14px;
    letter-spacing: 1px;
    color: #343434;
    display: block;
    /* width: 283px; */
}

.onemenu::after {
    content: "";
    display: block;
    width: 300px;
    /* 控制横线的宽度 */
    height: 1px;
    /* 控制横线的高度 */
    background-color: #bababa;
    /* 控制横线的颜色 */
    margin-top: 5px;
    /* 控制横线与文本的间距 */
}

.blank {
    height: 100px;
}
</style>