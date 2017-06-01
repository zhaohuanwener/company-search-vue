<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="result"
    mod="investment" :data_cb="data_cb"
  ></Mytable>
</template>

<script>
  import moment from 'moment';
  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      return {
        columns: [{
          title: '被投资企业名称',
          key: 'name',
          render (h, params) {
            const name = params.row.name;
            const arr = name.split('-');
            return h('a', {
              on: {
                click() {
                  window.open(`/#/info?name=${arr[0]}&id=${arr[1]}&mod=bj`);
                },
              },
            }, arr[0]);
          },
          width: 300,
        }, {
          title: '被投资法定代表人',
          key: 'legalPersonName',
          width: 150,
        }, {
          title: '注册资本',
          key: 'regCapital',
          width: 150,
        }, {
          title: '投资数额',
          key: 'amount',
        }, {
          title: '投资占比',
          key: 'percent',
        }, {
          title: '注册时间',
          key: 'estiblishTime',
          width: 150,
        }, {
          title: '状态',
          key: 'regStatus',
        }],
        company_id: '',
      };
    },
    methods: {
      data_cb(data) {
        data = data.map(function(d) {
          d.estiblishTime = moment(d.estiblishTime).format('YYYY-MM-DD');
          d.name = `${d.name}-${d.id}`;
          return d;
        });
        return data;
      },
    },
    components: {
      Mytable,
    },
    created() {
      this.company_id = this.$route.query.id;
    },
  };
</script>
