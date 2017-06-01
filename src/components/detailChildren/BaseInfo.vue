<template id="">
  <div class="info-container">
    <Loading :size="loading_size" v-if="show_loading"></Loading>
    <div class="data-container" v-if="!show_loading">
      <Card class="info-header">
      <div>
          <div class="logo-container">
              <img :src="info.logo" class="company-logo">
          </div>
          <table class="normal-table header-table">
              <tr>
                  <td>
                      <h4>
                          {{ info.name }}
                      </h4>
                  </td>
                  <td>
                      &nbsp&nbsp&nbsp&nbsp&nbsp
                  </td>
              </tr>

              <tr>
                  <td>
                      电话：{{ info.phoneNumber }}
                  </td>
                  <td>
                      邮箱：{{ info.mail }}
                  </td>
              </tr>

              <tr>
                  <td>
                      网址： <span v-html="info.webAddress"></span>
                  </td>
                  <td>
                      地址：{{ info.regLocation }}
                  </td>
              </tr>

          </table>
      </div>
      </Card>

      <div class="info-body">
          <span class="title">基本信息</span>

          <Table border stripe size="large" :columns="base_info_table_columns" :data="base_info_table_data" class="base-table"></Table>

          <table class="normal-table left">
              <tr>
                  <td>工商注册号：{{ info.regNumber }}</td>
                  <td>组织机构代码：{{ info.orgNumber }}</td>
              </tr>

              <tr>
                  <td>统一信用代码：{{ info.creditCode }}</td>
                  <td>企业类型：{{ info.companyOrgType }}</td>
              </tr>

              <tr>
                  <td>行业：{{ info.industry }}</td>
                  <td>营业期限：{{ info.businessTerm }}</td>
              </tr>

              <tr>
                  <td>核准日期：{{ info.approvedTime }}</td>
                  <td>登记机关：{{ info.regInstitute }}</td>
              </tr>

              <tr>
                  <td>注册地址：{{ info.regLocation }}</td>
                  <td></td>
              </tr>
          </table>
          <div class="business-scope">
              <span>经营范围：</span> <span>{{ info.businessScope }}</span>
          </div>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
  import Loading from '../../common/components/Loading';

  export default {
    data() {
      return {
        show_loading: true,
        info: {},
        loading_size: 60,
        base_info_table_columns: [{
          title: '法人代表',
          key: 'legalPersonName',
        }, {
          title: '注册资本',
          key: 'regCapital',
        }, {
          title: '注册时间',
          key: 'fromTime',
        }, {
          title: '经营状态',
          key: 'regStatus',
        }],
        base_info_table_data: [],
      };
    },
    components: {
      Loading,
    },
    methods: {

    },
    created() {
      const id = this.$route.query.id;
      if (!id) {
        return false;
      }
      this.$http.get(`/company/${id}/info`).then((res) => {
        this.info = res.body.data;
        const webAddress = this.info.webAddress;
        this.info.webAddress = webAddress === '暂无' ? '暂无' : `<a href="${webAddress}">${webAddress}</a>`;
        this.base_info_table_data = [{
          legalPersonName: this.info.legalPersonName,
          regCapital: this.info.regCapital,
          fromTime: this.info.fromTime,
          regStatus: this.info.regStatus,
        }];
        this.show_loading = false;
      }).catch(() => {
        this.show_loading = false;
        this.$Message.error('服务器出错');
      });
    },
  };
</script>


<style media="screen">

  .data-container {
    width: 100%;
    height: 600px;
  }

  .info-header {
    width: 100%;
    height: 200px;
    margin: 0 auto;
  }

  .logo-container {
    width: 150px;
    height: 120px;
    border: 1px solid #eee;
    margin-left: 100px;
    margin-top: 20px;
    float: left;
  }

  .company-logo {
    width: 100%;
    height: 100%;
  }

  .normal-table {
    width: 100%;
    height: 300px;
    padding-top: 5px;
  };


  .header-table {
    width: 60%;
    height: 150px;
    float: left;
    margin-left: 120px;
    margin-top: 5px;
    padding-top: 0
  }

  .info-body {
    margin-top: 30px;
    margin-right: 2px;
    font-size: 15px;
    padding-bottom: 20px;
  }

  .base-table {
    margin-top: 10px;
    font-size: 15px;
  }

</style>
