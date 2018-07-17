// 转换风情等级
export function convertWindDrection (deg) {
  deg = parseInt(deg)
  let direction
  if ((deg >= 350 && deg <= 360) || (deg >= 0 && deg <= 10)) {
    direction = '正北'
  } else if (deg >= 80 && deg <= 100) {
    direction = '正东'
  } else if (deg >= 170 && deg <= 190) {
    direction = '正南'
  } else if (deg >= 260 && deg <= 280) {
    direction = '正西'
  } else {
    if (deg > 10 && deg < 80) {
      direction = '东北'
    } else if (deg > 100 && deg < 170) {
      direction = '东南'
    } else if (deg > 190 && deg < 260) {
      direction = '西南'
    } else if (deg > 280 && deg < 350) {
      direction = '西北'
    }
  }
  return direction
}

export function androidInputBugFix () {
  // .container 设置了 overflow 属性, 导致 Android 手机下输入框获取焦点时, 输入法挡住输入框的 bug
  // 相关 issue: https://github.com/weui/weui/issues/15
  // 解决方法:
  // 0. .container 去掉 overflow 属性, 但此 demo 下会引发别的问题
  // 1. 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
  //    Android 手机下, input 或 textarea 元素聚焦时, 主动滚一把
  if (/Android/gi.test(navigator.userAgent)) {
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  }
}
