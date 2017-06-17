<style type="text/css">
  .modal-img {
    width: 100%;
  }
</style>

<template>
  <div class="">

    <Mytable  :columns="columns" :company_id="company_id" total_field="viewtotal" data_field="items"
      mod="copyr" :data_cb="data_cb"
    ></Mytable>

    <Modal
        v-model="showModal"
        title="著作详情"
        class="modal"
    >
      <ul class="modal">
        <li>软件全称: {{modalContent.fullname}}</li>
        <li>软件简称: {{modalContent.simplename}}</li>
        <li>分类号: {{modalContent.catnum}}</li>
        <li>著作权人(国籍):{{modalContent.authorNationality}}</li>
        <li>首次发表日期:{{formatDate(modalContent.publishtime)}}</li>
        <li>登记号:{{modalContent.regnum}}</li>
        <li>版本号: {{modalContent.version}}</li>
        <li>登记日期: {{formatDate(modalContent.createTime)}}</li>
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
          title: '批准日期',
          key: 'regtime',
          render(h, p) {
            return h('span', self.formatDate(p.row.regtime));
          },
        }, {
          title: '软件全称',
          key: 'fullname',
          width: 260,
        }, {
          title: '软件简称',
          key: 'simplename',
        }, {
          title: '登记号',
          key: 'regnum',
        }, {
          title: '分类号',
          key: 'catnum',
        }, {
          title: '版本号',
          key: 'version',
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
      formatDate(date) {
        return moment(parseInt(date, 10)).format('YYYY-MM-DD');
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
