import Sequelize, { Model } from 'sequelize';
import bcrypt from'bcryptjs';

class User extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                user_type: Sequelize.STRING,
                endereco: Sequelize.STRING,
                bairro: Sequelize.STRING,
                cidade: Sequelize.STRING,
                cep: Sequelize.STRING,
                telefone: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        this.addHook('beforeSave', async (user) => {
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

    checkpassword(password){
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User;