<style type="text/css">
  .app-icon {
    width: 50px;
    height: 50px;
    margin-top: 5px;
    border: 1px solid #eee;
    border-radius: 5px;
}
</style>

<template>
<div>
  <Mytable  :columns="columns" :company_id="company_id" total_field="count" data_field="items"
    mod="productinfo" :data_cb="data_cb"
  ></Mytable>

  <Modal
        v-model="showModal"
        title="公告详情"
        class="modal"
    >
      <ul class="modal">
        <li>名称: {{modalContent.name}}</li>
        <li>产品简称：{{modalContent.filterName}}</li>
        <li>产品分类：{{modalContent.type}}</li>
        <li>领域: {{modalContent.classes}}</li>
        <li>描述: <span v-html="modalContent.brief"></span></li>
      </ul>
    </Modal>

</div>
</template>


<script>

  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      const self = this;
      return {
        columns: [{
          title: '图标',
          key: 'icon',
          width: 100,
          render(h, p) {
            return h('img', {
              attrs: {
                class: 'app-icon',
                src: p.row.icon,
              },
            });
          },
        }, {
          title: '产品名称',
          key: 'name',
          width: 300,
        }, {
          title: '产品简称',
          key: 'filterName',
        }, {
          title: '产品分类',
          key: 'type',
        }, {
          title: '领域',
          key: 'classes',
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
        modalContent: {},
        showModal: false,
      };
    },
    components: {
      Mytable,
    },
    methods: {
      showDetail(row) {
        this.modalContent = row;
        this.showModal = true;
      },
    },
    created() {
      this.company_id = this.$route.query.id;
    },
  };
</script>
