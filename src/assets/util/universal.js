let toString = Object.prototype.toString

export function isArray (param) {
  return toString.call(param) === '[object Array]'
}

export function isObject (param) {
  return toString.call(param) === '[object Object]'
}

export function isString (param) {
  return toString.call(param) === '[object String]'
}

export function isNumber (param) {
  return toString.call(param) === '[object Number]'
}

// 标准化requestAnimationFrame方法
export function normalizeRequestAnimationFrame () {
  var lastTime = 0
  var vendors = ['webkit', 'moz']
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime()
      var timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
      var id = window.setTimeout(function () {
        // eslint-disable-next-line
        callback(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
};

/*
* 生成uuid
* 这个可以指定长度和基数。比如
    // 8 character ID (base=16)
    uuid(32, 16) // "098F4D35"
* */
export let getUuid = function (len, radix) {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  let uuid = []
  let i
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    // rfc4122, version 4 form
    let r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }

  return uuid.join('')
}

// 对象URL（blob URL），指的是引用保存在File或Blob中数据的URL
export function createObjectURL (blob) {
  if (window.URL) {
    return window.URL.createObjectURL(blob)
  } else if (window.webkitURL) {
    return window.webkitURL.createObjectURL(blob)
  } else if (window.mozURL) {
    return window.mozURL.createObjectURL(blob)
  } else {
    return null
  }
}

// dataURL转换为Blob对象
export function dataURLtoBlob (dataurl) {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {type: mime})
}

// dataURL转换为File对象
export function dataURLtoFile (dataurl, filename) {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, {type: mime})
}

// 压缩图片并输出dataURL格式
export function compress (img, width, height, ratio, fileType) {
  let canvas
  let ctx
  let img64

  canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, width, height)

  img64 = canvas.toDataURL(fileType, ratio)

  return img64
}

// 节流
export function throttle (fn, context, time) {
  clearTimeout(fn.tId)
  fn.tId = setTimeout(function () {
    fn.call(context)
  }, time || 100)
}
