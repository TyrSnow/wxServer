import { Controller } from 'egg';
import * as crypto from 'crypto';
export default class WXController extends Controller {
  async index() {
    const { query } = this.ctx;
    const { signature, timestamp, nonce, echostr } = query;
    const { WX_TOKEN } = process.env;
    
    const queryArray = [WX_TOKEN, timestamp, nonce].sort((a, b) => {
      return a < b ? -1 : 1;
    });
    let strQuery = queryArray.join('');

    let hash = crypto.createHash('sha1');
    hash.update(strQuery);
    let sign = hash.digest('hex');

    if (sign === signature) {
      this.ctx.body = echostr;
    } else {
      this.ctx.status = 400;
      this.ctx.body = 'Signature not match.';
    }
  }
}