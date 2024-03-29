const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionsController {
    async create(request, response) {
        const { email, password } = request.body;

        const [user] = await knex("users").where({ email });
        if (!user) throw new AppError("email e/ou senha incorreta", 401);

        const hashedPassword = await compare(password, user.password);
        if (!hashedPassword) throw new AppError("email e/ou senha incorreta", 401);

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.status(200).json({ user, token });
    }

}

module.exports = SessionsController;