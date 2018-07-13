<template id="">
  <div>
    <Dropdown trigger="custom" :visible="show_drop_down" class="input-container" placement="bottom-start" @on-click="show_company_detail">
      <Input v-model="value" size="large" placeholder="请输入企业名称" @input="search" class="ipt" autofocus
      @on-enter="this.show_search_result"  v-on:change="debounce(search)">
        <Button slot="append" @click="this.show_search_result" :loading="loading">搜索</Button>
      </Input>
      <Dropdown-menu slot="list">
          <Spin size="large" v-if="!drop_down_data.length">
              <Icon type="load-c" class="demo-spin-icon-load" size="15"></Icon>
              <div>loading</div>
          </Spin>
          <Dropdown-item v-for="item in drop_down_data" :name="item.id_name" :key="item.id" v-html='item.name'></Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
  </div>
</template>


<script type="text/javascript">

function debounce (fn, idle = 200) {
  let last;
  return function (...args) {
    const ctx = this;
    if (last) {
      clearTimeout(last);
    }
    last = setTimeout(() => {
      fn.apply(ctx, args);
    }, idle);
  };
}

export default {
  data() {
    return {
      value: '',
      show_drop_down: false,
      drop_down_data: [],
      loading: false,
    };
  },
  props: {
    input_value: {
      type: String,
    },
    btnClick: {
      type: Function,
    },
  },
  created() {
    this.value = this.input_value || '';
  },
  methods: {
    search(dropDown) {
      if (!this.value) {
        this.show_drop_down = false;
        this.drop_down_data = [];
        return;
      }
      if (dropDown) {
        this.show_drop_down = true;
      }
      this.runSearch();
    },
    show_company_detail(name) {
      const arr = name.split('-');
      this.$router.push({ name: 'baseinfo', query: { id: arr[0], name: arr[1], mod: 'bj' } });
      // this.$router.push({ name: 'detail', query: { id: arr[0], name: arr[1], mod: 'bj' } });
    },
    show_search_result() {
      if (!this.value) {
        return;
      }
      this.loading = true;
      const params = { name: this.value, data: JSON.stringify(this.drop_down_data) };
      this.$router.push({ name: 'search_result', params });
    },
  },
  mounted () {
    this.runSearch = debounce(() => {
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
        // this.$Message.error('服务器异常');
      });
    }, 500);
  }
};

</script>



<style media="screen">
  @import "../common/css/input.css";
</style>
