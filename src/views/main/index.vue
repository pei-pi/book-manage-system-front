<template>
    <div class="main_container">
        <NavMain></NavMain>
        <Lunbo style="margin-top: 30px;"></Lunbo>
        <Category style="margin-top: 60px;"></Category>
        <Hot style="margin-top: 30px;"></Hot>
        <New style="margin-top: 30px;"></New>

        <Like style="margin-top: 30px;"></Like>
        <Footer style="margin-top: 30px;"></Footer>
    </div>
</template>

<script>
import NavMain from "@/components/navMain"
import Lunbo from "@/components/lunbo"
import Category from "@/components/category"
import New from "@/components/new"
import Hot from "@/components/hot"
import Like from "@/components/like"
import Footer from "@/components/footer"
export default {

    name: '',
    components: {
        NavMain,
        Lunbo,
        Category,
        Hot,
        New,
        Like,
        Footer
    },
    data() {
        return {

        };
    },
    computed: {

    },
    methods: {

    },
}
</script>

<style scoped>
.main_container {
    overflow-x: hidden;
}
</style>
