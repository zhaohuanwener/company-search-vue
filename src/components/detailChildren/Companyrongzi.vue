<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="rows"
    mod="companyrongzi" :data_cb="data_cb"
  ></Mytable>
</template>

<script>
  import moment from 'moment';
  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      return {
        columns: [{
          title: '时间',
          key: 'date',
        }, {
          title: '轮次',
          key: 'round',
        }, {
          title: '估值',
          key: 'value',
        }, {
          title: '金额',
          key: 'money',
        }, {
          title: '比例',
          key: 'moeny',
        }, {
          title: '投资方',
          key: 'organizationName',
        }, {
          title: '新闻来源',
          key: 'newsTitle',
        }],
        company_id: '',
      };
    },
    methods: {
      data_cb(data) {
        return data.map(function(d) {
          d.date = moment(d.date).format('YYYY-MM-DD');
          return d;
        });
      },
    },
    components: {
      Mytable,
    },
    created() {
      this.company_id = this.$route.query.name;
    },
  };
</script>
