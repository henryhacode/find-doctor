const patientModel = require('../models/patientModel');
const doctorModel = require('../models/doctorModel');
const userModel = require('../models/userModel');
const StatusCodes = require('../utils/StatusCodes');

async function getPatientById(req, res, next) {
    try {
        const {username} = req.params;
        let patient = await patientModel.findOne({'username': username});
        res.status(StatusCodes.OK).json(patient);
    } catch (err) {
        next(err);
    }
};

async function bookAppointment(req, res, next) {
    try {
        const {username} = req.params;
        const {doctorUsername, time} = req.body;

        // update appointment to patient
        let doctor = await doctorModel.findOne({'username': doctorUsername});
        let newAppointment = {
            location: doctor.location,
            doctor: {
                username: doctor.username,
                fullname: doctor.fullname,
                avatarurl: doctor.avatarurl,
                specialty: doctor.specialty,
                phone: doctor.phone
            },
            time: time,
            status: 'BOOKING'
        };
        await patientModel.updateOne({
            'username': username,
        }, {
            $push: {
                'appointment': newAppointment
            }
        });

        // update appointment to doctor
        let patient = await patientModel.findOne({'username': username});
        let newAppointmentDoctor = {
            patient: {
                username: patient.username,
                fullname: patient.fullname,
                phone: patient.phone,
                avatarurl: patient.avatarurl
            },
            time: time,
            status: 'BOOKING'
        }
        await doctorModel.updateOne({
            'username': doctorUsername,
        }, {
            $push: {
                'appointment': newAppointmentDoctor
            }
        });
        res.status(StatusCodes.OK).json(`PATIENT: add appointment successfully!`);
    } catch (err) {
        next(err);
    }
}

async function cancelAppointment(req, res, next) {
    try {
        const {username} = req.params;
        const {doctorUsername, time} = req.body;
        await patientModel.updateOne({
            'username': username,
            'appointment.doctor.username': doctorUsername,
            'appointment.time': time
        }, {
            $set: {'appointment.$.status': 'CANCELLED'}
        });
        await doctorModel.updateOne({
            'username': doctorUsername,
            'appointment.patient.username': username,
            'appointment.time': time
        }, {
            $set: {'appointment.$.status': 'CANCELLED'}
        });
        res.status(StatusCodes.OK).json(`Cancelled appointment successfully!`);
    } catch (err) {
        next(err);
    }
}

async function updateInfoPatient(req, res, next) {
    try {
        const {username} = req.params;
        const {fullname, phone } = req.body;
        let { avatarurl } = req.body;

        console.log(username, fullname, avatarurl);

        if (req.file && req.file.location) {
            console.log('there is file uploaded: ', req.file.location);
            avatarurl = req.file.location;
        } else {
            console.log('no file uploaded');
        }

        // update info patient
        let updatedPatient = await patientModel.findOneAndUpdate({ 'username': username },
            { $set: { 'fullname': fullname, 'avatarurl': avatarurl, 'phone': phone } },
            { new: true });

        // update info user
        await userModel.updateOne({
            'username': username
        }, {
            $set: {'fullname': fullname, 'avatarurl': avatarurl}
        })

        // update info user in appointments
        const filters = { 'arrayFilters': [{ 'ele.patient.username': username }], 'multi': true }
        await doctorModel.updateMany({ 'appointment.patient.username': username},
            {'appointment.$[ele].patient.fullname': fullname,
                'appointment.$[ele].patient.phone': phone,
                'appointment.$[ele].patient.avatarurl': avatarurl}, filters
        );

        res.status(StatusCodes.OK).json(updatedPatient);
    } catch (err) {
        next(err);
    }
}

async function getAppointments(req, res, next) {
    try {
        const {username} = req.params;
        let appointments = await patientModel.findOne({username});
        if (appointments) {
            res.status(StatusCodes.OK).json(appointments.appointment);
        } else {
            res.json([]);
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getPatientById,
    bookAppointment,
    cancelAppointment,
    updateInfoPatient,
    getAppointments
}
