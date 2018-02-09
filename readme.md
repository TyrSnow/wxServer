# WXSERVER
[![Build Status](https://travis-ci.org/TyrSnow/wxServer.svg?branch=develop)](https://travis-ci.org/TyrSnow/wxServer) [![codecov](https://codecov.io/gh/TyrSnow/wxServer/branch/develop/graph/badge.svg)](https://codecov.io/gh/TyrSnow/wxServer) ![](https://img.shields.io/badge/license-MIT-000000.svg)
***
个人微信公众号的后台服务器，技术上使用[egg](https://github.com/eggjs/egg)框架+TypeScript，将会配合mongodb及redis做存储。

## 敏感参数的传递
为了避免微信验证时的token泄露，会在travis部署的时候手动将环境变量设置进去，所以，需要在开发环境配置以下环境变量：
> WX_TOKEN 微信服务器配置tokken  
> SERVER_SECRET_KEY 用户jwt加密tokken（可与生产环境不一致）
