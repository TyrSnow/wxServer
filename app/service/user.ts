import { Service } from 'egg';

class UserService extends Service {
  
}

declare module 'egg' {
    export interface IService {
        user: UserService
    }
}

export default UserService;