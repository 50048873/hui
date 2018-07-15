// 补充起止日期的空数据
export function padEmptyData ({startTime, endTime, intervalTime = 60 * 60 * 1000, data}) {
  startTime = new Date(startTime) * 1
  endTime = new Date(endTime) * 1
  let diff = endTime - startTime
  let count = parseInt(diff / intervalTime)
  let i = 0
  let j = 0
  let res = []
  while (i <= count) {
    let currentTime = startTime + intervalTime * i
    if (currentTime === (data[j] && new Date(data[j].time.replace(/:\d{2}/, ':00')) * 1)) {
      res.push(parseFloat(data[j].value))
      j++
    } else {
      res.push(null)
    }
    i++
  }
  return res
}
