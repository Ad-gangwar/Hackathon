const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "student" },
    name: {
        type: String,
        required: true
    },
    class: {
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
