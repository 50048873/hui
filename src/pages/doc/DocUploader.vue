<template>
  <div>
    <p>Uploader文档开发中...</p>
    <hui-uploader
      :maxSize="maxSize"
      :maxCount="maxCount"
      outputWidth="1920"
      @fileChanged="fileChanged">
    </hui-uploader>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxSize: 1024 * 1024,
      maxCount: 8
    }
  },
  methods: {
    fileChanged (files) {
      console.log(files)
    }
  }
}
</script>
