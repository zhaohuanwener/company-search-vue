<template id="">
  <div class="loading">
    <Spin size="large" >
        <Icon type="load-c" :size="sizeNum" class="demo-spin-icon-load"></Icon>
        <div>{{textData}}</div>
    </Spin>
  </div>
</template>


<script type="text/javascript">
  export default {
    data() {
      return {
        sizeNum: '',
        textData: '',
      };
    },
    created() {
      this.sizeNum = this.size || 50;
      this.textData = this.content || '加载中';
    },
    props: {
      size: {
        type: Number,
      },
      content: {
        type: String,
      },
    },
  };
</script>



<style media="screen">
.demo-spin-icon-load{
   animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
}

.loading {
  position: absolute;
  width:200px;
  height:100px;
  left:50%;
  top:40%;
}
</style>
