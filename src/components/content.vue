<template>
    <div class="body-input">
      <Input v-model="value1" size="large" placeholder="large size"></Input>
      <br>
      <Input v-model="value2" placeholder="default size"></Input>
      <br>
      <Input v-model="value3" size="small" placeholder="small size"></Input>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
    };
  },
};
</script>

<style media="screen">
  .body-input {
    width: 500px;
    height: 300px;
    border: 1px solid red;
    margin: 90px auto;
  }
</style>
