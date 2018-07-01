import docData from '@/assets/data/doc'

export let initSingeDirectionData = {
  methods: {
    initSingeDirectionData () {
      let res = docData.filter((item) => {
        return item.id.toLowerCase() === this.$route.name.toLowerCase()
      })
      this.docData = res[0]
    }
  },
  created () {
    this.initSingeDirectionData()
  }
}

export let iconProps = {
  props: {
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
