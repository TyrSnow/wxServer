const Service = require('egg').Service;
import * as crypto from 'crypto';

const { WX_TOKEN } = process.env;

class WXService extends Service {
    sign(timestamp: string, nonce: string): string {
        const queryArray = [WX_TOKEN, timestamp, nonce].sort((a, b) => {
            return a < b ? -1 : 1;
        });
        let strQuery = queryArray.join('');
        console.log(strQuery)
        let hash = crypto.createHash('sha1');
        hash.update(strQuery);
        return hash.digest('hex');
    }
}

declare module 'egg' {
    export interface IService {
        wx: WXService
    }
}

module.exports = WXService;