<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="count" data_field="items"
    mod="zhixing" :data_cb="data_cb"
  ></Mytable>
</template>


<script>

  import Mytable from '@/common/components/Mytable';
  import moment from 'moment';

  export default {
    data() {
      return {
        columns: [{
          title: '立案日期',
          key: 'caseCreateTime',
        }, {
          title: '执行标准',
          key: 'execMoney',
        }, {
          title: '案号',
          key: 'caseCode',
        }, {
          title: '执行法院',
          key: 'execCourtName',
        }],
        company_id: '',
      };
    },
    components: {
      Mytable,
    },
    methods: {
      data_cb(data) {
        data = data.map(function(d) {
          d.caseCreateTime = moment(d.caseCreateTime).format('YYYY-MM-DD');
          return d;
        });
        return data;
      },
    },
    created() {
      this.company_id = this.$route.query.id;
    },
  };
</script>
