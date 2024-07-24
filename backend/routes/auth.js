const express = require('express');
const Student = require('../models/StudentSchema');
const Teacher = require('../models/TeacherSchema');
const College = require('../models/CollegeSchema');

const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { getToken } = require('../utils/helpers');
const app = express();

router.post('/register', async (req, res) => {
    // Extracting user details from the request body
    const { email, password, name, role, photo, gender } = req.body;

    try {
        // Check if user with the same email already exists
        const existingUser = await Student.findOne({ email });

        if (existingUser) {
            return res.status(403).json({ error: "A user with this email already exists" });
        }

        // Hash the password using bcrypt
        const hashPass = await bcrypt.hash(password, 10);

        // Create a new user based on the role
        let user = new Doctor({ name, email, password: hashPass, gender, role, photo});
        // console.log(user);
        // Save the user to the database
        await user.save();

        // Prepare user data to return in the response
        const userToReturn = { ...user.toJSON() };
        // Remove the password from the response for security reasons
        delete userToReturn.password;

        res.status(200).json({ user: userToReturn, success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }).withMessage('should contain min 5 char'),
], async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).json({ err: result.array() });
    }

    try {
        let email = req.body.email;
        let userData = null;
        const student = await Student.findOne({ email });
        const teacher = await Teacher.findOne({ email });
        const college = await College.findOne({ email });

        if (teacher) {
            userData = teacher;
        } else if (student) {
            userData = student;
        } else if (college) {
            userData = college;
        }

        if (!userData) {
            return res.status(400).json({ err: 'Email not found! Enter correct email' });
        }

        const providedPassword = req.body.password;
        const storedPassword = userData.password;
        let isValidPass = false;

        // Check if the password is hashed (assuming hashed passwords contain a '$' character)
        if (storedPassword.includes('$')) {
            // Compare the provided password with the hashed password
            isValidPass = await bcrypt.compare(providedPassword, storedPassword);
        } else {
            // Compare the provided password with the unhashed password
            isValidPass = (providedPassword === storedPassword);
        }

        if (!isValidPass) {
            return res.status(400).json({ err: 'Enter valid Credentials' });
        }

        const jwtPayload = {
            id: userData._id,
            role: userData.role,  // 'teacher', 'student', or 'college'
        };
        const token = await getToken(userData.email, jwtPayload);

        const userToReturn = { ...userData.toJSON() };
        delete userToReturn.password;

        return res.status(200).json({ data: userToReturn, token: token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal server error' });
    }
});

module.exports=router;

