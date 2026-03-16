const express = require('express');
const router = express.Router();

// Sample User Data (replace with a database)
let users = [];

// Create a new user
router.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).send(newUser);
});

// Get all users
router.get('/users', (req, res) => {
    res.send(users);
});

// Get a user by ID
router.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
});

// Update a user
router.put('/users/:id', (req, res) => {
    let user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).send('User not found');
    // Update logic here
    user = {...user, ...req.body};
    res.send(user);
});

// Delete a user
router.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== req.params.id);
    res.status(204).send();
});

module.exports = router;