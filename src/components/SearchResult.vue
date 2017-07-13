<template id="">
  <div class="result-container">
    <div class="search_result">
      <div class="input-container">
        <SearchInput :input_value="input_vaue" @aptResult="onAptResult"></SearchInput>
      </div>

      <ul class="result-list">
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

</template>


<script type="text/javascript">
  import SearchInput from './Input';

  export default {
    data() {
      return {
        input_vaue: '',
        result: [],
      };
    },
    components: {
      SearchInput,
    },
    methods: {
      show_detail(id, name) {
        this.$router.push({
          name: 'detail',
          query: {
            id,
            name: name.replace('<span style="color:red">', '').replace('</span>', ''),
          },
        });
      },
      showResult() {
        const name = this.$route.params.name || '';
        this.input_vaue = name;
        this.$http.post('/search', {
          name,
        }).then((res) => {
          this.result = res.body.data.map(function(d) {
            d.name = d.name.replace(name, `<span style="color:red">${name}</span>`);
            return d;
          });
        }).catch(() => {
          this.$Message.error('服务器出错');
        });
      },
      onAptResult(data) {
        this.result = data;
        console.log(data);
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
    overflow-y: scroll;
    margin-top: 120px
  }

  .search_result {
    width: 520px;
    margin: 0 auto;
  }

  .result-list {
    margin: 10px auto;
  }

</style>
