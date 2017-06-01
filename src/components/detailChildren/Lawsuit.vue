<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="items"
    mod="lawsuit" :data_cb="data_cb"
  ></Mytable>
</template>

<script>
  import moment from 'moment';
  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      return {
        columns: [{
          title: '日期',
          key: 'submittime',
          width: 150,
          render(h, p) {
            const subTime = parseInt(p.row.submittime, 10);
            const date = subTime ? moment(subTime).format('YYYY-MM-DD') : '-';
            return h('span', date);
          },
        }, {
          title: '裁判文书',
          key: 'title',
          width: 550,
          render(h, p) {
            const arr = p.row.title.split('-');
            return h('a', {
              on: {
                click() {
                  window.open(`/#/lawsuit_content/${arr[1]}`);
                },
              },
            }, arr[0]);
          },
        }, {
          title: '案件类型',
          key: 'casetype',
          width: 160,
        }, {
          title: '案件号',
          key: 'caseno',
          width: 280,
        }],
        company_id: '',
      };
    },
    methods: {
      data_cb(data) {
        return data.map(function(d) {
          d.title = `${d.title}-${d.uuid}`;
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
