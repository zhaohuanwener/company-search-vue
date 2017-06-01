<template>
  <Mytable  :columns="columns" :company_id="company_id" total_field="total" data_field="rows"
    mod="companyteammember" :data_cb="data_cb"
  ></Mytable>
</template>

<script>
  import moment from 'moment';
  import Mytable from '@/common/components/Mytable';

  export default {
    data() {
      return {
        columns: [{
          title: '人物',
          key: 'name',
          width: 150,
          render(h, params) {
            const names = params.row.name.split('-');
            const src = names[1] === 'null' ? 'logo/teamMember/def_photo.png' : names[1];
            return h('div', [
              h('li', [
                h('img', {
                  attrs: {
                    src: `http://static.tianyancha.com/${src}`,
                    class: 'app-icon',
                  },
                }),
              ]),
              h('li', names[0]),
            ]);
          },
        }, {
          title: '职务',
          key: 'title',
          width: 150,
        }, {
          title: '介绍',
          key: 'desc',
        }],
        company_id: '',
      };
    },
    methods: {
      data_cb(data) {
        return data.map(function(d) {
          d.date = moment(d.date).format('YYYY-MM-DD');
          d.name = `${d.name}-${d.iconOssPath}`;
          return d;
        });
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

<style media="screen">
  li {
    list-style: none;
  }

  .app-icon {
    width: 50px;
    height: 50px;
}

</style>
