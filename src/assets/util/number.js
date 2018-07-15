import {isNumber} from './universal'
// 保留n位小数
export function handleDecimalLength (num, len) {
  if (!/^\d+$/.test(len)) {
    len = 2
  }
  if (!isNumber(num)) {
    num = parseFloat(num)
  }
  return num.toFixed(len)
}
