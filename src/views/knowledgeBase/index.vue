<template>
  <div class="app-container home">
    <el-input
      v-model="keyword"
      placeholder="请输入关键词"
      size="normal"
      clearable
      @change="getInfo"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "KnowledgeBaseIndex",
  data() {
    return {
      keyword: "",
      infoList: [],
    };
  },
  methods: {
    getInfo() {},
  },
};
</script>

<style scoped lang="scss">
.home {
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;
  max-width: 800px;
  margin: 0 auto;
}
</style>

