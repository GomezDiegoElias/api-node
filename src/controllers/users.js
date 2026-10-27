import { UserModel } from "../models/user.js";

export class UserController {
    static async findAllUsers (req, res) {
        const users = await UserModel.findAll();
        return res.json(users);
    }
}