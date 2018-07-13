<template id="">
  <div>
    <Header/>
    <div class="result-container">
      <Loading v-if="showLoading" size="50" class="loading"></Loading>
    <div class="search_result" v-if="!showLoading">
      <div class="input-container">
        <SearchInput :input_value="input_vaue" @aptResult="onAptResult"></SearchInput>
      </div>
      <div class="no-data" v-if="!result.length">
        <h1 >暂无数据</h1>
      </div>
      
      <ul class="result-list" v-if="result.length">
        <li v-for="item in result" :id="item.id" :key="item.id" @click="show_detail(item.id, item.name)" @keyup.enter="show_detail(item.id, item.name)">
          <a href="javascript:return">
          <Card style="width:520px; height: 50px;">
            <span  v-html="item.name"></span>
          </Card>
        </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
  

</template>


<script type="text/javascript">
  import Loading from '@/common/components/Loading';

  import SearchInput from './Input';
  import Header from './Header';

  export default {
    data() {
      return {
        input_vaue: '',
        result: [],
        showLoading: true
      };
    },
    components: {
      SearchInput,
      Header,
      Loading,
    },
    methods: {
      show_detail(id, name) {
        this.$router.push({
          name: 'baseinfo',
          query: {
            id,
            name: name.replace('<em>', '').replace('</em>', ''),
          },
        });
      },
      showResult() {
        const name = this.$route.params.name || '';
        this.input_vaue = name;
        this.$http.post('/searchkey', {
          name,
        }).then((res) => {
          this.result = res.body.data.map(function(d) {
            d.name = d.name.replace(name, `<span style="color:red">${name}</span>`);
            return d;
          });
          this.showLoading = false;
        }).catch((err) => {
          this.$Message.error(err);
          this.showLoading = false;
        });
      },
      onAptResult(data) {
        this.result = data;
      },
    },
    created() {
      this.showResult();
    },
  };
</script>


<style media="screen">
  @import "../common/css/input.css";
  .result-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: 100px
  }

  .search_result {
    width: 520px;
    margin: 0 auto;
  }

  .loading {
    width: 100px;
    height: 100px;
    margin-left: -50px
  }


  .result-list {
    margin: 10px auto;
  }

  .no-data {
    width: 100px;
    height: 100px;
    margin: 80px auto
  }

  em {
    color: red;
    font-style: normal
  }
</style>
