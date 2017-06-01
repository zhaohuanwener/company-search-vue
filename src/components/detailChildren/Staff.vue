<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="result"
    mod="staff" :data_cb="data_cb"
  ></Mytable>
</template>


<script>

  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      return {
        columns: [{
          title: '姓名',
          key: 'name',
        }, {
          title: '职务',
          key: 'typeJoin',
        }],
        company_id: '',
      };
    },
    components: {
      Mytable,
    },
    methods: {
      data_cb(data) {
        return data.map(function(d) {
          d.typeJoin = d.typeJoin.join(',');
          return d;
        });
      },
    },
    created() {
      this.company_id = this.$route.query.id;
    },
  };
</script>
