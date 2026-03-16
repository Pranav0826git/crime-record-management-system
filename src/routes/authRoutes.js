const express = require('express');
const router = express.Router();

// Mock user data
let users = [];

// User registration endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }
    // Check if user already exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(409).send('User already exists.');
    }
    // Register new user
    users.push({ username, password });
    res.status(201).send('User registered successfully.');
});

// User login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }
    // Check credentials
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).send('Invalid username or password.');
    }
    res.status(200).send('Login successful.');
});

module.exports = router;