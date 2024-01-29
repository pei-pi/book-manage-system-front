<template>
    <div class="main">
        <Nav_small class="nav_small"></Nav_small>
        <div style="clear: both;"></div>
        <div class="all">
            <Menu class="menu"></Menu>
            <Container class="container"></Container>
        </div>
    </div>
</template>

<script>
import Nav_small from "@/components/nav_small"
import Menu from "@/components/menu"
import Container from "@/components/container"
export default {
    name: '',
    components: {
        Menu,
        Container,
        Nav_small,
    }
}
</script>

<style scoped>
/* .all{
    display: flex;
    flex-direction: row;
} */
.nav_small{
    position: fixed;
    width: 100%;
    z-index: 1000;
}
.menu {
    margin-top: 120px;
    width: 17%;
    padding: 30px 20px 0 20px;
    position: fixed;
}

.container {
    width: 80%;
    float: right;
    margin-top: 120px;
}
</style>