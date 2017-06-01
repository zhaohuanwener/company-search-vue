<template id="">
  <div class="content-root">

    <Loading :size="loading_size" class="loading-container" v-if="show_loading"></Loading>

    <div class="content-container" v-if="!show_loading">
      <div class="content-header">
        <h1>
          {{data.title}}
          <ul>
            <li><small>{{data.court}}</small></li>
            <li><small>{{data.caseno}}</small></li>
          </ul>
        </h1>
      </div>

      <div class="content-body" v-html="data.plaintext"></div>

      <div class="content-foot">
        <ul>
          <li>
            <h2>
              判决时间: <span>{{data.judgetime}}</span>
            </h2>
          </li>
          <li class="source">
            原文链接: <span><a :href="data.fromUrl">{{data.fromUrl}}</a></span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

  import Loading from '@/common/components/Loading';

  export default {
    data() {
      return {
        data: {},
        uuid: '',
        show_loading: true,
        loading_size: 60,
      };
    },
    components: {
      Loading,
    },
    methods: {
      reqData() {
        this.show_loading = true;
        const url = `/company/lawsuit_content_data/${this.uuid}`;
        this.$http.get(url).then((res) => {
          this.show_loading = false;
          this.data = res.body.data;
        }).catch(() => {
          this.show_loading = false;
          this.$Message.error('服务器出错');
        });
      },
    },
    mounted() {
      this.uuid = this.$route.params.uuid;
      this.reqData();
    },
  };
</script>

<style media="screen" scoped>
  .content-root {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  .content-container {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
  }

  .content-header {
    text-align: center;
    margin: 30px auto;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }

  .content-foot {
    width: 100%;
    height: 50px;
    float: left;
    margin: 20px auto 20px;
  }

  .loading-container {
    width: 200px;
    height: 200px;
    position: fixed;
    left: 45%;
    top: 45%;
  }

  li {
    list-style: none
  }

  .source {
    margin-top: 10px;
  }
</style>
