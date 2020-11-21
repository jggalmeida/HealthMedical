import User from '../models/User';

class UserController {
    async store(req, res){
        const userExists = await User.findOne({ where: {email: req.body.email}});

        if(userExists){
            return res.status(400).json({error: 'User already exists.'});
        }

        const {id, name, email, user_type } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
            user_type,
        });
    }
}

export default new UserController();