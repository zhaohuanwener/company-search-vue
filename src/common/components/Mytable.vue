<template id="">
  <div class="data-container">
    <div class="loading-container" v-if="show_loading">
      <Loading :size="loading_size"></Loading>
    </div>
    <div class="" v-if="!show_loading">
      <Table border :columns="columns" :data="data" class="default_table"  size="large"></Table>
      <Page :total="total" class="page-btn" show-sizer show-elevator @on-change="page_btn_change" placement="top"
      @on-page-size-change="page_size_change"
      :current="pn"
      :page-size="ps"
      show-total
      ></Page>
    </div>
  </div>
</template>


<script>

  import Loading from './Loading';

  export default {
    data() {
      return {
        show_loading: false,
        ps: 10,
        pn: 1,
        total: 0,
        loading_size: 60,
        data: [],
      };
    },
    components: {
      Loading,
    },
    props: {
      columns: {
        type: Array,
      },
      company_id: {
        type: String,
      },
      company_name: {
        type: String,
      },
      mod: {
        type: String,
      },
      total_field: {
        type: String,
      },
      data_field: {
        type: String,
      },
      data_cb: {
        type: Function,
      },
      response_cb: {
        type: Function,
      },
    },
    methods: {
      reqData() {
        this.show_loading = true;
        const url = `/company/${this.company_id || this.company_name}/${this.mod}?ps=${this.ps}&pn=${this.pn}`;
        this.$http.get(url).then((res) => {
          res = this.response_cb ? this.response_cb(res) : res;
          const dataField = this.data_field || 'result';
          const totalField = this.total_field || 'total';
          const dataBody = res.body.data.page || res.body.data;
          const data = dataBody[dataField];
          this.total = dataBody[totalField];
          this.data = this.data_cb ? this.data_cb(data) : data;
          this.show_loading = false;
        }).catch((err) => {
          this.show_loading = false;
          this.$Message.error(`服务器出错: ${err.message}`);
        });
      },
      page_btn_change(page) {
        this.pn = page;
        this.reqData();
      },
      page_size_change(pagesize) {
        this.ps = pagesize;
        this.reqData();
      },
    },
    created() {
      this.reqData();
    },
  };
</script>

<style media="screen">

.default_table {
  margin-top: 30px;
}

.page-btn {
  margin-top: 20px;
  margin-left: 20px;
  float: right;
}

</style>
