<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="result"
    mod="holder" :data_cb="data_cb"
  ></Mytable>
</template>


<script>

  import Mytable from '@/common/components/Mytable';


  export default {
    data() {
      return {
        columns: [{
          title: '股东',
          key: 'name',
        }, {
          title: '出资比例',
          key: 'percent',
        }, {
          title: '认缴出资',
          key: 'amomon',
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
          d.percent = d.capital[0].percent;
          d.amomon = d.capital[0].amomon;
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
