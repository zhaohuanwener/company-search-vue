<template>
    <div class="layout-nav">
        <Menu mode="horizontal" theme="light" :active-name="activeNav" @on-select="go">
        <div class="layout-logo">
            <a href="/">
                <img src="../assets/img/icon-large.png" alt="" class="header-icon">
            </a>
        </div>
    
        <!-- <Menu-item v-for="n in navs" :key="n.path" :name="n.path">
            {{n.text}}
        </Menu-item> -->
    </Menu>
    </div>
</template>


<script>
export default {
    data() {
        return {
            navs: [{
                text: '企业搜索',
                path: '/',
                icon: 'search'
            },
            // {
            //     text: '可转债',
            //     path: '/cbonds',
            //     icon: 'stats-bars'
            // }
            ],
            activeNav: '/'
        };
    },
    methods: {
        go(name) {
            this.$router.push(name);
        }
    },
    mounted() {
        const { path = '/' } = this.$route;
        this.activeNav = path;
    }
};

</script>

<style>
.header-icon {
    width: 100%;
    height: 100%;
}

.layout-nav {
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0
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
