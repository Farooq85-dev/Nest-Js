import { UsersService } from "./users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): {
        userName: string;
        class: string;
    }[];
}
