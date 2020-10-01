# aliyun-serverless-http
让阿里云可以通过serverless-http库使用express、koa等框架。

## 如何使用
```javascript
const serverless = require('serverless-http');
const getAliyunCb = require('aliyun-serverless-http');

const Koa = require('koa');

const app = new Koa();
// ... setup

exports.handler = getAliyunCb(serverless(app));
``` 