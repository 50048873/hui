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
