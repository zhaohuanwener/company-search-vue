<template>
  <div class="">

    <Mytable  :columns="columns" :company_id="company_id" total_field="count" data_field="items"
      mod="equity" :data_cb="data_cb"
    ></Mytable>

    <Modal
        v-model="showModal"
        title="股权出质详情"
        class="modal"
    >
      <ul class="modal">
        <li>登记日：{{modalContent.regDate}}</li>
        <li>登记编号： {{modalContent.regNumber}}</li>
        <li>状态：{{modalContent.state}}</li>
        <li>出质股权数额：{{modalContent.equityAmount}}</li>
        <li>出质人：{{modalContent.pledgor}}</li>
        <li>出质人证件号码：{{modalContent.certifNumber}}</li>
        <li>质权人：{{modalContent.pledgee}}</li>
        <li>质权人号码：{{modalContent.certifNumberR}}</li>
        <li>备注 : <span style="color: orange">所报材料真实合法，一切责任由当事人自负</span></li>
      </ul>
    </Modal>
  </div>
</template>

<script>
  import moment from 'moment';
  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      const self = this;
      return {
        showModal: false,
        modalContent: {},
        columns: [{
          title: '公告时间',
          key: 'regDate',
          width: 130,
        }, {
          title: '登记编号',
          key: 'regNumber',
          width: 280,
        }, {
          title: '出质人',
          key: 'pledgor',
          width: 100,
        }, {
          title: '质权人',
          key: 'pledgee',
          width: 350,
        }, {
          title: '状态',
          key: 'state',
          render(h, p) {
            return h('span', p.row.state.split('-')[0]);
          },
        }, {
          title: '操作',
          key: 'action',
          width: 100,
          render(h, p) {
            return h('Button', {
              on: {
                click() {
                  self.showDetail(p.row);
                },
              },
              props: {
                type: 'primary',
                size: 'small',
              },
            }, '详情');
          },
        }],
        company_id: '',
      };
    },
    methods: {
      data_cb(data) {
        return data.map(function(d) {
          d.regDate = moment(d.regDate).format('YYYY-MM-DD');
          d.state = `${d.state}-${d.equityAmount}-${d.certifNumber}-${d.certifNumberR}`;
          return d;
        });
      },
      showDetail(row) {
        const arr = row.state.split('-');
        this.modalContent = {
          regDate: row.regDate,
          regNumber: row.regNumber,
          state: arr[0],
          equityAmount: arr[1],
          pledgor: row.pledgor,
          certifNumber: arr[2],
          pledgee: row.pledgee,
          certifNumberR: arr[3],
        };
        this.showModal = true;
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


<style media="screen" scoped>
  .modal {
    font-size: 15px;
  }

  .modal li {
    margin-top: 15px;
  }
</style>
