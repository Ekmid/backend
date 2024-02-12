import { Injectable } from '@nestjs/common';
import { users } from "../moks";

@Injectable()
export class UsersService {
    getUsers() {
        return users;
    }

    getNames() {
        const names: string[] = users.map(user => user.profile.name);
        return names;
    }
}
