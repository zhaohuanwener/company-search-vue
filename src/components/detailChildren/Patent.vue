<style type="text/css">
  .modal-img {
    width: 100%;
  }
</style>

<template>
  <div class="">

    <Mytable  :columns="columns" :company_id="company_id" total_field="viewtotal" data_field="items"
      mod="patent" :data_cb="data_cb"
    ></Mytable>

    <Modal
        v-model="showModal"
        title="公告详情"
        class="modal"
    >
      <ul class="modal">
        <li><img :src="modalContent.imgUrl" class="modal-img"></li>
        <li>申请公布号: {{modalContent.applicationPublishNum}}</li>
        <li>申请号: {{modalContent.patentNum}}</li>
        <li>分类号: {{modalContent.mainCatNum}}</li>
        <li>名称:{{modalContent.patentName}}</li>
        <li>地址: {{modalContent.address}}</li>
        <li>发明人: {{modalContent.inventor}}</li>
        <li>申请人: {{modalContent.applicantName}}</li>
        <li>申请日: {{modalContent.applicationTime}}</li>
        <li>申请公布日: {{modalContent.applicationPublishTime}}</li>
        <li>代理机构: {{modalContent.agency}}</li>
        <li>代理人: {{modalContent.agent}}</li>
        <li>摘要: {{modalContent.abstracts}}</li>
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
          title: '申请公布日',
          key: 'applicationPublishTime',
        }, {
          title: '专利名称',
          key: 'patentName',
        }, {
          title: '申请号',
          key: 'patentNum',
        }, {
          title: '申请公布号',
          key: 'applicationPublishNum',
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
        this.modalContent = row;
        this.showModal = true;
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


<style media="screen" scoped>
  .modal {
    font-size: 15px;
  }

  .modal li {
    margin-top: 15px;
  }
</style>
