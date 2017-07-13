<template>
  <div>
    <Header/>
  
     <div class="detail-container">
      <div class="side-menu">
        <Menu :active-name="active_menu" width="auto" :open-names="open_names" @on-select="reqData" accordion @on-open-change="openMenu">
          <Submenu name="bj">
            <template slot="title">
              <Icon type="help-buoy"></Icon>
              <span id="bj_span">企业背景</span>
            </template>
            <Menu-item name="bj_info">
              <span id="bj_info_span">基本信息</span>
            </Menu-item>
            <Menu-item name="bj_staff">
              <span id="bj_staff_span">主要人员</span>
            </Menu-item>
            <Menu-item name="bj_holder">
              <span id="bj_holder_span">股东信息</span>
            </Menu-item>
            <Menu-item name="bj_investment">
              <span id="bj_investment_span">对外投资</span>
            </Menu-item>
            <Menu-item name="bj_changeinfo">
              <span id="bj_changeinfo_span">变更记录</span>
            </Menu-item>
            <Menu-item name="bj_branch" class="disabled">
              分支机构
            </Menu-item>
          </Submenu>
  
          <Submenu name="dev">
            <template slot="title">
              <Icon type="arrow-graph-up-right"></Icon>
              <span id="dev_span">企业发展</span>
            </template>
            <Menu-item name="dev_companyrongzi">
              <span id="dev_companyrongzi_span">融资历史</span>
            </Menu-item>
            <Menu-item name="dev_companyteammember">
              <span id="dev_companyteammember_span">核心团队</span>
            </Menu-item>
            <Menu-item name="dev_companyproduct">
              <span id="dev_companyproduct_span">企业业务</span>
            </Menu-item>
            <Menu-item name="dev_jigoutzanli">
              <span id="dev_jigoutzanli_span">投资事件</span>
            </Menu-item>
            <Menu-item name="dev_companyjingpin">
              <span id="dev_companyjingpin_span">竞品信息</span>
            </Menu-item>
          </Submenu>
  
          <Submenu name="sifa">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              <span id="sifa_span">司法风险</span>
            </template>
            <Menu-item name="sifa_lawsuit">
              <span id="sifa_lawsuit_span">法律诉讼</span>
            </Menu-item>
            <Menu-item name="sifa_court">
              <span id="sifa_court_span">法院公告</span>
            </Menu-item>
            <Menu-item name="" class="disabled">
              失信人
            </Menu-item>
            <Menu-item name="sifa_zhixing">
              <span id="sifa_zhixing_span">被执行人</span>
            </Menu-item>
          </Submenu>
  
          <Submenu name="jyfx">
            <template slot="title">
              <Icon type="flash-off"></Icon>
              <span id="jyfx_span">经营风险</span>
            </template>
            <Menu-item name="jyfx_abnormal" class="disabled">
              <span id="">经营异常</span>
            </Menu-item>
            <Menu-item name="jyfx_punishment">
              <span id="jyfx_punishment_span">行政处罚</span>
            </Menu-item>
            <Menu-item name="jyfx_illegal" class="disabled">
              <span id="jyfx_illegal_span">严重违法</span>
            </Menu-item>
            <Menu-item name="jyfx_equity">
              <span id="jyfx_equity_span">股权出质</span>
            </Menu-item>
            <Menu-item name="jyfx_mortgage" class="disabled">
              动产抵押
            </Menu-item>
            <Menu-item name="jyfx_owntax" class="disabled">
              欠税公告
            </Menu-item>
          </Submenu>
  
          <Submenu name="jyzk">
            <template slot="title">
              <Icon type="ios-list"></Icon>
              <span id="jyzk_span">经营状况</span>
            </template>
            <Menu-item name="jyzk_bid">
              <span id="jyzk_bid_span">招投标</span>
            </Menu-item>
            <Menu-item name="jyfx_bond" class="disabled">
              债券信息
            </Menu-item>
            <Menu-item name="jyfx_goudi" class="disabled">
              购地信息
            </Menu-item>
            <Menu-item name="jyzk_recruit">
              <span id="jyzk_recruit_span">招聘</span>
            </Menu-item>
            <Menu-item name="jyzk_taxcredit">
              <span id="jyzk_taxcredit_span">税务评级</span>
            </Menu-item>
            <Menu-item name="jyzk_check">
              <span id="jyzk_check_span">抽查检查</span>
            </Menu-item>
            <Menu-item name="jyzk_productinfo">
              <span id="jyzk_productinfo_span">产品信息</span>
            </Menu-item>
            <Menu-item name="jyfx_qualification" class="disabled">
              资质证书
            </Menu-item>
          </Submenu>
  
          <Submenu name="zscq">
            <template slot="title">
              <Icon type="ios-bookmarks"></Icon>
              <span id="zscq_span">知识产权</span>
            </template>
            <Menu-item name="zscq_tm">
              <span id="zscq_tm_span">商标信息</span>
            </Menu-item>
            <Menu-item name="zscq_patent">
              <span id="zscq_patent_span">专利</span>
            </Menu-item>
            <Menu-item name="zscq_copyr">
              <span id="zscq_copyr_span">著作权</span>
            </Menu-item>
            <Menu-item name="zscq_icp">
              <span id="zscq_icp_span">网站备案</span>
            </Menu-item>
          </Submenu>
        </Menu>
      </div>
  
      <div class="layout-content-main">
        <div class="bread">
          <Breadcrumb>
            <Breadcrumb-item>{{company_name}}</Breadcrumb-item>
            <Breadcrumb-item>{{bread2}}</Breadcrumb-item>
            <Breadcrumb-item>{{bread3}}</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <router-view></router-view>
      </div>
    </div> 
  
  </div>
</template>

<script type="text/javascript">
import Header from './Header';

export default {
  data() {
    return {
      company_id: '',
      company_name: '',
      active_menu: 'bj_info',
      open_names: ['bj'],
      bread2: '企业背景',
      bread3: '基本信息',
    };
  },
  components: {
    Header,
  },
  methods: {
    reqData(name) {
      const littlemodName = document.getElementById(`${name}_span`).innerText;
      const menu = document.getElementById(`${name.split('_')[0]}_span`);
      const bigmodName = menu.innerText;
      this.bread2 = bigmodName;
      this.bread3 = littlemodName;
      this.$router.push({
        name,
        query: {
          name: this.company_name,
          id: this.company_id,
          mod: this.open_names[0],
          bigmodName,
          littlemodName,
        },
      });
    },
    openMenu(names) {
      this.open_names = names;
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
    const bread2 = this.$route.query.bigmodName;
    const bread3 = this.$route.query.littlemodName;
    if (bread2 && bread3) {
      this.bread2 = bread2;
      this.bread3 = bread3;
    }
    if (this.$route.name === 'detail') {
      this.active_menu = 'bj_info';
      this.open_names = ['bj'];
      this.$router.push({ name: this.active_menu, query });
    }
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
  width: 200px;
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
  display: none
}

.bread {
  margin-top: 10px;
  width: 600px;
  height: 30px;
  margin-bottom: 10px;
}

</style>
