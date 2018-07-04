<template>
  <div>
    自定主题
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
