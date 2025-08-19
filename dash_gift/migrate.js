const path = require('path');
require('dotenv').config()

require('sql-migrations').run({
    migrationsDir: path.resolve(__dirname, 'migrations'),
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    db: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    adapter: 'pg',
});