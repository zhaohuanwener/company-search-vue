<template>
  <iframe :src="url" frameborder="0" class="cbonds"></iframe>
</template>

<script>
    export default {
        data() {
            return {
                url: 'http://localhost:8010/cbonds/'
            };
        }
    };
</script>

<style scoped>
    .cbonds {
        width: 100%;
        max-height: 100%;
        min-height: 600px;
        margin: 0 auto;
        overflow-y: auto;
    }
</style>

