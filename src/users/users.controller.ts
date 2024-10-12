import { UsersService } from "./users.service";
import { Controller, Get } from "@nestjs/common";

// This controller decorator is telling to nest js. It is a user controller. Inside this controller it is our api route for users. Like http://localhost:3000/users

@Controller("/users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.fetchUsers();
  }
}
