// 图标容器（用于属性定义图标）
// import Icon from './Icon'
// 普通图标
import IconNormalExplain from './iconNormal/IconNormalExplain'
import IconNormalWind from './iconNormal/IconNormalWind'
// 动画图标
import IconAnimatedRain from './iconAnimated/IconAnimatedRain'
import IconAnimatedWater from './iconAnimated/IconAnimatedWater'
import IconAnimatedWind from './iconAnimated/IconAnimatedWind'

export default (Vue) => {
  // Vue.component(Icon.name, Icon)

  Vue.component(IconNormalExplain.name, IconNormalExplain)
  Vue.component(IconNormalWind.name, IconNormalWind)

  Vue.component(IconAnimatedRain.name, IconAnimatedRain)
  Vue.component(IconAnimatedWater.name, IconAnimatedWater)
  Vue.component(IconAnimatedWind.name, IconAnimatedWind)
}
