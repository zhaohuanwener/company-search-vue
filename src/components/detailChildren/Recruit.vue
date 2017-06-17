<style type="text/css" scoped="scoped">
  .modal {
    font-size: 15px;
  }
</style>
<template>
<div>
  <Mytable  :columns="columns" :company_id="company_id" total_field="totalRows" data_field="companyEmploymentList"
    mod="recruit" :data_cb="data_cb"
  ></Mytable>

  <Modal
        v-model="showModal"
        title="招聘详情"
        class="modal"
    >
      <ul class="modal">
        <li>所在城市: {{modalContent.city}}</li>
        <li>所在区: {{modalContent.district}}</li>
        <li>公司名称: {{modalContent.companyName}}</li>
        <li>工资:{{modalContent.oriSalary}}</li>
        <li>经验: {{modalContent.experience}}</li>
        <li>来源: {{modalContent.source}}</li>
        <li>招聘开始日期: {{modalContent.startdate}}</li>
        <li>招聘截至日期: {{modalContent.enddate}}</li>
        <li>教育: {{modalContent.education}}</li>
        <li>招聘人数: {{modalContent.employerNumber}}</li>
        <li>职位描述 :{{modalContent.description}}</li>
      </ul>
    </Modal>  
</div>
</template>


<script>

  import Mytable from '@/common/components/Mytable';
  import moment from 'moment';

  export default {
    data() {
      const self = this;
      return {
        columns: [{
          title: '发布时间',
          key: 'createTime',
          width: 130,
        }, {
          title: '招聘职位',
          key: 'title',
          width: 300,
        }, {
          title: '薪资',
          key: 'oriSalary',
        }, {
          title: '工作经验',
          key: 'experience',
        }, {
          title: '招聘人数',
          key: 'employerNumber',
        }, {
          title: '所在城市',
          key: 'city',
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
        showModal: false,
        modalContent: {},
      };
    },
    components: {
      Mytable,
    },
    methods: {
      formatDate(date) {
        return moment(parseInt(date, 10)).format('YYYY-MM-DD');
      },
      data_cb(data) {
        const self = this;
        data = data.map(function(d) {
          d.createTime = self.formatDate(d.createTime);
          d.startdate = self.formatDate(d.startdate);
          d.enddate = self.formatDate(d.enddate);
          return d;
        });
        return data;
      },
      showDetail(row) {
        this.modalContent = row;
        this.showModal = true;
      },
    },
    created() {
      this.company_id = this.$route.query.name;
    },
  };
</script>
