export default (app) => {
  const { router, controller } = app;
  router.get('/wx', controller.wx.index);
  router.post('/wx', controller.wx.push);
};
