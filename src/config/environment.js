require('dotenv').config();

const Joi = require('joi');

const envSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
    PORT: Joi.number().default(3000),
    DB_URL: Joi.string().uri().required(),
    SECRET_KEY: Joi.string().required(),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    dbUrl: envVars.DB_URL,
    secretKey: envVars.SECRET_KEY,
};