export const Menu1ExampleBasic = `
<template>
  <HuiMenu1 :data="data"></HuiMenu1>
</template>

<script>
export default {
  data () {
    return {
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
        }
      ]
    }
  }
}
</script>`
