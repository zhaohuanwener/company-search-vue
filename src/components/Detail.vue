<template>
  <div class="detail-container">
      <div class="side-menu">
            <Menu :active-name="active_menu"
            width="auto"
            :open-names="open_names"
            @on-select="reqData"
            accordion
            @on-open-change="openMenu">
                <Submenu name="bj">
                    <template slot="title">
                      <Icon type="help-buoy"></Icon>
                        企业背景
                    </template>
                    <Menu-item name="bj_info">
                      基本信息
                    </Menu-item>
                    <Menu-item name="bj_staff" :class="{disabled: allCount.staffCount.disabled}">
                      主要人员
                      <span class="badge">{{allCount.staffCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="bj_holder" :class="{disabled: allCount.holderCount.disabled}">
                      股东信息
                      <span class="badge">{{allCount.holderCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="bj_investment" :class="{disabled: allCount.inverstCount.disabled}">
                      对外投资
                      <span class="badge">{{allCount.inverstCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="bj_changeinfo" :class="{disabled: allCount.changeCount.disabled}">
                      变更记录
                      <span class="badge">{{allCount.changeCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="bj_branch" class="disabled" :class="{disabled: allCount.branchCount.disabled}">
                      分支机构
                      <span class="badge">{{allCount.branchCount.value}}</span>
                    </Menu-item>
                </Submenu>

                <Submenu name="dev">
                    <template slot="title">
                        <Icon type="arrow-graph-up-right"></Icon>
                        企业发展
                    </template>
                    <Menu-item name="dev_companyrongzi" :class="{disabled: allCount.companyRongzi.disabled}">
                      融资历史
                      <span class="badge">{{allCount.companyRongzi.value}}</span>
                    </Menu-item>
                    <Menu-item name="dev_companyteammember" :class="{disabled: allCount.companyTeammember.disabled}">
                      核心团队
                      <span class="badge">{{allCount.companyTeammember.value}}</span>
                    </Menu-item>
                    <Menu-item name="dev_companyproduct" :class="{disabled: allCount.companyProduct.disabled}">
                      企业业务
                      <span class="badge">{{allCount.companyProduct.value}}</span>
                    </Menu-item>
                    <Menu-item name="dev_jigoutzanli" :class="{disabled: allCount.jigouTzanli.disabled}">
                      投资事件
                      <span class="badge">{{allCount.jigouTzanli.value}}</span>
                    </Menu-item>
                    <Menu-item name="dev_companyjingpin" :class="{disabled: allCount.companyJingpin.disabled}">
                      竞品信息
                      <span class="badge">{{allCount.companyJingpin.value}}</span>
                    </Menu-item>
                </Submenu>

                <Submenu name="sifa">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        司法风险
                    </template>
                    <Menu-item name="sifa_lawsuit" :class="{disabled: allCount.lawsuitCount.disabled}">
                      法律诉讼
                      <span class="badge">{{allCount.lawsuitCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="sifa_court" :class="{disabled: allCount.courtCount.disabled}">
                      法院公告
                      <span class="badge">{{allCount.courtCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="" class="disabled">
                      失信人
                      <span class="badge">0</span>
                    </Menu-item>
                    <Menu-item name="sifa_zhixing" :class="{disabled: allCount.zhixing.disabled}">
                      被执行人
                      <span class="badge">{{allCount.zhixing.value}}</span>
                    </Menu-item>
                </Submenu>

                <Submenu name="jyfx">
                    <template slot="title">
                        <Icon type="flash-off"></Icon>
                        经营风险
                    </template>
                    <Menu-item name="jyfx_abnormal" :class="{disabled: allCount.abnormalCount.disabled}">
                      经营异常
                      <span class="badge">{{allCount.abnormalCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyfx_punishment" :class="{disabled: allCount.punishment.disabled}">
                      行政处罚
                      <span class="badge">{{allCount.punishment.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyfx_illegal" :class="{disabled: allCount.illegalCount.disabled}">
                      严重违法
                      <span class="badge">{{allCount.illegalCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyfx_equity" :class="{disabled: allCount.equityCount.disabled}">
                      股权出质
                      <span class="badge">{{allCount.equityCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyfx_mortgage" :class="{disabled: allCount.mortgageCount.disabled}">
                      动产抵押
                      <span class="badge">{{allCount.mortgageCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyfx_owntax" :class="{disabled: allCount.ownTaxCount.disabled}">
                      欠税公告
                      <span class="badge">{{allCount.ownTaxCount.value}}</span>
                    </Menu-item>
                </Submenu>


                <Submenu name="jyzk">
                    <template slot="title">
                        <Icon type="ios-list"></Icon>
                        经营状况
                    </template>
                    <Menu-item name="jyzk_bid" :class="{disabled: allCount.bidCount.disabled}">
                      招投标
                      <span class="badge">{{allCount.bidCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyfx_bond" :class="{disabled: allCount.bondCount.disabled}">
                      债券信息
                      <span class="badge">{{allCount.bondCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyfx_goudi" :class="{disabled: allCount.goudiCount.disabled}">
                      购地信息
                      <span class="badge">{{allCount.goudiCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyzk_recruit" :class="{disabled: allCount.recruitCount.disabled}">
                      招聘
                      <span class="badge">{{allCount.recruitCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyzk_taxcredit" :class="{disabled: allCount.taxCreditCount.disabled}">
                      税务评级
                      <span class="badge">{{allCount.taxCreditCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyzk_check" :class="{disabled: allCount.checkCount.disabled}">
                      抽查检查
                      <span class="badge">{{allCount.checkCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyzk_productinfo" :class="{disabled: allCount.productinfo.disabled}">
                      产品信息
                      <span class="badge">{{allCount.productinfo.value}}</span>
                    </Menu-item>
                    <Menu-item name="jyfx_qualification" :class="{disabled: allCount.qualification.disabled}">
                      资质证书
                      <span class="badge">{{allCount.qualification.value}}</span>
                    </Menu-item>
                </Submenu>


                <Submenu name="zscq">
                    <template slot="title">
                        <Icon type="ios-bookmarks"></Icon>
                        知识产权
                    </template>
                    <Menu-item name="zscq_tm" :class="{disabled: allCount.tmCount.disabled}">
                      商标信息
                      <span class="badge">{{allCount.tmCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="zscq_patent" :class="{disabled: allCount.patentCount.disabled}">
                      专利
                      <span class="badge">{{allCount.patentCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="zscq_copyr" :class="{disabled: allCount.cpoyRCount.disabled}">
                      著作权
                      <span class="badge">{{allCount.cpoyRCount.value}}</span>
                    </Menu-item>
                    <Menu-item name="zscq_icp" :class="{disabled: allCount.icpCount.disabled}">
                      网站备案
                      <span class="badge">{{allCount.icpCount.value}}</span>
                    </Menu-item>
                </Submenu>
            </Menu>
      </div>

      <div class="layout-content-main">
        <router-view></router-view>
      </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    data() {
      return {
        company_id: '',
        company_name: '',
        active_menu: 'info',
        open_names: ['bj'],
        allCount: {},
      };
    },
    methods: {
      reqData(name) {
        this.$router.push({
          name,
          query: {
            name: this.company_name,
            id: this.company_id,
            mod: this.open_names[0],
          },
        });
      },
      openMenu(name) {
        this.active_menu = name;
      },
    },
    beforeCreate() {
      const title = document.getElementsByTagName('title')[0];
      title.innerText = this.$route.query.name;
    },
    created() {
      const query = this.$route.query;
      this.company_id = query.id;
      this.company_name = query.name;
      this.open_names = [this.$route.name.split('_')[0] || 'bj'];
      this.active_menu = this.$route.name;
      if (this.$route.name === 'detail') {
        this.active_menu = 'bj_info';
        this.$router.push({ name: this.active_menu, query });
      }
      const countUrl = `/company/navcount/${this.company_id}`;
      this.$http.get(countUrl).then((res) => {
        this.allCount = res.body.data;
      }).catch((err) => {
        this.$Message.error(`服务器出错: ${err}`);
      });
    },
  };
</script>


<style media="screen">
  .badge {
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    line-height: 1;
    vertical-align: baseline;
    white-space: nowrap;
    text-align: center;
    background-color: #999;
    border-radius: 10px;
    float: right!important;
    position: absolute;
    left: 120px;
}

  .detail-container {
    width: 100%;
    height: 100%;
  }
  .side-menu {
    width: 15%;
    height: 100%;
    float: left;
    overflow-y: auto;
  }

  .layout-content-main {
    width: 82%;
    height: 100%;
    margin-left: 20px;
    margin-right: 20px;
    float: left;
    overflow-y: auto;
    padding-bottom: 30px;
    padding-right: 11px;
  };


  .disabled {
    color: #D4D4D4;
    text-decoration: blink;
    pointer-events: none;
  }
</style>
