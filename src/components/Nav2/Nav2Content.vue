<template>
  <ul>
    <li v-for="(child, index) in children" :key="index">
      <HuiNav2 v-if="child.children" :folder="child"/>
      <span v-else class="child">{{ child.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HuiNav2Content',
  props: {
    children: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
  ul {
    padding-left: 1em;
  }
</style>
