import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private fakeUsers = [{ userName: "Muhammad Farooq", class: "11th" }];
  fetchUsers() {
    return this.fakeUsers;
  }
}
