<script>
export default {
  name: 'HuiTabs',
  props: {
    value: {
      type: [String, Number]
    }
  },
  methods: {
    a () {

    }
  },
  render (h) {
    let {a} = this
    console.log(a, this)
    return (
      <div class="HuiTabs">
        {this.$slots.default}
      </div>
    )
  }
}
</script>
