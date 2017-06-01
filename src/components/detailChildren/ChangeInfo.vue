<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="result"
    mod="changeinfo"
  ></Mytable>
</template>


<script>

  import Mytable from '@/common/components/Mytable';


  export default {
    data() {
      return {
        columns: [{
          title: '变更项目',
          key: 'changeItem',
          width: 100,
        }, {
          title: '变更时间',
          key: 'changeTime',
          width: 120,
        }, {
          title: '变更前',
          key: 'contentBefore',
          width: 450,
        }, {
          title: '变更后',
          key: 'contentAfter',
          width: 460,
        }],
        company_id: '',
      };
    },
    components: {
      Mytable,
    },
    methods: {
    },
    created() {
      this.company_id = this.$route.query.id;
    },
  };
</script>
