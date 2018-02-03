"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const crypto = require("crypto");
class WXController extends egg_1.Controller {
    async index() {
        const { query } = this.ctx;
        const { signature, timestamp, nonce, echostr } = query;
        const { TOKEN } = process.env;
        const queryArray = [TOKEN, timestamp, nonce].sort((a, b) => {
            return a < b ? -1 : 1;
        });
        let strQuery = queryArray.join('');
        let hash = crypto.createHash('sha1');
        hash.update(strQuery);
        let sign = hash.digest('hex');
        if (sign === signature) {
            this.ctx.body = echostr;
        }
        else {
            console.log(query);
            this.ctx.status = 400;
            this.ctx.body = 'Signature not match.';
        }
    }
}
exports.default = WXController;
//# sourceMappingURL=wx.js.map