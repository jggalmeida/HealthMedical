import Appointment from '../models/Appointment';
import * as Yup from 'yup';
import User from '../models/User';

class AppointmentController{
    async store(req, res) {
        const schema = Yup.object().shape({
            medico_id: Yup.number().required(),
            date: Yup.date().required(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validations fails' });
        }

        const { medico_id , date} = req.body;

        //verificando se o médico é um usuario tipo medico
        const isMedico = await User.findOne({
            where: { id: medico_id, user_type: 'Medico' },
        });

        if(!isMedico) {
            return res.status(401).json({ error: 'Só é permitido criar agendamentos com médicos' });
        }

        const appointment = await Appointment.create({
            user_id: req.userId,
            medico_id,
            date,
        });

        return res.json(appointment);
    }
}

export default new  AppointmentController();