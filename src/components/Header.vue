<template>
    <Menu mode="horizontal" theme="light" active-name="/" @on-select="goHome">
        <div class="layout-logo">
            <a href="/">
                <img src="/img/icon-large.png" alt="" class="header-icon">
            </a>
        </div>
    
        <Menu-item name="/">
            <Icon type="home"></Icon>
            {{text}}
        </Menu-item>
    </Menu>
</template>


<script>
export default {
    data() {
        return {
            text: '首页',
        };
    },
    methods: {
        goHome() {
            this.$router.push('/');
        },
    },
};

</script>

<style>
.header-icon {
    width: 100%;
    height: 100%;
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
}

.layout-logo {
    width: 146px;
    height: 30px;
    border-radius: 3px;
    float: left;
    margin-right: 50px;
    margin-left: 120px;
    margin-top: 10px;
}
</style>
