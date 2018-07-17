<template>
  <section class="DocUtiversal">
    <Title title="通用方法" des="提供了常用的通用方法集合" theme="Title-theme1"></Title>
    <Title title="使用方法" des="在需要的地方import对应方法，例如："></Title>
    <section class="preWrap">
      <pre>import {isArray, isObject, etc...} from 'hui/lib/util.js'</pre>
    </section>
    <Title title="方法列表" des=""></Title>
    <ul class="methods">
      <li v-for="(item, index) in methods" :key="index">
        <h6>
          <span>方法名：</span>
          <span>{{item.name}}</span>
        </h6>
        <p>
          <span>参数个数：</span>
          <span>{{item.paramsLen}}</span>
        </p>
        <p>
          <span>返回值：</span>
          <span>{{item.return}}</span>
        </p>
        <p>
          <span>作用：</span>
          <span>{{item.effect}}</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  created () {
    this.methods = [
      {
        name: 'isArray',
        paramLen: 1,
        return: 'Boolean',
        effect: '判断传入的参数是否是数据'
      },
      {
        name: 'isObject',
        paramLen: 1,
        return: 'Boolean',
        effect: '判断传入的参数是否是对象'
      },
      {
        name: 'isString',
        paramLen: 1,
        return: 'Boolean',
        effect: '判断传入的参数是否是字符串'
      },
      {
        name: 'isNumber',
        paramLen: 1,
        return: 'Boolean',
        effect: '判断传入的参数是否是数字'
      }
    ]
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .DocUtiversal {
    .methods {
      li {
        padding: 10px 15px;
        border-bottom: 1px solid @color-border-default;
        h6, p {
          display: flex;
          justify-content: space-between;
        }
        h6 {
          span:last-child {
            font-weight: bold;
          }
        }
        &:first-child {
          border-top: 1px solid @color-border-default;
        }
      }
    }
  }
</style>
