let toString = Object.prototype.toString

export function isArray (arr) {
  return toString.call(arr) === '[object Array]'
}

export function isObject (obj) {
  return toString.call(obj) === '[object Object]'
}

export function isString (str) {
  return toString.call(str) === '[object String]'
}

export function isNumber (num) {
  return toString.call(num) === '[object Number]'
}
