const express = require('express');
const router = express.Router();

// In-memory array to store crime records
let crimeRecords = [];

// GET endpoint to retrieve all crime records
router.get('/crimes', (req, res) => {
    res.json(crimeRecords);
});

// POST endpoint to create a new crime record
router.post('/crimes', (req, res) => {
    const newRecord = req.body;
    crimeRecords.push(newRecord);
    res.status(201).json(newRecord);
});

// PUT endpoint to update a crime record
router.put('/crimes/:id', (req, res) => {
    const recordId = req.params.id;
    const updatedRecord = req.body;
    const index = crimeRecords.findIndex(record => record.id === recordId);
    if (index !== -1) {
        crimeRecords[index] = updatedRecord;
        res.json(updatedRecord);
    } else {
        res.status(404).send('Record not found');
    }
});

// DELETE endpoint to remove a crime record
router.delete('/crimes/:id', (req, res) => {
    const recordId = req.params.id;
    const index = crimeRecords.findIndex(record => record.id === recordId);
    if (index !== -1) {
        crimeRecords.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Record not found');
    }
});

module.exports = router;