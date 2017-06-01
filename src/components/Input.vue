<template id="">
  <div>
    <Dropdown trigger="custom" :visible="show_drop_down" class="input-container" placement="bottom-start" @on-click="show_company_detail">
      <Input v-model="value" size="large" placeholder="请输入企业名称" @input="search" class="ipt">
        <Button slot="append" @click="show_search_result">搜索</Button>
      </Input>
      <Dropdown-menu slot="list">

          <Loading v-if="!drop_down_data.length" :size="loadding_size" :content="loading_text"></Loading>
          <Dropdown-item v-for="item in drop_down_data" :name="item.id_name" key="item.id">{{ item.name }}</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
  </div>
</template>


<script type="text/javascript">

import Loading from '../common/components/Loading';

export default {
  data() {
    return {
      value: '',
      show_drop_down: false,
      drop_down_data: [],
      loadding_size: 20,
      loading_text: 'Loading',
    };
  },
  components: {
    Loading,
  },
  props: {
    input_value: {
      type: String,
    },
  },
  created() {
    this.value = this.input_value || '';
  },
  methods: {
    search() {
      if (!this.value) {
        this.show_drop_down = false;
        this.drop_down_data = [];
        return;
      }
      this.show_drop_down = true;
      this.$http.post('/search', {
        name: this.value,
      }).then((res) => {
        this.drop_down_data = res.body.data.map(function(d) {
          d.id_name = `${d.id}-${d.name}`;
          return d;
        });
        if (!this.drop_down_data.length) {
          this.show_drop_down = false;
        }
      }).catch(() => {
        this.drop_down_data = [];
        this.show_drop_down = false;
        this.$Message.error('服务器异常');
      });
    },
    show_company_detail(name) {
      const arr = name.split('-');
      this.$router.push({ name: 'detail', query: { id: arr[0], name: arr[1], mod: 'bj' } });
    },
    show_search_result() {
      this.$router.push({ name: 'search_result', params: { name: this.value } });
    },
  },
};

</script>



<style media="screen">
  @import "../common/css/input.css";
</style>
