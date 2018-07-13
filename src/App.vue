
<template>
    <div>
        <!-- <Header/> -->
        <div class="layout">
            <div class="layout-content">
                <transition :name="transitionName">
                    <router-view></router-view>
                </transition>
            </div>
            <div class="layout-copy footer">
                &copy; 新智资讯 2014-2015
                <a href="mailto:contact@beyondlink.net">联系我们</a> |
                <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备11010360号-3</a>
            </div>
        </div>
    </div>
</template>
<script>
// import Header from './components/Header';

export default {
    data() {
        return {
            transitionName: 'fade',
        };
    },
    // components: {
    //     Header
    // }
};
</script>

<style scoped>
html,
body {
    width: 100%;
    height: 100%;
}

 /* .layout {
    height: 100%;
    width: 100%;
    background-color: white;
    
}  */

.layout-content {
    position: fixed; 
    top: 65px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 0;
}


.footer {
    text-align: center;
    padding: 10px 0 20px;
    width: 100%;
    height: 30px;
    background-color: white;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #eee
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}
</style>
