import User from '../models/User';

class MedicoController {
    async index(req, res) {
        const medicos = await User.findAll({
            where: { user_type: 'Medico' },
            attributes: ['id', 'name', 'email'],
        });

        return res.json(medicos);
    }
}

export default new MedicoController();