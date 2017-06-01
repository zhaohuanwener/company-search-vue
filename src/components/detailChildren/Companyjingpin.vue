<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="rows"
    mod="companyjingpin" :data_cb="data_cb"
  ></Mytable>
</template>

<script>
  import moment from 'moment';
  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      return {
        columns: [{
          title: '产品',
          key: 'companyName',
          width: 200,
        }, {
          title: '地区',
          key: 'location',
          width: 150,
        }, {
          title: '当前轮次',
          key: 'round',
          width: 100,
        }, {
          title: '行业',
          key: 'hangye',
          width: 100,
        }, {
          title: '业务',
          key: 'yewu',
          width: 300,
        }, {
          title: '成立时间',
          key: 'setupDate',
          width: 150,
          render(h, params) {
            const setupDate = params.row.setupDate;
            let dateText = '-';
            if (setupDate) {
              dateText = moment(params.row.setupDate).format('YYYY-MM-DD');
            }
            return h('span', dateText);
          },
        }, {
          title: '估值',
          key: 'value',
          render(h, params) {
            const value = params.row.value || '-';
            return h('span', value);
          },
        }],
        company_id: '',
      };
    },
    methods: {
    },
    components: {
      Mytable,
    },
    created() {
      this.company_id = this.$route.query.name;
    },
  };
</script>
