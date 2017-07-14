# format-params

a simple way to format params for an http request

----
<a href="https://nodei.co/npm/format-params/"><img src="https://nodei.co/npm/format-params.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/format-params.svg?branch=master)](https://travis-ci.org/joaquimserafim/format-params)[![Coverage Status](https://coveralls.io/repos/github/joaquimserafim/format-params/badge.svg)](https://coveralls.io/github/joaquimserafim/format-params)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/format-params/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.x.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/format-params/blob/master/package.json#L42)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api
`const formatParams = require('format-params)`


### example

```js
formatParams('/id', { id: 123 })
// should return /123

formatParams('/resource/id/child/nameParent', { id: 123,  nameParent: 'Roy'})
// should return /resource/123/child/Roy

```


#### ISC License (ISC)
