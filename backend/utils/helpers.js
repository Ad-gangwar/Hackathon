const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET;

// Creating an exports object for modularization
exports = {};

// Async function to generate a JWT token for a given user
exports.getToken = async (email, user) => {
    // Sign the JWT with the user's identifier, role, and the secret key
    // console.log(user.id);
    const token = jwt.sign({ identifier: user.id, role: user.role }, SECRET);

    // Return the generated token
    return token;
};


// Exporting the 'getToken' function for use in other parts of the application
module.exports = exports;
