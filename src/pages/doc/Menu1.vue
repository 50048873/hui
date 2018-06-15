<template>
  <div class="Menu1">
    <Title title="菜单1（Menu1）" des="常用于移动端首屏的菜单" theme="Title-theme1"></Title>
    <Title title="基础用法" des="基础的、简洁的菜单"></Title>
    <section class="example">
      <HuiMenu1 :data="data"></HuiMenu1>
      <pre v-show="isCode" class="pre">
        <div>{{code}}</div>
      </pre>
      <div @click="toggleCode" class="toggleCode">显示代码</div>
    </section>
    <DocApi></DocApi>
  </div>
</template>

<script>
import HuiMenu1 from '@/components/HuiMenu1/HuiMenu1'
import data from '@/assets/data/HuiMenu1-data'
import Title from '@/pages/common/Title'
import DocApi from '@/pages/common/DocApi'
import {Menu1ExampleBasic} from '@/pages/doc/Menu1ExampleBasic.js'
export default {
  name: 'Menu1',
  components: {
    HuiMenu1,
    Title,
    DocApi
  },
  data () {
    return {
      isCode: false
    }
  },
  methods: {
    toggleCode () {
      this.isCode = !this.isCode
    }
  },
  created () {
    this.data = data
    this.code = Menu1ExampleBasic
  }
}
</script>

<!-- Add "scoped" DocApi to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .Menu1 {
    .example {
      border: 1px solid #d8d8d8;
      margin-bottom: @margin-large;
      .pre {
        padding: 15px;
        background-color: #fafafa;
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
  }
</style>
