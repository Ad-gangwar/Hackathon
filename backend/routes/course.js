const express = require('express');
const Course = require('../models/CourseSchema');
const router = express.Router();
const app = express();

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json({ success: true, message: "Successful", data: courses });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found!" });
    }
}

const updateCourse = async (req, res) => {
    const { courseId, roomId, timing } = req.body;
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            { $set: { roomId, timing } },
            { new: true }
        );

        if (!updatedCourse) {
            // Course not found
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        // Successfully updated
        return res.status(200).json({ success: true, message: 'Successfully updated', data: updatedCourse });
    } catch (err) {
        console.error('Error updating course:', err);
        return res.status(500).json({ success: false, message: 'Failed to update course' });
    }
};


router.get('/', getAllCourses);
router.post('/update', updateCourse);
module.exports=router;