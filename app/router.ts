export default (app) => {
  const { router, controller } = app;
  router.get('/wx', controller.wx.index);
};
