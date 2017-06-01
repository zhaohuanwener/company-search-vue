<template>
  <div class="">

    <Mytable  :columns="columns" :company_id="company_id" total_field="count" data_field="items"
      mod="punishment" :data_cb="data_cb"
    ></Mytable>

    <Modal
        v-model="showModal"
        title="公告详情"
        class="modal"
    >
      <ul class="modal">
        <li>决定书文号: {{modalContent.punishNumber}}</li>
        <li>类型: {{modalContent.type}}</li>
        <li>处罚内容：{{modalContent.content}}</li>
        <li>决定日期：{{modalContent.decisionDate}}</li>
        <li>决定机关：{{modalContent.departmentName}}</li>
        <li>法人：{{modalContent.legalPersonName}}</li>
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
          title: '决定日期',
          key: 'decisionDate',
          width: 130,
        }, {
          title: '决定书文号',
          key: 'punishNumber',
          width: 280,
        }, {
          title: '类型',
          key: 'type',
          width: 380,
        }, {
          title: '决定机关',
          key: 'departmentName',
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
          d.date = moment(d.date).format('YYYY-MM-DD');
          d.courtcode = `${d.courtcode}-${d.content}`;
          return d;
        });
      },
      showDetail(row) {
        this.modalContent = {
          punishNumber: row.punishNumber,
          type: row.type,
          content: row.content || '-',
          decisionDate: row.decisionDate,
          departmentName: row.departmentName,
          legalPersonName: row.legalPersonName,
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
