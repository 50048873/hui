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
