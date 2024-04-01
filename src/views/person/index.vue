<template>
    <div class="container">
        <Nav class="nav"></Nav>
        <div style="height: 120px; width: 100%"></div>
        <div class="below">
            
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
}
</script>

<style scoped>
.nav {
  position: fixed;
  width: 100%;
  z-index: 1000;
}
</style>