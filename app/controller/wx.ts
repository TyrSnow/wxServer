import { Controller } from 'egg';
export default class WXController extends Controller {
  async index() {
    const { query } = this.ctx;
    const { signature, timestamp, nonce, echostr } = query;
    
    let sign = this.ctx.service.wx.sign(timestamp, nonce);

    if (sign === signature) {
      this.ctx.body = echostr;
    } else {
      this.ctx.status = 400;
      this.ctx.body = 'Signature not match.';
    }
  }

  async push() {
    const { query, data, logger } = this.ctx;

    logger.info('Weixin push data: %j', data);
    logger.info('Weixin push query: %j', query);
    this.ctx.body = '';
  }
}