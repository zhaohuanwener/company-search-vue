
<template>
    <div class="layout">
      <div class="header">
          <Menu mode="horizontal" theme="light" active-name="/" @on-select="go">
              <div class="layout-logo">
                <a href="/"><img src="/img/icon-large.png" alt="" class="header-icon"></a>
              </div>

              <div class="layout-nav">
                <Menu-item name="/">
                  <Icon type="home"></Icon>
                  首页
                </Menu-item>

              </div>
          </Menu>
      </div>
        <div class="layout-content">
            <transition :name="transitionName">
              <router-view keep-alive></router-view>
            </transition>
        </div>
        <div class="layout-copy footer">
            &copy; 新智资讯 2014-2015 <a href="mailto:contact@beyondlink.net">联系我们</a> | <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备11010360号-3</a>
        </div>
    </div>
</template>
<script>
  import Detail from './components/Detail';

  export default {
    data() {
      return {
        transitionName: 'fade',
      };
    },
    components: {
      Detail,
    },
    methods: {
      go(url) {
        this.$router.push({ path: url });
      },
    },
  };
</script>

<style scoped>
    html,body {
      width: 100%;
      height: 100%;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        height: 100%;
        width: 100%;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        position: fixed;
        bottom: 70px;
        top: 70px;
        overflow: hidden;
        width: 98%;
        height: 85%;
        border-radius: 4px;
        margin-left: 10px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .header{
        border: 1px solid #eee;
        background: #f5f7f9;
        width: 100%;
        height: 50px;
    }
    .layout-logo{
        width: 146px;
        height: 30px;
        border-radius: 3px;
        float: left;
        margin-right: 50px;
        margin-left: 120px;
        margin-top: 10px;
        /*display: none*/
    }
    .layout-nav {
      margin-left: 300px;
    }
    .header-icon {
      width: 100%;
      height: 100%;
    }

    .footer{
        text-align: center;
        padding: 10px 0 20px;
        width: 100%;
        height: 30px;
        background-color: white;
        position: absolute;
        bottom: 0;
        border-top: 1px solid #eee
    }


    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
</style>
