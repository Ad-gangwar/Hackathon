const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    Class: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.models.Course || mongoose.model("Course", courseSchema);
