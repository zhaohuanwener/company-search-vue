<template id="">
<div>
    <Header/>
    <div class="info-container">
        <Loading :size="loading_size" v-if="show_loading" class="loading-icon"></Loading>
        <div v-if="!show_loading" class="infos">
            <h2 v-if="!info" class="nodeData">暂无数据</h2>
            <div class="data-container" v-else>
                <Card>
                    <h2 slot="title" v-html='info.baseInfo.name === "undefined" ? name : (info.baseInfo.name || name)'></h2>
                    <Row v-for="(row, index) in baseInfoFields" :key='"row" + index'>
                        <Col v-if='row.length===2' span='12' v-for='(col, colIndex) in row' :key='"col" + colIndex'>
                            <Col span='8'>{{ col.label }}</Col>
                            <Col span='16'>{{ dataFormatter(info.baseInfo[col.key], col.type) }}</Col>
                        </Col>
                        <Row v-else>
                            <Col span='8'>{{ row[0].label }}</Col>
                            <Col span='16'>{{ dataFormatter(info.baseInfo[row[0].key], row[0].type) }}</Col>
                        </Row>
                    </Row>
                </Card>
                <Card>
                    <h2 slot="title">股东</h2>
                    <Table
                        stripe
                        :columns="[{title:'股东',key:'name'},{title:'类型',key:'type'},{title:'金额',key:'amount'}]"
                        :data="investorFormatter(info.investorList)"
                        >
                    </Table>
                </Card>
                <Card>
                    <h2 slot="title">对外投资</h2>
                    <Table
                        stripe
                        :columns="[{type:'index', width: 50},{title:'公司',key:'name'},{title:'资本',key:'regCapital'}]"
                        :data="info.investList"
                        >
                    </Table>
                </Card>
            </div>
        </div>
    </div>
</div>
</template>


<script type="text/javascript">
import moment from 'moment';
import Loading from '../common/components/Loading';
import Header from './Header';

export default {
    data() {
        return {
            show_loading: true,
            info: null,
            baseInfoFields: [
                [
                    { key: 'regCapital', label: '注册资本' },
                    { key: 'fromTime', label: '注册时间', type: 'date' }
                ],
                [
                    { key: 'regNumber', label: '工商注册号' },
                    { key: 'regLocation', label: '注册地址' }
                ],
                [
                    { key: 'creditCode', label: '纳税人识别号' },
                    { key: 'regStatus', label: '营业状态' },
                ],
                [
                    { key: 'creditCode', label: '统一信用代码' },
                    { key: 'companyOrgType', label: '公司类型' }
                ],
                [
                    { key: 'fromTime', label: '营业起始', type: 'date' },
                    { key: 'toTime', label: '营业截止', type: 'date' }
                ],
                [
                    { key: 'approvedTime', label: '核准日期', type: 'date' },
                    { key: 'regInstitute', label: '登记机关' }
                ],
                [
                    { key: 'property3', label: '英文名称' },
                ],
                [
                    { key: 'businessScope', label: '经营范围' }
                ]
            ],
            loading_size: 60
        };
    },
    computed: {
        name () {
            return (this.$route.query || {}).name || '未知';
        }
    },
    components: {
        Loading,
        Header,
    },
    methods: {
        investorFormatter (data) {
            return data.map(({ name, type, amount }) => ({ name, type, amount: `${amount} 万元` }));
        },
        dataFormatter(val, formatter) {
            if (!formatter) {
                return val;
            }
            switch (formatter) {
                case 'date':
                    return moment(val).format('YYYY-MM-DD');
                default:
                    return val;
            }
        }
    },
    created() {
        const qs = this.$route.query || {};
        this.$http.get(`/baseinfo?id=${qs.id || ''}&name=${qs.name || ''}`).then((res) => {
            this.info = res.body.data;
            this.show_loading = false;
        }).catch(() => {
            this.show_loading = false;
            this.$Message.error('暂无数据');
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
}

;
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

.nodeData {
    width: 200px;
    height: 200px;
    margin: 60px auto
}

.loading-icon {
    width: 200px;
    height: 200px;
    position: absolute;
    margin-left: -100px;
    margin-top: -100px;
    top: 45%;
}

.info-container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px 10px 0;
}

.infos {
    max-width: 1024px;
    margin: 0 auto;
}
.ivu-card-head em {
    font-style: normal;
}
.ivu-row {
    margin-bottom: 10px;
    line-height: 24px;
}
.ivu-row .ivu-col-span-8 {
    font-weight: bold;
}
.ivu-row .ivu-row .ivu-col-span-8 {
    width: 16.66666%;
}
.ivu-row .ivu-row .ivu-col-span-16 {
    width: 83.333333%;
}
.ivu-card {
    margin-bottom: 10px;
}
</style>
