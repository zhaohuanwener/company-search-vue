<style type="text/css">
  .app-icon {
    width: 50px;
    height: 50px;
    margin-top: 5px;
    border: 1px solid #eee;
    border-radius: 5px;
}
</style>

<template>
<div>
  <Mytable  :columns="columns" :company_id="company_id" total_field="viewtotal" data_field="items"
    mod="tm" :data_cb="data_cb"
  ></Mytable>
</div>
</template>


<script>

  import Mytable from '@/common/components/Mytable';
  import moment from 'moment';

  export default {
    data() {
      const self = this;
      return {
        columns: [{
          title: '申请日期',
          key: 'appDate',
          render(h, p) {
            return h('span', self.formatDate(p.row.appDate));
          },
        }, {
          title: '图标',
          key: 'icon',
          width: 100,
          render(h, p) {
            return h('img', {
              attrs: {
                class: 'app-icon',
                src: p.row.tmPic,
              },
            });
          },
        }, {
          title: '商品名称',
          key: 'tmName',
          width: 260,
        }, {
          title: '注册号',
          key: 'regNo',
        }, {
          title: '类别',
          key: 'intCls',
        }, {
          title: '状态',
          key: 'status',
        }],
        company_id: '',
      };
    },
    components: {
      Mytable,
    },
    methods: {
      formatDate(date) {
        return moment(parseInt(date, 10)).format('YYYY-MM-DD');
      },
    },
    created() {
      this.company_id = this.$route.query.id;
    },
  };
</script>
