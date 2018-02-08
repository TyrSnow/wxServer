const xmlParser = require('koa-xml-body');

export default (app) => {
  const { router, controller } = app;
  router.get('/wx', controller.wx.index);
  router.post('/wx', xmlParser(), controller.wx.push);
};
