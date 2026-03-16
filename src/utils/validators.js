// validators.js

/**
 * Validates user input for various fields.
 * @param {Object} input - The user input object.
 * @returns {Object} - An object containing validation errors.
 */
function validateUserInput(input) {
    const errors = {};

    if (!input.username || input.username.length < 3) {
        errors.username = 'Username must be at least 3 characters long.';
    }
    if (!input.email || !/
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
        errors.email = 'Invalid email format.';
    }
    if (!input.password || input.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long.';
    }

    return errors;
}

/**
 * Validates crime record data.
 * @param {Object} record - The crime record object.
 * @returns {Object} - An object containing validation errors.
 */
function validateCrimeRecord(record) {
    const errors = {};

    if (!record.caseNumber || record.caseNumber.trim() === '') {
        errors.caseNumber = 'Case number is required.';
    }
    if (!record.description || record.description.length < 10) {
        errors.description = 'Description must be at least 10 characters long.';
    }
    if (!record.date || isNaN(new Date(record.date))) {
        errors.date = 'Invalid date format.';
    }

    return errors;
}

module.exports = { validateUserInput, validateCrimeRecord };