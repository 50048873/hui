export default [
  {
    id: 'menu1',
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
    ]
  },
  {
    id: 'list1',
    attrs: [
      {
        attr: 'data',
        des: '列表数据',
        type: 'Array',
        optional: '—',
        default: '—'
      },
      {
        attr: 'title1',
        des: '第2行第1列的标题',
        type: 'String',
        optional: '—',
        default: '—'
      },
      {
        attr: 'title2',
        des: '第2行第2列的标题',
        type: 'String',
        optional: '—',
        default: '—'
      },
      {
        attr: 'unit1',
        des: '第2行第1列的单位',
        type: 'String',
        optional: '—',
        default: '—'
      },
      {
        attr: 'title1',
        des: '第2行第1列的单位',
        type: 'String',
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
    ]
  }
]
