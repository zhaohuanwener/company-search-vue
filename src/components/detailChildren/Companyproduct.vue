<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="rows"
    mod="companyproduct" :data_cb="data_cb"
  ></Mytable>
</template>

<script>
  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      return {
        columns: [{
          title: '产品名',
          key: 'product',
          width: 200,
        }, {
          title: '产品logo',
          key: 'logo',
          width: 150,
          render(h, params) {
            return h('img', {
              attrs: {
                src: params.row.logo,
                class: 'app-icon',
              },
            });
          },
        }, {
          title: '描述',
          render(h, params) {
            return h('ul', [h('li', params.row.hangye), h('li', params.row.yewu)]);
          },
        }],
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

<style media="screen">
  li {
    list-style: none;
  }

  .app-icon {
    width: 50px;
    height: 50px;
    margin-top: 5px;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  .product-container {
    width: 100%;
    height: 100%;
    border: 1px solid red
  }

  .page {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
</style>
