import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import User from '../models/User';
import Appointment from '../models/Appointment';

class AppointmentController{
    async index(req, res) {
        const appointments = await Appointment.findAll({
            where: { user_id: req.userId, canceled_at: null },
            order: ['date'],
            attributes: ['id', 'date'],
            include: [
                {
                    model: User,
                    as: 'medico',
                    attributes: ['name', 'id'],
                },
            ],
        });

        return res.json(appointments);
    }

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

        //Check for past dates
        const hourStart = startOfHour(parseISO(date));

        if(isBefore(hourStart, new Date())) {
            return res.status(400).json({ error: 'Past dates are not permitted' });
        }

        //check date availability
        const checkAvailability = await Appointment.findOne({
            where: {
                medico_id,
                canceled_at: null,
                date: hourStart,
            },
        });

        if(checkAvailability) {
            return res.status(400).json({ error: 'Appointment date is not available' });
        }

        const appointment = await Appointment.create({
            user_id: req.userId,
            medico_id,
            date: hourStart,
        });

        return res.json(appointment);
    }
}

export default new  AppointmentController();