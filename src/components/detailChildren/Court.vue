<template>
  <div class="">

    <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="courtAnnouncements"
      mod="court" :data_cb="data_cb"
    ></Mytable>

    <Modal
        v-model="showModal"
        title="公告详情"
        class="modal"
    >
      <ul class="modal">
        <li>公告时间: {{modalContent.publishdate}}</li>
        <li>上诉方: {{modalContent.party1}}</li>
        <li>被诉方: {{modalContent.party2}}</li>
        <li>公告类型：{{modalContent.bltntypename}}</li>
        <li>法院: {{modalContent.courtcode}}</li>
        <li>公告内容：{{modalContent.content}}</li>
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
          key: 'publishdate',
        }, {
          title: '上诉方',
          key: 'party1',
        }, {
          title: '被诉方',
          key: 'party2',
        }, {
          title: '公告类型',
          key: 'bltntypename',
        }, {
          title: '法院',
          key: 'courtcode',
          render(h, p) {
            return h('span', p.row.courtcode.split('-')[0]);
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
          d.date = moment(d.date).format('YYYY-MM-DD');
          d.courtcode = `${d.courtcode}-${d.content}`;
          return d;
        });
      },
      showDetail(row) {
        this.modalContent = {
          publishdate: row.publishdate,
          party1: row.party1,
          party2: row.party2,
          bltntypename: row.bltntypename,
          courtcode: row.courtcode.split('-')[0],
          content: row.courtcode.split('-')[1],
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
