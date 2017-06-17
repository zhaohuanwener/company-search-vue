<template>
  <Mytable  :columns="columns" :company_id="company_id" :company_name="company_name" total_field="viewtotal" data_field="items"
    mod="bid" :data_cb="data_cb"
  ></Mytable>
</template>


<script>

  import Mytable from '@/common/components/Mytable';
  import moment from 'moment';

  export default {
    data() {
      return {
        columns: [{
          title: '发布时间',
          key: 'createTime',
          width: 130,
        }, {
          title: '标题',
          key: 'title',
          width: 650,
          render(h, p) {
            const arr = p.row.title.split('-');
            return h('a', {
              on: {
                click() {
                  const url = `/#/bid_content/${arr[1]}`;
                  window.open(url);
                },
              },
            }, arr[0]);
          },
        }, {
          title: '采购人',
          key: 'purchaser',
        }],
        company_id: '',
        company_name: '',
      };
    },
    components: {
      Mytable,
    },
    methods: {
      data_cb(data) {
        data = data.map(function(d) {
          d.createTime = moment(parseInt(d.createTime, 10)).format('YYYY-MM-DD');
          d.title = `${d.title}-${d.uuid}`;
          return d;
        });
        return data;
      },
    },
    created() {
      this.company_id = this.$route.query.id;
      this.company_name = this.$route.query.name;
    },
  };
</script>
