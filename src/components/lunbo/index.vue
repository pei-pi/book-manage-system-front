<template>
    <div id="slider">
        <div class="block">
            <el-carousel height="500px">
                <el-carousel-item>
                    <a href="#"><img src="@/assets/images/1.jpg" /></a>
                </el-carousel-item>
                 <el-carousel-item>
                    <a href="#"><img src="@/assets/images/2.jpg" /></a>
                </el-carousel-item>
                <el-carousel-item>
                    <a href="#"><img src="@/assets/images/3.jpg" /></a>
                </el-carousel-item>
            </el-carousel>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Lunbo',
}

</script>

<style scoped>
#slider {
    width: 90%;
    height: 500px;
    margin: 0 auto;
    border-radius: 20px;
}
.block{
    border-radius: 10px;
    overflow: hidden;
}
li {
    list-style: none;
}
img{
    border-radius: 10px;
}
</style>