const menu1 = {
  example: [
    {
      data: [
        {
          title: '水情',
          iconCls: 'fa fa-bath',
          to: '/sq',
          backgroundColor: 'red'
        },
        {
          title: '雨情',
          iconCls: 'fa fa-bath',
          to: 'yq',
          backgroundColor: 'green'
        },
        {
          title: '风情',
          iconCls: 'fa fa-bath',
          to: '/fq',
          backgroundColor: 'blue'
        },
        {
          title: '水情',
          iconCls: 'fa fa-bath',
          to: '/sq'
        },
        {
          title: '雨情',
          iconCls: 'fa fa-bath',
          to: 'yq'
        },
        {
          title: '风情',
          iconCls: 'fa fa-bath',
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
          children: [
            {
              title: '水位',
              value: '1443.54',
              unit: 'm',
              status: 1
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
          children: [
            {
              title: '水位',
              value: '1730.24',
              unit: 'm',
              status: 1
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
          children: [
            {
              title: '水位',
              value: '1443.54',
              unit: 'm',
              status: 1
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
          children: [
            {
              title: '水位',
              value: '1730.24',
              unit: 'm',
              status: 1
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
          title: '开发指南',
          children: [
            {
              title: '更新日志',
              to: '/component/changelog'
            },
            {
              title: '安装',
              to: '/component/installation'
            },
            {
              title: '自定义主题',
              to: '/component/custom-theme'
            }
          ]
        },
        {
          title: '组件',
          children: [
            {
              title: '菜单1',
              to: '/component/menu1'
            },
            {
              title: '列表1',
              to: '/component/list1'
            },
            {
              title: '导航1',
              to: '/component/nav1'
            }
          ]
        }
      ]
    }
  ]
}

export default [
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
        title: '第2行多于2项的用法',
        titleDes: '第2行可显示多条数据，但要考虑移动端显示效果',
        code: `
          <template>
            <HuiList1 :data="data"></HuiList1>
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
  }
]
