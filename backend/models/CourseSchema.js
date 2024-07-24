const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code : {
        type: String,
        required: true
    }
});

module.exports =mongoose.models.Course ||  mongoose.model("Course", courseSchema);