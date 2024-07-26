const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    ID: {type: String, required: true},
    role: { type: String, default: "student" },
    photo: {type: String, required: true},
    gender: {type: String},
    phone: {type: String},
    name: {
        type: String,
        required: true
    },
    Class: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

// Check if the model already exists before defining it
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
module.exports = Student;
