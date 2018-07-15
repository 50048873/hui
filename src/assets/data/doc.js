const menu1 = {
  example: [
    {
      data: [
        {
          title: '水情',
          iconCls: 'hui-lock',
          to: '/sq',
          backgroundColor: 'red'
        },
        {
          title: '雨情',
          iconCls: 'hui-lock',
          to: 'yq',
          backgroundColor: 'green'
        },
        {
          title: '风情',
          iconCls: 'hui-lock',
          to: '/fq',
          backgroundColor: 'blue'
        },
        {
          title: '水情',
          iconCls: 'hui-lock',
          to: '/sq'
        },
        {
          title: '雨情',
          iconCls: 'hui-lock',
          to: 'yq'
        },
        {
          title: '风情',
          iconCls: 'hui-lock',
          to: '/fq'
        }
      ]
    }
  ]
}

const list1 = {
  example: [
    {
      data: [
        {
          title: '中宁站',
          time: '2018-06-13 14:22',
          status: 1,
          timeType: 1,
          children: [
            {
              title: '水位',
              value: '1443.54',
              unit: 'm<sup>3</sup>'
            },
            {
              title: '预警水位',
              value: '1443.32',
              unit: 'm<sup>3</sup>'
            }
          ]
        },
        {
          title: '红堡寺站',
          time: '2018-06-13 14:22',
          status: 1,
          timeType: 1,
          children: [
            {
              title: '水位',
              value: '--',
              unit: 'm'
            },
            {
              title: '预警水位',
              value: '1729.33',
              unit: 'm'
            }
          ]
        },
        {
          title: '河西镇',
          time: '2018-06-13 14:22',
          timeType: 0,
          children: [
            {
              title: '水位',
              value: '1722.24',
              unit: 'm',
              status: 0
            },
            {
              title: '预警水位',
              value: '1723.45',
              unit: 'm'
            }
          ]
        }
      ]
    },
    {
      data: [
        {
          title: '中宁站',
          time: '2018-06-13 14:22',
          status: 1,
          timeType: 1,
          children: [
            {
              title: '水位',
              value: '1443.54',
              unit: 'm'
            },
            {
              title: '预警水位',
              value: '1443.32',
              unit: 'm'
            },
            {
              title: '预警水位',
              value: '1443.32',
              unit: 'm'
            }
          ]
        },
        {
          title: '红堡寺站',
          time: '2018-06-13 14:22',
          timeType: 0,
          children: [
            {
              title: '水位',
              value: '1730.24',
              unit: 'm'
            },
            {
              title: '预警水位',
              value: '1729.33',
              unit: 'm'
            },
            {
              title: '预警水位',
              value: '1729.33',
              unit: 'm'
            }
          ]
        },
        {
          title: '河西镇',
          time: '2018-06-13 14:22',
          timeType: 0,
          children: [
            {
              title: '水位',
              value: '1722.24',
              unit: 'm',
              status: 0
            },
            {
              title: '预警水位',
              value: '1723.45',
              unit: 'm'
            },
            {
              title: '预警水位',
              value: '1723.45',
              unit: 'm'
            }
          ]
        }
      ]
    }
  ]
}

const nav1 = {
  example: [
    {
      data: [
        {
          title: '导航1',
          children: [
            {
              title: '导航1-1',
              to: '/component/changelog'
            },
            {
              title: '导航1-2',
              to: '/component/installation'
            },
            {
              title: '导航1-3',
              to: '/component/custom-theme'
            }
          ]
        },
        {
          title: '导航2',
          children: [
            {
              title: '导航2-1',
              to: '/component/menu1'
            },
            {
              title: '导航2-2',
              to: '/component/list1'
            },
            {
              title: '导航2-3',
              to: '/component/nav1'
            }
          ]
        }
      ]
    }
  ]
}

const tab1 = {
  example: [
    {
      data: [
        {
          title: '图形'
        },
        {
          title: '表格'
        }
      ]
    }
  ]
}

const table1 = {
  example: [
    {
      data: [
        {
          time: '2018-06-21 11:30',
          value: '2.80'
        },
        {
          time: '2018-06-21 11:30',
          value: '2.80'
        },
        {
          time: '2018-06-21 11:30',
          value: '2.80'
        }
      ]
    }
  ]
}

const table2 = {
  example: [
    {
      data: {
        searchQuery: 'c',
        gridColumns: ['name', 'power'],
        gridData: [
          { name: 'Chuck Norris', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 }
        ]
      }
    }
  ]
}

export default [
  {
    id: 'dialog',
    title: '对话框（dialog）',
    titleDes: '常用于移动端弹出对话框',
    attrs: [
      {
        attr: 'visible',
        des: '是否可见',
        type: 'Boolean',
        optional: '—',
        default: '—'
      },
      {
        attr: 'title',
        des: '标题',
        type: 'String',
        optional: '—',
        default: '—'
      },
      {
        attr: 'closeOnClickModal',
        des: '点击遮罩是否关闭',
        type: 'Boolean',
        optional: '—',
        default: 'true'
      },
      {
        attr: 'modal',
        des: '是否显示遮罩',
        type: 'Boolean',
        optional: '—',
        default: 'true'
      },
      {
        attr: 'customClass',
        des: '自定类名',
        type: 'String',
        optional: '—',
        default: ''
      },
      {
        attr: 'cancel',
        des: '取消按钮文本',
        type: 'String',
        optional: '—',
        default: '—'
      },
      {
        attr: 'confirm',
        des: '确认按钮文本',
        type: 'String',
        optional: '—',
        default: '确认'
      },
      {
        attr: 'beforeClose',
        des: '关闭前的回调',
        type: 'Function',
        optional: '—',
        default: '—'
      }
    ],
    events: [
      {
        attr: 'open',
        des: '打开时的回调函数',
        callbackParam: '—'
      },
      {
        attr: 'close',
        des: '确认、取消按钮被单击时触发（如果beforeClose传递了，则返回true才能关闭，返回false取消关闭）',
        callbackParam: '—'
      },
      {
        attr: 'closed',
        des: '关闭后的回调函数（对话框元素关闭动画结束后执行）',
        callbackParam: '—'
      }
    ],
    example: [
      {
        title: '基础用法',
        titleDes: '包含属性beforeClose，事件监听的对话框',
        code: `
         <template>
          <div>
            <button @click="visible=true">打开对话框</button>
            <hui-dialog
              :visible.sync="visible"
              title="自定标题"
              width="300px"
              :before-close="beforeClose"
              @open="open"
              @close="close"
              @closed="closed">
              <p>这是我要显示的内容</p>
              <p>这是我要显示的内容</p>
              <p>这是我要显示的内容</p>
              <p>这是我要显示的内容</p>
              <p>这是我要显示的内容</p>
            </hui-dialog>
          </div>
        </template>

        <script>
        export default {
          data () {
            return {
              visible: false
            }
          },
          methods: {
            open () {
              console.log('open')
            },
            close () {
              console.log('close')
            },
            closed () {
              console.log('closed')
            },
            beforeClose (done) {
              if (Math.random() > 0.5) {
                console.log('随机数确认了关闭')
                done()
              } else {
                console.log('随机数取消了关闭')
                return false
              }
            }
          }
        }
        </script>
        `,
        data: null
      }
    ]
  },
  {
    id: 'menu1',
    title: '菜单1（Menu1）',
    titleDes: '常用于移动端首屏的菜单',
    attrs: [
      {
        attr: 'data',
        des: '菜单数据',
        type: 'Array',
        optional: '—',
        default: '—'
      },
      {
        attr: 'replace',
        des: '同vue-router用法',
        type: 'Boolean',
        optional: '—',
        default: 'false'
      },
      {
        attr: 'append',
        des: '同vue-router用法',
        type: 'Boolean',
        optional: '—',
        default: 'false'
      },
      {
        attr: 'tag',
        des: '同vue-router用法',
        type: 'String',
        optional: '—',
        default: 'a'
      },
      {
        attr: 'exact',
        des: '同vue-router用法',
        type: 'Boolean',
        optional: '—',
        default: 'false'
      },
      {
        attr: 'event',
        des: '同vue-router用法',
        type: 'String, Array',
        optional: '—',
        default: 'click'
      },
      {
        attr: 'theme',
        des: '菜单主题（目前只有1套主题）',
        type: 'String',
        optional: '—',
        default: 'HuiMenu1-theme1'
      },
      {
        attr: 'oneLineCount',
        des: '每行显示的菜单项目数',
        type: 'String, Number',
        optional: '—',
        default: '4'
      },
      {
        attr: 'size',
        des: '菜单的尺寸',
        type: 'String',
        optional: 'medium / small / mini',
        default: '4'
      }
    ],
    events: [
      {
        attr: 'menu-click',
        des: '菜单项被单击时触发',
        callbackParam: '(item, index)'
      }
    ],
    example: [
      {
        title: '基础用法',
        titleDes: '基础的、简洁的菜单',
        code: `
          <template>
            <HuiMenu1 :data="data"></HuiMenu1>
          </template>

          <script>
          export default {
            data () {
              return {
                data: ${JSON.stringify(menu1.example[0].data, null, 2)}
              }
            }
          }
          </script>
        `,
        data: menu1.example[0].data
      }
    ]
  },
  {
    id: 'list1',
    title: '列表1（lsit1）',
    titleDes: '常用于移动端列表数据展示',
    attrs: [
      {
        attr: 'data',
        des: '列表数据',
        type: 'Array',
        optional: '—',
        default: '—'
      },
      {
        attr: 'theme',
        des: '主题（HuiList1-theme1 / HuiList1-theme2）',
        type: 'String',
        optional: '—',
        default: 'HuiList1-theme1'
      }
    ],
    events: [
      {
        attr: 'list-click',
        des: '列表项被单击时触发',
        callbackParam: '(item, index)'
      }
    ],
    example: [
      {
        title: '基础用法',
        titleDes: '基础的、简洁的列表',
        code: `
          <template>
            <HuiList1 :data="data"></HuiList1>
          </template>

          <script>
          export default {
            data () {
              return {
                data: ${JSON.stringify(list1.example[0].data, null, 2)}
              }
            }
          }
          </script>
        `,
        data: list1.example[0].data
      },
      {
        title: '第2套主题及第2行多于2项以上的用法',
        titleDes: '第2行可显示多条数据，但要考虑移动端显示效果',
        code: `
          <template>
            <HuiList1 :data="data" theme="HuiList1-theme2"></HuiList1>
          </template>

          <script>
          export default {
            data () {
              return {
                data: ${JSON.stringify(list1.example[1].data, null, 2)}
              }
            }
          }
          </script>
        `,
        data: list1.example[1].data
      }
    ]
  },
  {
    id: 'nav1',
    title: '导航1（nav1）',
    titleDes: '常用于pc端左侧导航数据展示',
    attrs: [
      {
        attr: 'data',
        des: '导航数据',
        type: 'Array',
        optional: '—',
        default: '—'
      },
      {
        attr: 'replace',
        des: '同vue-router用法',
        type: 'Boolean',
        optional: '—',
        default: 'false'
      },
      {
        attr: 'append',
        des: '同vue-router用法',
        type: 'Boolean',
        optional: '—',
        default: 'false'
      },
      {
        attr: 'tag',
        des: '同vue-router用法',
        type: 'String',
        optional: '—',
        default: 'a'
      },
      {
        attr: 'exact',
        des: '同vue-router用法',
        type: 'Boolean',
        optional: '—',
        default: 'false'
      },
      {
        attr: 'event',
        des: '同vue-router用法',
        type: 'String, Array',
        optional: '—',
        default: 'click'
      }
    ],
    events: [
      {
        attr: 'nav-click',
        des: '导航项被单击时触发',
        callbackParam: '(item, index)'
      }
    ],
    example: [
      {
        title: '基础用法',
        titleDes: '基础的、简洁的导航',
        code: `
          <template>
            <HuiNav1 :data="item.data"></HuiNav1>
          </template>

          <script>
          export default {
            data () {
              return {
                data: ${JSON.stringify(nav1.example[0].data, null, 2)}
              }
            }
          }
          </script>
        `,
        data: nav1.example[0].data
      }
    ]
  },
  {
    id: 'header1',
    title: '头部1（header1）',
    titleDes: '常用于移动端的基础的、简洁的头部',
    attrs: [
      {
        attr: 'iconLeft',
        des: '左侧图标字体类名',
        type: 'String',
        optional: '—',
        default: 'fa fa-angle-left'
      },
      {
        attr: 'title',
        des: '中间标题文字',
        type: 'String',
        optional: '—',
        default: '标题'
      },
      {
        attr: 'iconRight',
        des: '右侧图标字体类名',
        type: 'String',
        optional: '—',
        default: '—'
      },
      {
        attr: 'padding',
        des: '左右箭头的边距',
        type: 'String',
        optional: '—',
        default: '15px'
      },
      {
        attr: 'bgColor',
        des: '背景颜色',
        type: 'String',
        optional: '—',
        default: '—'
      }
    ],
    events: [
      {
        attr: 'header-left-click',
        des: '头部左侧图标被单击时触发',
        callbackParam: '(title)'
      },
      {
        attr: 'header-right-click',
        des: '头部右侧图标被单击时触发',
        callbackParam: '(title)'
      }
    ],
    example: [
      {
        title: '基础用法',
        titleDes: '基础的、简洁的头部',
        code: `
          <template>
            <HuiHeader1 title="水情信息" iconRight="fa fa-angle-right"></HuiHeader1>
          </template>
        `,
        data: null
      }
    ]
  },
  {
    id: 'tab1',
    title: '选项卡1（tab1）',
    titleDes: '常用于内容切换的选项卡',
    attrs: [
      {
        attr: 'data',
        des: '选项卡数据',
        type: 'Array',
        optional: '—',
        default: '—'
      }
    ],
    events: [
      {
        attr: 'tab-click',
        des: '选项卡被单击时触发',
        callbackParam: '(item, index)'
      }
    ],
    example: [
      {
        title: '基础用法',
        titleDes: '基础的、简洁的导航',
        code: `
          <template>
            <HuiTab1 :data="data"></HuiTab1>
          </template>

          <script>
          export default {
            data () {
              return {
                data: ${JSON.stringify(tab1.example[0].data, null, 2)}
              }
            }
          }
          </script>
        `,
        data: tab1.example[0].data
      }
    ]
  },
  {
    id: 'table1',
    title: '表格1（table1）',
    titleDes: '常用于移动端的基础表格',
    attrs: [
      {
        attr: 'data',
        des: '表格数据',
        type: 'Array',
        optional: '—',
        default: '—'
      }
    ],
    events: null,
    example: [
      {
        title: '基础用法',
        titleDes: '基础的、简洁的表格',
        code: `
          <template>
            <HuiTable :data="data">
              <HuiTableColumn prop="time" label="时间"></HuiTableColumn>
              <HuiTableColumn prop="value" label="水位（m）"></HuiTableColumn>
            </HuiTable>
          </template>

          <script>
          export default {
            data () {
              return {
                data: ${JSON.stringify(table1.example[0].data, null, 2)}
              }
            }
          }
          </script>
        `,
        data: table1.example[0].data
      }
    ]
  },
  {
    id: 'table2',
    title: '表格2（table2）',
    titleDes: '常用于移动端的基础表格',
    attrs: [
      {
        attr: 'data',
        des: '表格tbody数据',
        type: 'Array',
        optional: '—',
        default: '—'
      },
      {
        attr: 'columns',
        des: '表格thead数据',
        type: 'Array',
        optional: '—',
        default: '—'
      },
      {
        attr: 'filterKey',
        des: '默认过滤值',
        type: 'String',
        optional: '—',
        default: '—'
      }
    ],
    events: null,
    example: [
      {
        title: '基础用法',
        titleDes: '基础的、简洁的表格',
        code: `
          <template>
            <form class="search">
              <span>搜索：</span>
              <input name="query" v-model="searchQuery" placeholder="请输入查询字符串">
            </form>
            <HuiTable2
              :data="item.data.gridData"
              :columns="item.data.gridColumns"
              :filter-key="searchQuery">
            </HuiTable2>
          </template>

          <script>
          export default {
            data () {
              return {
                data: ${JSON.stringify(table2.example[0].data, null, 2)}
              }
            }
          }
          </script>
        `,
        data: table2.example[0].data
      }
    ]
  },
  {
    id: 'floatBall',
    title: '浮动球',
    titleDes: '仅用于移动端的辅助操作，在移动端上可移动',
    attrs: [
      {
        attr: 'iconClass',
        des: '小球里要显示的字体图标类名',
        type: 'String',
        optional: '—',
        default: '—'
      },
      {
        attr: 'top',
        des: '小球距上面的位置',
        type: 'String, Number',
        optional: '—',
        default: '—'
      },
      {
        attr: 'right',
        des: '小球距右面的位置',
        type: 'String, Number',
        optional: '—',
        default: '—'
      },
      {
        attr: 'bottom',
        des: '小球距下面的位置',
        type: 'String, Number',
        optional: '—',
        default: '—'
      },
      {
        attr: 'left',
        des: '小球距左面的位置',
        type: 'String, Number',
        optional: '—',
        default: '—'
      }
    ],
    events: [
      {
        attr: 'ball-click',
        des: '小球被单击时触发',
        callbackParam: '(iconClass)'
      }
    ],
    example: [
      {
        title: '基础用法',
        titleDes: '传入字体图标类名',
        code: `
          <template>
            <hui-float-ball right="15" bottom="15" iconClass="hui-icon-wind"></hui-float-ball>
          </template>
        `,
        data: null
      },
      {
        title: '其它用法',
        titleDes: '传入子元素',
        code: `
          <template>
            <hui-float-ball right="15" bottom="15">
              <hui-icon-normal-explain class="iconExplain"></hui-icon-normal-explain>
            </hui-float-ball>
          </template>
        `,
        data: null
      }
    ]
  }
]
