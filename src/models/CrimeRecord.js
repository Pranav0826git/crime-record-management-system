const mongoose = require('mongoose');

const crimeRecordSchema = new mongoose.Schema({
    caseNumber: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'Closed', 'In Progress'],
        required: true
    },
    suspect: {
        name: String,
        age: Number,
        description: String
    }
}, { timestamps: true });

module.exports = mongoose.model('CrimeRecord', crimeRecordSchema);