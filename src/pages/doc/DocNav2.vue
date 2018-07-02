<template>
  <div>
    <HuiNav2 :folder="folder"></HuiNav2>
  </div>
</template>

<script>
// import {initSingeDirectionData} from '@/assets/js/mixin'
export default {
  created () {
    this.folder = {
      title: '',
      children: [
        {
          title: '开发指南',
          children: [
            {
              title: '更新日志',
              to: '/component/changelog'
            }
          ]
        },
        {
          title: '组件',
          children: [
            {
              title: '基础',
              children: [
                {
                  title: '图标1',
                  to: '/component/icon'
                },
                {
                  title: '图标2',
                  to: '/component/icon'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
