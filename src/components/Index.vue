<template>
    <div class="body-input">

      <div class="index-logo-container">
        <img src="/img/icon-large.png" class="index-logo" alt="">
      </div>
      <Input-container></Input-container>
    </div>
</template>
<script>


import Inputcontainer from './Input';

export default {
  data() {
    return {
      data: '',
    };
  },
  components: {
    'Input-container': Inputcontainer,
  },
  methods: {
  },
};
</script>

<style media="screen">

  .index-logo-container {
    width: 350px;
    height: 100px;
    margin: 0 auto
  }
  .index-logo {
    width: 350px;
    height: 72px;
    margin: 0 auto
  };

  .body-input {
    width: 500px;
    height: 350px;
    margin: 90px auto;
  }




</style>
