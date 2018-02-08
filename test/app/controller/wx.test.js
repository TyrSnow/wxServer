const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/wx.test.js', () => {

  it('should assert', function () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET 400', () => {
    return app.httpRequest()
      .get('/wx')
      .expect('Signature not match.')
      .expect(400);
  });

  it('should GET 200', () => {
    return app.httpRequest()
      .get('/wx')
      .query({
        signature: 'c326ac7871d28e0dce21c981b1b39421dacf0456',
        echostr: '2500486904219040247',
        timestamp: '1518094485',
        nonce: '630546959'
      })
      .expect('2500486904219040247')
      .expect(200);
  });
});
