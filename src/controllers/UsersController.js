const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const knex = require("../database/knex");

class UsersController {

    //FIXME: Resolver a verificação de email.
    async create(request, response) {

        const { name, email, password } = request.body;
        const [checkUserExiste] = await knex("users").where({ "email": email });
        if (checkUserExiste) throw new AppError("Este email já está em uso.");
        const hashedPassword = await hash(password, 8);
        
        await knex.insert({ name, email, password: hashedPassword }).into("users");

        return response.status(201).json();
    }

    async update(request, response) {

        const { name, email, password, old_password } = request.body;
        const user_id = request.user.id;
        const [user] = await knex("users").where({ "id": user_id });
        if (!user) throw new AppError("Usuário não encontrado.");
        const [userUpdatedEmail] = await knex("users").where({ "email": email });
        if (userUpdatedEmail && userUpdatedEmail.id !== user.id) throw new AppError("Este email já está em uso");

        if (password && !old_password) throw new AppError("Você precisa informar a senha antiga para definir uma nova senha.");
        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);
            if (!checkOldPassword) throw new AppError("A senha antiga não está correta");
            user.password = await hash(password, 8);
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        await knex("users").update({ name: user.name, email: user.email, password: user.password }).where({ "id": user_id });

        return response.status(200).json();
    }

    async delete(request, response) {
        const user_id = request.user.id;
        await knex("users").where({ "id": user_id }).delete();
        return response.status(200).json();
    }

}

module.exports = UsersController;