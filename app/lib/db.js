import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'booking_db',
    password: 'mysecretpassword',
    port: 5432,
});


export { pool };

/*
export const query = (text, params) => pool.query(text, params);
:/
 */
