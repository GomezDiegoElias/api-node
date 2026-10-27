import users from "./users.json" with { type: "json" }

export class UserModel {
    static async findAll() {
        return users;
    }
}