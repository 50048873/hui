<template>
  <section class="DocUtil">
    <Title title="通用方法" des="提供了常用的通用方法集合" theme="Title-theme1"></Title>
    <Title title="使用方法" des="在需要的地方import对应方法，例如："></Title>
    <section class="preWrap">
      <pre>import {isArray, isObject, etc...} from 'hui/lib/util.js'</pre>
    </section>
    <Title title="方法列表" des=""></Title>
    <table class="docUtilTable">
      <thead>
        <tr>
          <th><span>方法名</span></th>
          <th><span>参数说明</span></th>
          <th><span>作用</span></th>
          <th><span>举例</span></th>
          <th><span>返回值</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in methods" :key="index">
          <td><span class="name" :title="item.name">{{item.name}}</span></td>
          <td>
            <div v-for="(param, index) in item.paramsDes" :key="index">
              <p class="param" v-for="(value, key, index) in param" :key="index">
                <span class="param-title">{{key}}: </span>
                <span>{{value}}</span>
              </p>
            </div>
          </td>
          <td><span>{{item.effect}}</span></td>
          <td><div v-html="item.example"></div></td>
          <td><span>{{item.return}}</span></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  created () {
    this.methods = [
      {
        name: 'isArray(param)',
        paramsDes: [
          {
            param: '[任意类型]'
          }
        ],
        effect: '判断传入的参数是否是数据',
        example: null,
        return: 'Boolean'
      },
      {
        name: 'isObject(param)',
        paramsDes: [
          {
            param: '[任意类型]'
          }
        ],
        effect: '判断传入的参数是否是对象',
        example: null,
        return: 'Boolean'
      },
      {
        name: 'isString(param)',
        paramsDes: [
          {
            param: '[任意类型]'
          }
        ],
        effect: '判断传入的参数是否是字符串',
        example: null,
        return: 'Boolean'
      },
      {
        name: 'isNumber(param)',
        paramsDes: [
          {
            param: '[任意类型]'
          }
        ],
        effect: '判断传入的参数是否是数字',
        example: null,
        return: 'Boolean'
      }
    ]
  }
}
</script>
