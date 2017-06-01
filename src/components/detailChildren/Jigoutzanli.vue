<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="rows"
    mod="jigoutzanli" :data_cb="data_cb"
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
          width: 120,
        }, {
          title: '轮次',
          key: 'lunci',
          width: 100,
        }, {
          title: '金额',
          key: 'money',
          width: 100,
        }, {
          title: '投资方',
          key: 'organization_name',
          width: 300,
        }, {
          title: '产品',
          key: 'product',
          width: 100,
          render(h, params) {
            const arr = params.row.product.split('-');
            const productName = arr[0];
            const id = arr[1];
            const companyName = arr[2];
            let ele;
            if ((companyName && id) && (companyName !== 'undefined' && id !== 'undefined')) {
              ele = h('a', {
                on: {
                  click() {
                    window.open(`/#/info?name=${companyName}&id=${id}&mod=bj`);
                  },
                },
              }, productName);
            } else {
              ele = h('span', productName);
            }
            return ele;
          },
        }, {
          title: '地区',
          key: 'location',
          width: 100,
        }, {
          title: '行业',
          key: 'hangye1',
        }, {
          title: '业务',
          key: 'yewu',
        }],
        company_id: '',
      };
    },
    methods: {
      data_cb(data) {
        return data.map(function(d) {
          d.date = moment(d.date).format('YYYY-MM-DD');
          d.product = `${d.product}-${d.graph_id}-${d.company}`;
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
