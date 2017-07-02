<template id="">
  <div class="data-container">
    <div class="loading-container" v-if="show_loading">
      <Loading :size="loading_size"></Loading>
    </div>
    <div class="" v-if="!show_loading">
      <Table border :columns="columns" :data="displayData" class="default_table"  size="large"></Table>
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

  import Loading from '@/common/components/Loading';

  export default {
    data() {
      return {
        show_loading: false,
        ps: 10,
        pn: 1,
        total: 0,
        loading_size: 60,
        displayData: [],
        allData: [],
        columns: [{
          title: '审核时间',
          key: 'examineDate',
        }, {
          title: '网站名称',
          key: 'webName',
        }, {
          title: '网站首页',
          key: 'webSite',
          render(h, p) {
            const urls = p.row.webSite.join(';');
            const lis = urls.split(';').map(u => h('li', [h('a', {
              on: {
                click() {
                  window.open(`http://${u}`);
                },
              },
            }, u)]));
            return h('ul', lis, urls);
          },
        }, {
          title: '域名',
          key: 'ym',
        }, {
          title: '备案号',
          key: 'liscense',
        }, {
          title: '单位性质',
          key: 'companyType',
        }],
      };
    },
    components: {
      Loading,
    },
    methods: {
      reqData() {
        this.show_loading = true;
        const url = `/detail/${this.company_id}/icp?ps=${this.ps}&pn=${this.pn}`;
        this.$http.get(url).then((res) => {
          this.allData = res.body.data.data;
          this.total = this.allData.length;
          this.show_loading = false;
          this.showData();
        }).catch((err) => {
          this.show_loading = false;
          this.$Message.error(`服务器出错: ${err.message}`);
        });
      },
      showData() {
        const start = ((this.pn - 1) * this.ps);
        const end = start + this.ps;
        this.displayData = this.allData.slice(start, end);
      },
      page_btn_change(page) {
        this.pn = page;
        this.showData();
      },
      page_size_change(pagesize) {
        this.ps = pagesize;
        this.showData();
      },
    },
    created() {
      this.company_id = this.$route.query.id;
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
