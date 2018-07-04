<template>
  <div>
    更新日志
  </div>
</template>

<script>
import {initSingeDirectionData} from '@/assets/js/mixin'
export default {
  mixins: [initSingeDirectionData],
  methods: {
    headerLeftClick (title) {
      console.log(title)
    }
  }
}
</script>
