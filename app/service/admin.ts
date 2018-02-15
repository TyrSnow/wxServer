import { Service } from 'egg';

class AdminService extends Service {
  create_one(
    name: string,
    password: string
  ) {
    let admin = new this.ctx.model.Admin({
      name,
      password: {
        name: password
      }
    });
    return admin.save();
  }
}

declare module 'egg' {
  export interface IService {
    admin: AdminService
  }
}

export default AdminService;