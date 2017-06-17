<template>
<div>
  <Mytable  :columns="columns" :company_id="company_id" total_field="count" data_field="items"
    mod="taxcredit" :data_cb="data_cb"
  ></Mytable>
</div>
</template>


<script>

  import Mytable from '@/common/components/Mytable';
  import moment from 'moment';

  export default {
    data() {
      return {
        columns: [{
          title: '年份',
          key: 'year',
        }, {
          title: '纳税评级',
          key: 'grade',
        }, {
          title: '类型',
          key: 'type',
        }, {
          title: '纳税人识别号',
          key: 'idNumber',
        }, {
          title: '评价单位',
          key: 'evalDepartment',
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
