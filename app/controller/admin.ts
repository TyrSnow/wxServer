import { Controller } from 'egg';

export default class AdminCtrl extends Controller {
  async regist() {
    const { user, password } = this.ctx.request.body;
    console.log(this.ctx.request.body);
    let admin = await this.ctx.service.admin.create_one(user, password);
    this.ctx.body = 'Success';
  }

  async change_password() {

  }

}