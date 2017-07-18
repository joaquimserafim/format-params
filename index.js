/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const isObject  = require('is.object')
const size      = require('object.size')

module.exports = formatParams

function formatParams (path, params) {
  if (!isObject(params) || !size(params)) {
    return path
  }

  const arr = path.split('/')
  const len = arr.length

  for (let i = 0; i < len; i++) {
    let found = params[arr[i]]

    if (found) {
      arr[i] = found
    }
  }

  return arr.join('/')
}
