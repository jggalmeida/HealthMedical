import User from '../models/User';

class MedicoController {
    async index(req, res) {
        const medicos = await User.findAll({
            where: { user_type: 'Medico' },
            attributes: ['id', 'name', 'email', 'endereco', 'bairro', 'cidade', 'cep', 'telefone'],
        });

        return res.json(medicos);
    }
}

export default new MedicoController();