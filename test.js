/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const formatParams = require('./index')

test('should return the original path if params is not a valid plain object',
  function (assert) {
    assert.deepEqual(formatParams('/id', undefined), '/id')
    assert.end()
  }
)

test('should return the original path if params is an empty object',
  function (assert) {
    assert.deepEqual(formatParams('/id', {}), '/id')
    assert.end()
  }
)

test('format with one param', function (assert) {
  assert.deepEqual(formatParams('/id', { id: 123 }), '/123')
  assert.end()
})

test('format with a more complex path and one param', function (assert) {
  assert.deepEqual(formatParams('/foo/id/bar', { id: 123 }), '/foo/123/bar')
  assert.end()
})

test('format more than one param', function (assert) {
  assert.deepEqual(
    formatParams('/foo/id/bar', { id: 123, bar: 'barz' }),
    '/foo/123/barz'
  )
  assert.end()
})
