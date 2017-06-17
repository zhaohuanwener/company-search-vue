<template>
<div>
  <Mytable  :columns="columns" :company_id="company_id" :company_name="company_name" total_field="count" data_field="items"
    mod="check" :data_cb="data_cb"
  ></Mytable>
</div>
</template>


<script>

  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      return {
        columns: [{
          title: '日期',
          key: 'checkDate',
        }, {
          title: '类型',
          key: 'checkType',
        }, {
          title: '结果',
          key: 'checkResult',
        }, {
          title: '检查实施机关',
          key: 'checkOrg',
        }],
        company_id: '',
        company_name: '',
      };
    },
    components: {
      Mytable,
    },
    created() {
      this.company_id = this.$route.query.id;
      this.company_name = this.$route.query.name;
    },
  };
</script>
