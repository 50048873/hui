<template>
  <section class="DocUtil">
    <Title title="日期方法" des="提供了常用的日期方法集合" theme="Title-theme1"></Title>
    <Title title="使用方法" des="在需要的地方import对应方法，例如："></Title>
    <section class="preWrap">
      <pre>import {standardDate, getDateStr, etc...} from 'hui/lib/util.js'</pre>
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
        name: 'standardDate(data, key)',
        paramsDes: [
          {
            data: '[Array]'
          },
          {
            key: '[String]'
          }
        ],
        effect: '把传入的数组每个对象里指定key的日期按水利标准处理，并返回处理后的新数组（注：此例子中key为date）',
        example: `
          [
            {
              date: 2018-07-18 13:47,
              value: 12
            }
          ]
        `,
        return: 'Array'
      },
      {
        name: 'getDateStr(addDayCount = 0, hour, minute, second, utc)',
        paramsDes: [
          {
            addDayCount: '[Number, Null]'
          },
          {
            hour: '[Boolean]'
          },
          {
            minute: '[Boolean]'
          },
          {
            second: '[Boolean]'
          },
          {
            utc: '[Boolean]'
          }
        ],
        effect: '获取指定日的字符串，可获取当前时间的时、分、秒，utc指定返回的日期格式',
        example: `
          <p>getDateStr() // 2018-07-18</p>
          <p>getDateStr(-7) // 2018-07-11</p>
          <p>getDateStr(1) // 2018-07-19</p>
          <p>getDateStr(0, true, true) // 2018-07-18 14:15</p>
          <p>getDateStr(0, true, true, false, true) // 2018-07-18T14:15</p>
        `,
        return: 'String'
      }
    ]
  }
}
</script>
