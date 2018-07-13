<template>
  <div class="body-input">
    <div class="index-logo-container">
      <img src="../assets/img/icon-large.png" class="index-logo" alt="">
    </div>
    <Input-container/>
  </div>
</template>
<script>


import Inputcontainer from './Input';

export default {
  components: {
    'Input-container': Inputcontainer,
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
}

;

.body-input {
  width: 500px;
  height: 350px;
  margin: 150px auto;
}
</style>
