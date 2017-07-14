/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = formatParams

function formatParams (path, params) {
  const arr = path.split('/')
  const len = arr.length
  let i = 0

  for (; i < len; i++) {
    const found = params[arr[i]]

    if (found) {
      arr[i] = found
    }
  }

  return arr.join('/')
}
