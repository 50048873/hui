// 返回服务器错误信息html字符串
export function getServerErrorMessageAsHtml (err, filename) {
  return `<div style="text-align:left"><p>错误状态码：${err.status}</p><p>错误描叙：${err.statusText}</p><p>错误来源：${filename}</p></div>`
}
