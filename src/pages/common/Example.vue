<template>
  <section class="Example" v-if="code">
    <slot></slot>
    <div @click="toggleCode" class="toggleCode" v-show="isCode">{{btnText}}</div>
    <pre v-show="isCode" class="pre">{{code}}</pre>
    <div @click="toggleCode" class="toggleCode">{{btnText}}</div>
  </section>
</template>

<script>
export default {
  name: 'Example',
  props: {
    code: {
      type: String
    }
  },
  data () {
    return {
      isCode: false,
      btnText: '显示代码'
    }
  },
  methods: {
    toggleCode () {
      this.isCode = !this.isCode
      this.btnText = this.btnText === '显示代码' ? '隐藏代码' : '显示代码'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .Example {
    border: 1px solid #d8d8d8;
    margin-bottom: @margin-large;
    .pre {
      padding: 15px;
      background-color: #fafafa;
      max-width: 100%;
      // white-space: normal;
    }
    .toggleCode {
      text-align: center;
      cursor: pointer;
      padding: 10px;
      border-top: 1px solid #d8d8d8;
      &:hover {
        color: @color-theme;
      }
    }
  }
</style>
