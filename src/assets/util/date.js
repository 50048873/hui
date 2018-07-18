import {isArray, isString} from './universal'
// 按数组对象里的日期格式化成标准
export function standardDate (data, key) {
  data = data.slice()
  if (isArray(data) && data.length) {
    let res = []
    res.push(data[0])
    data.reduce((prev, cur, index) => {
      let obj = Object.assign({}, cur)
      if (isString(prev[key]) && prev[key].indexOf('-')) {
        let prevArr = prev[key].split('-')
        let curArr = cur[key].split('-')
        let prevY = prevArr[0]
        let prevM = prevArr[1]
        let prevD = prevArr[2]
        let curY = curArr[0]
        let curM = curArr[1]
        let curD = curArr[2]
        if (curY === prevY) {
          if (curD) {
            obj[key] = `${curM}-${curD}`
          } else {
            obj[key] = curM
          }
          if (curM === prevM) {
            obj[key] = curD
            if (isString(curD) && curD.indexOf(' ') > -1) {
              let _curD = curD.split(' ')
              let _prevD = prevD.split(' ')
              if (_curD[0] === _prevD[0]) {
                obj[key] = curD.split(' ')[1]
              }
            }
          }
        } else {
          obj[key] = cur[key]
        }
      } else {
        obj[key] = cur[key]
      }
      res.push(obj)
      return cur
    })
    return res
  }
  return data
}

// 获取指定日期
/*
  * addDayCount: 增减天数（Number）
  * hour: 小时（Boolean）
  * minute: 分（Boolean）
  * second: 秒（Boolean）
  * utc: 是否是UTC格式（Boolean）
*/
export function getDateStr (addDayCount = 0, hour, minute, second, utc) {
  let dd = new Date()
  dd.setDate(dd.getDate() + addDayCount) // 获取AddDayCount天后的日期
  let y = dd.getFullYear()
  let m = (dd.getMonth() + 1).toString().padStart(2, '0')
  let d = dd.getDate().toString().padStart(2, '0')
  let getHour = () => {
    return dd.getHours().toString().padStart(2, '0')
  }
  let getMinute = () => {
    return dd.getMinutes().toString().padStart(2, '0')
  }
  let getSecond = () => {
    return dd.getSeconds().toString().padStart(2, '0')
  }
  let divide = utc ? 'T' : ' '
  let res
  if (hour && minute && second) {
    res = `${y}-${m}-${d}${divide}${getHour()}:${getMinute()}:${getSecond()}`
  } else if (hour && minute) {
    res = `${y}-${m}-${d}${divide}${getHour()}:${getMinute()}`
  } else if (hour) {
    res = `${y}-${m}-${d}${divide}${getHour()}`
  } else {
    res = `${y}-${m}-${d}`
  }
  return res
}
